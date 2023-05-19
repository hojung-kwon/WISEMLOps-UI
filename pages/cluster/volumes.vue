<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <PageTitle :pageTitle="pageTitle"/>
        </template>
      </va-navbar>
    </div>
    <div class="row">
      <div class="px-3 flex flex-col md12 xs12 lg12">
        <va-card outlined>
          <va-card-title>{{ pageTitle }}</va-card-title>
          <va-card-content>
            <va-data-table
              :items="volumes ? volumes.result : []"
              :no-data-html="noItemText"
              :no-data-filtered-html="noItemText"
              :columns="columns"
              :per-page="pageSize"
              :current-page="currentPage"
              :filter="filterKeyword" 
              sticky-header
            >
              <template #bodyAppend>
                <tr>
                    <td colspan="8">
                        <div class="page-view">
                            <va-pagination 
                              v-model="currentPage" 
                              :pages="pageView()" 
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
const config = useAppConfig();

const pageTitle = ref('Cluster Volumes')

const pageSize: number = 10;
const currentPage = ref(1)
const filterKeyword: string = "";
const noItemText: string = "No Item";
const columns: any[] = [
  { label: 'Volume명', key: 'name'},
  { label: '용량', key: 'capacity'},
  { label: '상태', key: 'status'},
  { label: 'Storage Class', key: 'storage_class'},
  { label: '접근모드', key: 'access_mode'},
  { label: 'Reclaim Policy', key: 'reclaim_policy'},
  { label: 'Claim', key: 'claim'},
  { label: 'REASON', key: 'reason'},
  { label: '생성일시', key: 'create_date'},
]



const { data:volumes, error,  } = await useFetch<ResponseBody>('/cluster/volumes', {
  method: 'GET',
  baseURL: config.apiServer,
})

const test = () => {
  console.log(currentPage)
}

const pageView = () => {
    return pageSize && pageSize !== 0 ? Math.ceil(volumes.value?.result.length / pageSize) : volumes.value?.result.length;
}
</script>