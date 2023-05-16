<template>
<va-modal 
  v-model="$props.showPopup" 
  title="파이프라인"
  mobile-fullscreen
  hide-default-actions
  size="large"
>
  <va-data-table
    :items="pipelineData"
    :no-data-html="noItemText"
    :no-data-filtered-html="noItemText"
    :columns="columns"
    :per-page="pageSize"
    :current-page="currentPage"
    :filter="filterKeyword" 
  >
    <template #cell(description)="{ rowIndex, rowData }">
      <div class="table-cell" :title="rowData.description">
      {{ rowData.description }}
      </div>
    </template>
    <template #cell(job)="{ rowIndex, rowData }">
      <div>
        <va-button size="small" class="px-2">선택</va-button>
      </div>
    </template>
    <template #bodyAppend>
      FOOTER
    </template>

  </va-data-table>
</va-modal>
</template>

<script setup lang="ts">

interface Props {
  showPopup: boolean
}
const props = withDefaults(defineProps<Props>(), {
  showPopup: false,
})

// 임시 코드
import { pipelines } from '~~/assets/data/sample/pipelines';
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
