<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <PageTitle :pageTitle="pageTitle" />
        </template>
        <template #right>
          <ToolButton :toolButtons="toolButtons" />
        </template>
      </va-navbar>
    </div>
    <div class="row">
      <div class="px-3 flex flex-col md12 xs12 lg12">
        <va-card outlined>
          <va-card-title>{{ pageTitle }}</va-card-title>
          <va-card-content>
            <va-data-table :items="notebooks && notebooks.result ? notebooks.result : []" :no-data-html="noItemText"
              :no-data-filtered-html="noItemText" :columns="notebookColums" :per-page="pageSize"
              :current-page="currentPage" :filter="filterKeyword" sticky-header>
              <template #cell(status)="{ rowIndex, rowData }">
                <div v-if="rowData.status.hasOwnProperty('running')">
                  <span :title="rowData.status.running.startedAt">Running</span>
                </div>
                <div v-if="rowData.status.hasOwnProperty('waiting')">
                  <span :title="rowData.status.reason">Waiting</span>
                </div>
              </template>
              <template #cell(created_at)="{ rowIndex, rowData }">
                <div>
                  {{ new Date(rowData.created_at).toLocaleString() }}
                </div>
              </template>
              <template #cell(details)="{ rowIndex, rowData }">
                <div>
                  <va-button size="small" @click="details(rowData.name)">상세보기</va-button>
                </div>
              </template>
              <template #cell(connect)="{ rowIndex, rowData }">
                <div>
                  <a v-if="rowData.status.hasOwnProperty('running')" :href="rowData.connect" target="_blank">
                    <va-button size="small">Connect</va-button>
                  </a>
                  <va-button v-else size="small" disabled>Connect</va-button>
                </div>
              </template>
              <template #cell(delete)="{ rowIndex, rowData }">
                <div>
                  <va-button size="small" @click="del(rowData.name)">Delete</va-button>
                </div>
              </template>
              <template #bodyAppend>
                <tr>
                  <td colspan="8">
                    <div class="page-view">
                      <va-pagination v-model="currentPage"
                        :pages="pagenationView(pageSize, notebooks?.result ? notebooks.result : [])" :visible-pages="5"
                        gapped />
                    </div>
                  </td>
                </tr>
              </template>
            </va-data-table>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { notebooksToolButton } from '~~/assets/data/ToolButton/notebooks'


const { $bus } = useNuxtApp();
const router = useRouter();
const { init, close, closeAll } = useToast()
const { confirm } = useModal()

const pageTitle = ref('Notebooks')

const toolButtons = ref(notebooksToolButton);
const currentPage = ref(1)
const filterKeyword = ref("")


const details = (notebookName: string) => {
  // router.push(`/notebooks/details/${notebookName}`)
  navigateTo(`/notebooks/details/${notebookName}`)
}



const del = (notebookName: string) => {
  confirm('삭제하시겠습니까?')
    .then((ok) => {
      if (ok) {
        deleteNotebook(localStorage.getItem('namespace'), notebookName)
          .then(notebook => {
            init({
              message: '삭제하였습니다 ',
              dangerouslyUseHtmlString: true,
              position: 'bottom-right',
              color: 'success',
            })
            getNotebooks(localStorage.getItem('namespace'))
              .then((data) => {
                notebooks.value = data.value
              })
          })
      }
    })
}

const notebooks = await getNotebooks(localStorage.getItem('namespace'))
$bus.$on('namespace', async (data: string) => {
  notebooks.value = (await getNotebooks(localStorage.getItem('namespace'))).value
})


</script>

<style>
.table-cell {
  display: inline-block;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
