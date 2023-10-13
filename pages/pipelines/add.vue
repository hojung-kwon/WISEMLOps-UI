<template>
  <div>
    <div class="row">
      <va-navbar color="backgroundPrimary">
        <template #left>
          <va-button icon="arrow_back" preset="secondary" @click="pageBack" class="pr-4"></va-button>
          <PageTitle :pageTitle="pageTitle" />
        </template>
      </va-navbar>
    </div>
    <div class="row">
      <div class="px-3 flex flex-col xs12">
        <va-card outlined>
          <va-card-title>{{ pageTitle }}</va-card-title>
          <va-card-content>
            <div class="row mb-2">
              <div class="flex flex-col md12">
                <h6 class="va-h6 mb-2">기본정보</h6>
              </div>
              <div class="flex flex-col xl8 lg10 md12 sm12 xs12">
                <va-input label="이름" v-model="formValues.pipeline_name" placeholder="pipeline name"
                  background="backgroundPrimary" outline class="inputbox mb-2">
                </va-input>
                <va-input label="설명" v-model="formValues.pipeline_description" placeholder="description"
                  background="backgroundPrimary" outline class="inputbox mb-2">
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col md12">
                <h6 class="va-h6 mb-2">Pipeline</h6>
              </div>
              <div class="workflow-wrapper">
                <div class="workflow-pannel">
                  <Workflow ref="workflow" :pipeline="pipeline" :nodeInfo="nodeInfo" @sideEnable="sideEnable"
                    @savePipeline="savePipeline" />
                </div>
                <div class="workflow-detail">
                  <PipelineWorkflowAdd :nodeInfo="nodeInfo" :sideEnabled=sideEnabled @sideEnable="sideEnable"
                    @saveNode="saveNode" />
                </div>
              </div>
            </div>
            <!-- <Workflow ref="workflow" :pipeline="pipeline" @savePipeline="savePipeline"/> -->
          </va-card-content>
          <va-card-actions>
            <va-button @click="getPipeline">저장</va-button>
          </va-card-actions>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import PipelineWorkflowAdd from '~~/components/pipelines/pipelineWorkflowAdd.vue';


const router = useRouter();
const pageTitle = ref('Pipeline 등록')

const workflow = ref();
const pipeline = ref({ "nodes": [{ "type": "toolbar", "data": { "toolbar": { "position": "right" }, "attribute": { "inputParams": "lklk", "outputParams": "", "args": "", "command": "", "image": "" } }, "events": {}, "id": "random_node-1", "label": "로딩", "position": { "x": -62.408754988183716, "y": 75.07897221397604 } }, { "type": "toolbar", "data": { "toolbar": { "position": "right" }, "attribute": { "inputParams": "", "outputParams": "", "args": "", "command": "", "image": "" } }, "events": {}, "id": "random_node-2", "label": "저장", "position": { "x": -80.06472588815791, "y": 196.49586534634363 } }], "edges": [{ "sourceHandle": "random_node-1__handle-bottom", "targetHandle": "random_node-2__handle-top", "type": "custom", "source": "random_node-1", "target": "random_node-2", "data": { "text": "TEST" }, "events": {}, "id": "dndedge_1688536756340", "markerEnd": "arrowclosed", "sourceX": 12.591245011816284, "sourceY": 149.07897221397604, "targetX": -5.064725888157909, "targetY": 192.49586534634363 }], "position": [294.31750997636743, 28.34205557204791], "zoom": 2 }); // 서버에서 읽어온 파이프라인 JSON값

const formValues = ref({
  pipeline_name: '',
  pipeline_description: '',
  nodes: [],
  edges: [],
  position: [],
  zoom: 0
})

const sideEnabled = ref(false);

const nodeInfo = ref({
  id: '',
  label: '',
  attribute: {
    inputParams: '',
    outputParams: '',
    args: '',
    command: '',
    image: ''
  }
})


const pageBack = () => {
  router.back()
}

const getPipeline = () => {
  workflow.value.getPipeline()
}

const savePipeline = (e: any) => {


  formValues.value.nodes = e.nodes;
  formValues.value.edges = e.edges;
  formValues.value.position = e.position;
  formValues.value.zoom = e.zoom;

  console.log(JSON.stringify(formValues.value))
  //여기서 post로 저장
  addPipelineWowrkflow(formValues)
    .then(pipeline => {
      console.log(pipeline.value);
      if (pipeline.value && pipeline.value.code == 100200) {

        navigateTo(`/pipelines`, {
          replace: true,
          redirectCode: 301,
          external: true
        })
      } else {
        alert("오류발생" + pipeline.value ? pipeline.value?.message : '');
      }
    })

}

const sideEnable = (open: boolean, node: any) => {
  sideEnabled.value = open;
  if (open) {
    nodeInfo.value.id = node.id
    nodeInfo.value.label = node.label;
    nodeInfo.value.attribute = node.attribute
  }
}

const saveNode = (node: workflowNodeInfo) => {
  workflow.value.saveNode(node);

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