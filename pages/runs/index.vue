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
            <va-data-table :items="runs && runs.result.runs ? runs.result.runs : []" :no-data-html="noItemText"
              :no-data-filtered-html="noItemText" :columns="runColumns" :per-page="pageSize" :current-page="currentPage"
              :filter="filterKeyword" sticky-header>
              <template #cell(name)="{ rowIndex, rowData }">
                <div class="table-cell" :title="rowData.name">
                  {{ rowData.name }}
                </div>
              </template>
              <template #cell(experiment)="{ rowIndex, rowData }">
                <div v-for="item in rowData.resource_references">
                  <div v-if="item.key.type == 'EXPERIMENT'">
                    {{ item.name }}
                  </div>
                </div>
              </template>
              <template #cell(pipeline_version)="{ rowIndex, rowData }">
                <div v-for="item in rowData.resource_references">
                  <div class="table-cell" :title="item.name" v-if="item.key.type == 'PIPELINE_VERSION'">
                    {{ item.name }}
                  </div>
                </div>
              </template>
              <template #cell(created_at)="{ rowIndex, rowData }">
                <div>
                  {{ new Date(rowData.created_at).toLocaleString() }}
                </div>
              </template>
              <template #cell(scheduled_at)="{ rowIndex, rowData }">
                <div>
                  {{ new Date(rowData.created_at).toLocaleString() }}
                </div>
              </template>
              <template #cell(details)="{ rowIndex, rowData }">
                <div>
                  <va-button size="small" class="px-2" @click="details(rowData.run_id)">확인</va-button>
                </div>
              </template>
              <template #bodyAppend>
                <tr>
                  <td colspan="8">
                    <div class="page-view">
                      <va-pagination v-model="currentPage"
                        :pages="pagenationView(pageSize, runs?.result.runs ? runs.result.runs : [])" :visible-pages="5"
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
import { runsToolButton } from '~~/assets/data/ToolButton/runs'



const toolButtons = ref(runsToolButton);
const pageTitle = ref('Runs')


const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";

const runs = await getRuns(null);

const details = (id: string) => {
  navigateTo(`/runs/details/${id}`)
}

</script>
  
<style>
.table-cell {
  display: inline-block;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
