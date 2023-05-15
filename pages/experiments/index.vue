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
            :items="pipelineData"
            :no-data-html="noItemText"
            :no-data-filtered-html="noItemText"
            :columns="columns"
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
          <template #cell(job)="{ rowIndex, rowData }">
            <div>
              <va-button size="small" class="px-2">확인</va-button>
            </div>
          </template>
          <template #bodyAppend>
            FOOTER
          </template>
          </va-data-table>
        </va-card-content>
        <va-card-actions align="between">
          <div>여기에 action</div>
          <div>여기에 action</div>
        </va-card-actions>
      </va-card>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { experimentsToolButton } from '~~/assets/data/ToolButton/experiments'

// 임시 코드
import { pipelines } from '~~/assets/data/sample/pipelines';

const toolButtons = ref(experimentsToolButton);

const pageTitle = ref('Experiments')
const pipelineData = pipelines;

const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";

// pipline을 예제로한 임시코드
const columns = [
  { label: '이름', key: 'name' },
  { label: '설명', key: 'description' },
  { label: '최종 갱신', key: 'created_at' },
  { label: '작업', key: 'job' },
]

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
