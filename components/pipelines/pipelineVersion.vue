<template>
  <va-data-table :items="pipelineVersions ? pipelineVersions.result.pipeline_versions : []" :no-data-html="noItemText"
    :no-data-filtered-html="noItemText" :columns="pipelineVersionColumns">
    <template #cell(created_at)="{ rowIndex, rowData }">
      <div>
        {{ new Date(rowData.created_at).toLocaleString() }}
      </div>
    </template>
    <template #cell(details)="{ rowIndex, rowData }">
      <div>
        <va-button size="small" @click="details(props.pipeline_id, rowData.pipeline_version_id)">상세보기</va-button>
      </div>
    </template>

  </va-data-table>
</template>


<script setup lang="ts">
const router = useRouter()

interface Props {
  pipeline_id: string
}

const props = withDefaults(defineProps<Props>(), {
  pipeline_id: ''
})

const noItemText: string = "No versions";

const pipelineVersions = await getPipelineVersions(props.pipeline_id);

const details = (id: string, version: string) => {
  router.push({
    path: `/pipelines/details/${id}`,
    query: {
      version: version
    }
  })
  // navigateTo(`/pipelines/details/${id}/?version=${version}`)
}

</script>
