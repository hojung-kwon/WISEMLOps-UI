<template>
  <!-- You can use the `BaseEdge` component to create your own custom edge more easily -->
  <BaseEdge :id="id" :style="style" :path="path[0]" :marker-end="markerEnd" />

  <!-- Use the `EdgeLabelRenderer` to escape the SVG world of edges and render your own custom label in a `<div>` ctx -->
  <EdgeLabelRenderer>
    <div
        :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
      }"
        class="nodrag nopan"
    >

      <va-button v-if="findEdge(edgeId)?.selected" preset="secondary" @click="removeEdges([id])">삭제</va-button>
    </div>
  </EdgeLabelRenderer>
</template>

<script setup lang="ts">
import { BaseEdge, EdgeLabelRenderer, getBezierPath, useVueFlow } from '@vue-flow/core'
import { computed } from 'vue'
import { onKeyUp } from "@vueuse/core";
const { removeEdges, onEdgeClick, findEdge } = useVueFlow()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  sourceX: {
    type: Number,
    required: true,
  },
  sourceY: {
    type: Number,
    required: true,
  },
  targetX: {
    type: Number,
    required: true,
  },
  targetY: {
    type: Number,
    required: true,
  },
  sourcePosition: {
    type: String,
    required: true,
  },
  targetPosition: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: false,
  },
  markerEnd: {
    type: String,
    required: false,
  },
  style: {
    type: Object,
    required: false,
  }
})

const path = computed(() => getBezierPath(props))

const edgesFocus: any = ref(false);
const edgeId: any = ref("");
onEdgeClick( (e) => {
  edgeId.value = e.edge.id;
})

onKeyUp( (e:any) => {
  if (e.key === "Delete" && findEdge(edgeId.value)?.selected) {
    removeEdges([edgeId.value]);
  }
})

</script>