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
              :items="nodes ? nodes.result : []"
              :no-data-html="noItemText"
              :no-data-filtered-html="noItemText"
              :columns="columns"
              :per-page="pageSize"
              :current-page="currentPage"
              :filter="filterKeyword" 
              sticky-header
            >
            </va-data-table>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div> 
</template>

<script setup lang="ts">
const config = useAppConfig();

// import { cluster_nodes } from '~~/assets/data/sample/cluster_nodes';
const pageTitle = ref('Services')


// const nodesData = cluster_nodes

const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";
const columns: any[] = [
  { label: '노드명', key: 'name'},
  { label: '버전', key: 'version'},
  { label: '상태', key: 'status'},
  { label: '시작시간', key: 'create_date'},
]


const { data:nodes, error,  } = await useFetch<ResponseBody>('/cluster/nodes', {
  method: 'GET',
  baseURL: config.apiServer,
})

</script>