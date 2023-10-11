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
            <va-data-table :items="experiments ? experiments.result.experiments : []" :no-data-html="noItemText"
              :no-data-filtered-html="noItemText" :columns="experimentColumns" :per-page="pageSize"
              :current-page="currentPage" :filter="filterKeyword" sticky-header>
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
                  <va-button size="small" class="px-2" @click="details(rowData.experiment_id)">상세보기</va-button>
                </div>
              </template>
              <template #bodyAppend>
                <tr>
                  <td colspan="8">
                    <div class="page-view">
                      <va-pagination v-model="currentPage"
                        :pages="pagenationView(pageSize, experiments?.result.experiments)" :visible-pages="5" gapped />
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
import { experimentsToolButton } from '~~/assets/data/ToolButton/experiments'


const toolButtons = ref(experimentsToolButton);

const pageTitle = ref('Experiments')

const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";

const details = (id: string) => {
  navigateTo(`/experiments/details/${id}`)
}


const experiments = await getExperiments();

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
