<template>
  <div class="workflow-wrapper">
    <div class="workflow-pannel">
      <Workflow ref="workflow" :pipeline="pipeline" :nodeInfo="nodeInfo" @sideEnable="sideEnable"
        @savePipeline="savePipeline" />
    </div>
    <div class="workflow-detail">
      <PipelineWorkflowDetail :nodeInfo="nodeInfo" :sideEnabled=sideEnabled @sideEnable="sideEnable"
        @saveNode="saveNode" />
    </div>
  </div>
</template>
<script setup lang="ts">

import PipelineWorkflowDetail from '~~/components/pipelines/pipelineWorkflowDetail.vue'

const props = withDefaults(defineProps<{ modelValue: any, }>(), {})

const sideEnabled = ref(false);
const workflow = ref();
// const pipeline = ref({ "nodes": [{ "type": "toolbar", "data": { "toolbar": { "position": "right" }, "attribute": { "inputParams": "lklk", "outputParams": "", "args": "", "command": "", "image": "" } }, "events": {}, "id": "random_node-1", "label": "로딩", "position": { "x": -62.408754988183716, "y": 75.07897221397604 } }, { "type": "toolbar", "data": { "toolbar": { "position": "right" }, "attribute": { "inputParams": "", "outputParams": "", "args": "", "command": "", "image": "" } }, "events": {}, "id": "random_node-2", "label": "저장", "position": { "x": -80.06472588815791, "y": 196.49586534634363 } }], "edges": [{ "sourceHandle": "random_node-1__handle-bottom", "targetHandle": "random_node-2__handle-top", "type": "custom", "source": "random_node-1", "target": "random_node-2", "data": { "text": "TEST" }, "events": {}, "id": "dndedge_1688536756340", "markerEnd": "arrowclosed", "sourceX": 12.591245011816284, "sourceY": 149.07897221397604, "targetX": -5.064725888157909, "targetY": 192.49586534634363 }], "position": [294.31750997636743, 28.34205557204791], "zoom": 2 }); // 서버에서 읽어온 파이프라인 JSON값
const pipeline = ref(props.modelValue);

const nodeInfo = ref({
  id: '',
  label: '',
  attribute: {}
})

const sideEnable = (open: boolean, node: any) => {
  sideEnabled.value = open;

  // if (node) {
  nodeInfo.value.id = node.id
  nodeInfo.value.label = node.label;
  nodeInfo.value.attribute = node.attribute
  // }
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