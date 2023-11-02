<template>
  <div class="workflow-wrapper">
    <div class="workflow-pannel">
      <Workflow ref="workflow" :pipeline="pipeline" :nodeInfo="nodeInfo" @sideEnable="sideEnable"
        @savePipeline="savePipeline" />
    </div>
    <div class="workflow-detail">
      <RunWorkflowDetail :nodeInfo="nodeInfo" :sideEnabled=sideEnabled @sideEnable="sideEnable" @saveNode="saveNode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Workflow from '~~/components/workflow/index.vue'
import RunWorkflowDetail from '~~/components/runs/runWorkflowDetail.vue';



const props = withDefaults(defineProps<{ modelValue: any, runDetails: any }>(), {})
const sideEnabled = ref(false);
const workflow = ref();
const pipeline = ref(props.modelValue);


const nodeInfo = ref({
  id: '',
  label: '',
  attribute: {
    type: '',
  },
  status: '',
  details: {}
})

onMounted(() => {
  pipeline.value.nodes.forEach((node: any, i: number) => {
    var runItem = props.runDetails['task_details'].find((item: any) => {
      return item['display_name'] === node.data.attribute.type.replace(/_/g, "-");
    })
    pipeline.value.nodes[i].data.attribute.status = runItem['state']
    pipeline.value.nodes[i].data.details = runItem
  })
})


const sideEnable = (open: boolean, node: any) => {
  sideEnabled.value = open;

  if (open) {
    nodeInfo.value.id = node.id
    nodeInfo.value.label = node.label;
    nodeInfo.value.attribute = node.attribute
    nodeInfo.value.status = node.attribute.status
    nodeInfo.value.details = node.data.details;

  }
}

const saveNode = (node: workflowNodeInfo) => {
  workflow.value.saveNode(node);
}
const savePipeline = (e: any) => {
  console.log(JSON.stringify(e))
  //여기서 post로 저장
}

</script>

<style>
.workflow-wrapper {
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  flex-direction: row;

}

.workflow-wrapper .workflow-pannel {
  flex-grow: 1;
  border: 1px solid #aaa;
}
</style>