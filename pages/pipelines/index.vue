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
              :items="pipelines ? pipelines.result.pipelines: []"
              :no-data-html="noItemText"
              :no-data-filtered-html="noItemText"
              :columns="pipelineColumns"
              :per-page="pageSize"
              :current-page="currentPage"
              :filter="filterKeyword" 
              sticky-header
            >
            <template #cell(description)="{ rowIndex, rowData }">
              <div class="table-cell" :title="rowData.description">
              {{ rowData.description }}
              </div>
            </template>
            <template #cell(created_at)="{ rowIndex, rowData }">
              <div>
                {{ new Date(rowData.created_at).toLocaleString() }}
              </div>
            </template>
            <template #cell(details)="{ rowIndex, rowData }">
              <div>
                <va-button size="small" @click="details(rowData.id)">상세보기</va-button>
              </div>
            </template>
            <template #bodyAppend>
              <tr>
                <td colspan="8">
                  <div class="page-view">
                    <va-pagination 
                      v-model="currentPage" 
                      :pages="pagenationView(pageSize, pipelines?.result.pipelines)" 
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
import { pipelinesToolButton } from '~~/assets/data/ToolButton/pipelines'

const { $bus } = useNuxtApp();
  
const toolButtons = ref(pipelinesToolButton);
const pageTitle = ref('Pipelines')


const currentPage = ref(1)
const filterKeyword = ref('')
  
const details = ( id: string ) => {
  navigateTo(`/pipelines/details/${id}`)
}


const pipelines = await getPipelines();
// $bus.$on('namespace', async ( data:string ) =>  {
//   pipelines.value = (await getNotebooks(localStorage.getItem('namespace'))).value
// })

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
