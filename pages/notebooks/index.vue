<template>
<div>
  <div class="row">
    <va-navbar color="backgroundPrimary">
      <template #left>
        <PageTitle :pageTitle="pageTitle"/>
      </template>
      <template #right>
        <ToolButton :toolButtons="toolButtons"/>
      </template>
    </va-navbar>
  </div>
  <div class="row">
    <div class="px-3 flex flex-col md12 xs12 lg12">
      <va-card outlined>
        <va-card-title>{{ pageTitle }}</va-card-title>
        <va-card-content>
          <va-data-table
          :items="notebooks ? notebooks.result : []"
              :no-data-html="noItemText"
              :no-data-filtered-html="noItemText"
              :columns="notebookColums"
              :per-page="pageSize"
              :current-page="currentPage"
              :filter="filterKeyword" 
              sticky-header
          >
          <template #cell(create_date)="{ rowIndex, rowData }">
            <div>
              {{ new Date(rowData.create_date).toLocaleString() }}
            </div>
          </template>
          <template #cell(view)="{ rowIndex, rowData }">
            <div>
              <va-button size="small">보기</va-button>
            </div>
          </template>
          <template #bodyAppend>
            <tr>
              <td colspan="8">
                <div class="page-view">
                  <va-pagination 
                    v-model="currentPage" 
                    :pages="pagenationView(pageSize, notebooks?.result)" 
                    :visible-pages="5"
                    gapped
                  />
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

const pageTitle = ref('Notebooks')

const toolButtons = ref(notebooksToolButton);
const currentPage = ref(1)
const filterKeyword = ref("")


const notebooks = await getNotebooks(localStorage.getItem('namespace'))

console.log(notebooks? notebooks.value?.result: [])

$bus.$on('namespace', async ( data:string ) =>  {
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
