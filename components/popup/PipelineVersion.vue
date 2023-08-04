<template>
  <va-modal 
    v-model="props.showPopup" 
    title="파이프라인"
    mobile-fullscreen
    hide-default-actions
    size="large"
  >
    <va-data-table
      :items="pipelineVersions ? pipelineVersions.result.versions: []"
      :no-data-html="noItemText"
      :no-data-filtered-html="noItemText"
      :columns="pipelineVersionColumns"
      :per-page="pageSize"
      :current-page="currentPage"
      :filter="filterKeyword" 
    >
      <template #cell(description)="{ rowIndex, rowData }">
        <div class="table-cell" :title="rowData.description">
        {{ rowData.description }}
        </div>
      </template>
      <template #cell(details)="{ rowIndex, rowData }">
        <div>
          <va-button size="small" class="px-2" @click="selectPipelineVersion(rowData)">선택</va-button>
        </div>
      </template>
    </va-data-table>
  </va-modal>
  </template>
  
<script setup lang="ts">
const emit = defineEmits(["getPipelineVersion"]);

interface Props {
  showPopup: boolean
  pipelineId: string
}

const props = withDefaults(defineProps<Props>(), {
  showPopup: false,
  pipelineId: ''
})

const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";

const pipelineVersions:ResponseBody | any = ref(null)

watch( () => props.pipelineId, async (oldId, newId) =>{
  props.pipelineId = newId 
  const versions = await getPipelineVersions(props.pipelineId);
  pipelineVersions.value = versions.value;
})

const selectPipelineVersion = (pipelineVersion:any) => {
  emit('getPipelineVersion', pipelineVersion)

}

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
  