<template>
  <VueFlow fit-view-on-init class="vue-flow-basic-example">
    <Background />
    <CustomControls />
    <template #node-toolbar="props">
      <CustomNode :id="props.id" :data="props.data" :label="props.label" :selected="props.selected" />
    </template>
    <template #edge-custom="props">
      <CustomEdge v-bind="props" />
    </template>
  </VueFlow>
</template>

<script setup lang="ts">
// 워크플로우 라이브러리

import { VueFlow, useVueFlow, MarkerType, useNode, applyNodeChanges } from '@vue-flow/core'
import { Background, BackgroundVariant } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'
const { findNode, onConnect, onPaneClick, onNodeClick, setNodeExtent, addEdges, setEdges, setTransform, setNodes, addNodes, project, vueFlowRef, toObject } = useVueFlow();

// 워크플로우 커스텀능
import CustomNode from './CustomNode.vue'
import CustomEdge from './CustomEdge.vue'
import CustomControls from './CustomControls.vue'
import * as Workflow from './ts/Workflow'



interface Props {
  pipeline: any;
  nodeInfo: any;
}

const props = withDefaults(defineProps<Props>(), {
})

const emit = defineEmits(["sideEnable", "savePipeline"])

onMounted(() => {
  const flow = props.pipeline
  if (flow) {
    const [x = 0, y = 0] = flow.position
    setNodes(flow.nodes)
    setEdges(flow.edges)
    setTransform({ x, y, zoom: flow.zoom || 0 })
  }
})

onConnect((params: any) => {
  var edge = Workflow.createEdge(params)
  addEdges([edge]);
  // save();
})

onPaneClick((param: any) => {
  emit('sideEnable', false, {});

})

onNodeClick((param: any) => {
  const node: any = findNode(param.node.id);
  node.attribute = node.data.hasOwnProperty('attribute') ? node.data.attribute : {};
  emit('sideEnable', true, node)
})

const saveNode = (nodeInfo: any) => {
  let node: any = findNode(nodeInfo.id);
  if (node) {
    node.data.attribute = nodeInfo.attribute;
    node.label = nodeInfo.label;
    node.id = nodeInfo.id;
    console.log(node);
  }
}

const getPipeline = (e: any) => {
  emit('savePipeline', toObject())
}

defineExpose({ getPipeline, saveNode })

</script>




<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';
/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';
</style>