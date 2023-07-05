<template>
  <Panel
    :position="PanelPosition.TopLeft"
  >
    <va-button
      icon="add"
      class="mr-3 mb-2"
      @click="onAddNode"
    >
      추가
    </va-button>
    <va-button 
      icon="delete"
      class="mr-3 mb-2"  
      @click="removeAll"
    >
      초기화
    </va-button>
  </Panel>

</template>


<script setup lang="ts">
import { Panel, Position, PanelPosition, addEdge, useVueFlow } from '@vue-flow/core'
const { nodes, addNodes, removeNodes,addEdges, dimensions } = useVueFlow();


const onConnect = (params:any) => {
  addEdges(params)
}

const onAddNode = () => {
  const id = nodes.value.length + 1
 
  const newNode = {
    id: `random_node-${id}`,
    label: `node ${id}`,
    type: 'toolbar',
    data : {
      toolbar: {
        position: Position.Right
      }, 
      attribute: {
        inputParams: '',
        outputParams: '',
        args: '',
        command: '',
        image: ''            
      }

    },
    position: { 
      x: (Math.random() * dimensions.value.width) / 3,
      y: (Math.random() * dimensions.value.height) / 3
    }, 
  }
  addNodes([newNode])
}

const removeAll = () => {
  removeNodes(nodes.value)
}

</script>
