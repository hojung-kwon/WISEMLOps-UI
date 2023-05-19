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
              :items="pods ? pods.result : []"
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
import { getPods } from '~~/composables/cluster';

const { $bus } = useNuxtApp();

const config = useAppConfig();

const pageTitle = ref('Pods')

const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";
const columns: any[] = [
  { label: '노드명', key: 'name'},
  { label: 'Ready', key: 'ready'},
  { label: '상태', key: 'status'},
  { label: 'Restarts', key: 'restarts'},
  { label: '시작시간', key: 'create_date'},
]

const pods = await getPods(localStorage.getItem('namespace'))

$bus.$on('namespace', async ( data:string ) =>  {
  pods.value = (await getPods(localStorage.getItem('namespace'))).value
})

</script>