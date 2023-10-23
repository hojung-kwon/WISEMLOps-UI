<template>
  <va-modal v-model="$props.showPopup" title="파이프라인" mobile-fullscreen hide-default-actions size="large">
    <va-data-table :items="experiments?.result.experiments ? experiments.result.experiments : []"
      :no-data-html="noItemText" :no-data-filtered-html="noItemText" :columns="experimentColumns" :per-page="pageSize"
      :current-page="currentPage" :filter="filterKeyword">
      <template #cell(description)="{ rowIndex, rowData }">
        <div class="table-cell" :title="rowData.description">
          {{ rowData.description }}
        </div>
      </template>
      <template #cell(details)="{ rowIndex, rowData }">
        <div>
          <va-button size="small" class="px-2" @click="selectExperiment(rowData)">선택</va-button>
        </div>
      </template>
      <template #bodyAppend>
        FOOTER
      </template>

    </va-data-table>
  </va-modal>
</template>
  
<script setup lang="ts">

const emit = defineEmits(["getExperiment"]);


interface Props {
  showPopup: boolean
}
const props = withDefaults(defineProps<Props>(), {
  showPopup: false,
})

const pageSize: number = 10;
const currentPage: number = 1;
const filterKeyword: string = "";
const noItemText: string = "No Item";

const experiments = await getExperiments();


const selectExperiment = (experiment: any) => {
  emit('getExperiment', experiment)
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
  