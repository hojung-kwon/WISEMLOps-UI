<template>
  <div class="workflow-wrapper">
    <div class="workflow-pannel">
      <VueFlow 

        fit-view-on-init      
        class="vue-flow-basic-example"  
      >
        <Background :variant="dots" />
        <CustomControls/>
        <template #node-toolbar="props" >
          <CustomNode 
            :id="props.id"
            :data="props.data"
            :label="props.label"
            :selected="props.selected"
            />
        </template>
        <template #edge-custom="props">
          <CustomEdge v-bind="props"/>
        </template>
      </VueFlow>
    </div>
    <div class="workflow-detail">
      <va-sidebar v-model="sideEnabled" position="right" width="40vw">
        <va-card outlined style="height:100%">
          <va-card-title>상세보기</va-card-title>
          <va-card-content>
            <div class="row mb-2">
              <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
                <va-input
                  label="ID"
                  v-model="nodeInfo.id"
                  placeholder="Node Label"
                  background="backgroundElement"
                  outline
                  class="inputbox mb-2"
                  readonly
                >
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
                <va-input
                  label="label"
                  v-model="nodeInfo.label"
                  placeholder="Node Label"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
                <va-input
                  label="Input Parameters"
                  v-model="nodeInfo.attribute.inputParams"
                  placeholder="Input Parameters"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
                <va-input
                  label="Output Parameters"
                  v-model="nodeInfo.attribute.outputParams"
                  placeholder="Output Parameters"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
                <va-input
                  label="Arguments"
                  v-model="nodeInfo.attribute.args"
                  placeholder="Arguments"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
                <va-input
                  label="Command"
                  v-model="nodeInfo.attribute.command"
                  placeholder="Command"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
              </div>
            </div>
            <div class="row mb-2">
              <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
                <va-input
                  label="Image"
                  v-model="nodeInfo.attribute.image"
                  placeholder="Image"
                  background="backgroundPrimary"
                  outline
                  class="inputbox mb-2"
                >
                </va-input>
              </div>
            </div>
          </va-card-content>
          <va-card-actions>
            <va-button @click="onNodeSave">저장</va-button>
          </va-card-actions>
        </va-card>
      </va-sidebar>
    </div>
  </div>
  <!-- <va-checkbox
    v-model="sideEnabled"
    class="mt-2"
    label="Show"
  /> -->
 </template>

<script setup lang="ts">
// 워크플로우 라이브러리

import { VueFlow, useVueFlow, MarkerType, useNode, applyNodeChanges} from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'
const { findNode, onConnect, onPaneClick, onNodeClick, setNodeExtent, addEdges, setEdges, setTransform, setNodes, addNodes, project, vueFlowRef, toObject } = useVueFlow();

// 워크플로우 커스텀능
import CustomNode from './CustomNode.vue'
import CustomEdge from './CustomEdge.vue'
import CustomControls from './CustomControls.vue'
import * as Workflow from './ts/Workflow'


const sideEnabled = ref(false);

interface Props {
  pipeline: any
}

const props = withDefaults(defineProps<Props>(), {  
})


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

onMounted(() => {
  console.log(props.pipeline)
  const flow = props.pipeline
  if (flow) {
    const [x = 0, y = 0] = flow.position
    setNodes(flow.nodes)
    setEdges(flow.edges)
    setTransform({ x, y, zoom: flow.zoom || 0 })
  }
})


onConnect(( params:any ) => {
  var edge = Workflow.createEdge(params)
  addEdges([edge]);
  // save();
})

onPaneClick(( param:any ) => {
  sideEnabled.value=false;
})

onNodeClick(( param:any) => {
  
  sideEnabled.value = true;
  const node:any = findNode(param.node.id);
  nodeInfo.value.id = node.id;
  nodeInfo.value.label = node.label;
  nodeInfo.value.attribute = node.data.hasOwnProperty('attribute')?node.data.attribute:{};
  
}) 

const onNodeSave = () => {
  let node:any = findNode(nodeInfo.value.id);
  
  if (node) {
    node.data.attribute = nodeInfo.value.attribute;
    node.label = nodeInfo.value.label;
    node.id = nodeInfo.value.id;
  }
  
  
}



const emit = defineEmits(['savePipeline'])

const getPipeline = (e:any) => {
  
  emit('savePipeline', toObject())
}
defineExpose({ getPipeline })

</script>




<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';
/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';


.workflow-wrapper {
  width: 100%;
  height:calc( 100vh - 300px ); 
  display: flex;
  flex-direction: row;

}

.workflow-wrapper .workflow-pannel {
  flex-grow: 1;
  border: 1px solid #aaa;
}

.workflow-wrapper .workflow-detail {

}
.inputbox {
  width: 100%;
}
.inputbox label {
  margin: 4px 0;
}

.inputbox input {
  padding: 12px 0;
}
</style>