<template>
  <va-alert id="alert-warning" color="#ce6e67" v-if="useAttributesAlert">수정중인 속성창을 먼저 닫아주세요.</va-alert>
  <div style="height:calc( 100vh - 120px ); display:table" @drop="onDrop">

    <div style="display:table-row;">
      <va-sidebar style="display: table-cell;">
        <va-accordion
            v-model="propsOperatorExpand"
        >
          <va-collapse
                       v-for="(group, category) in $props.operators"
                       :key="category"
                       :header="category"
                       text-color="textPrimary"
                       color="textInverted"
          >
            <div v-for="(operator, idx) in group" :key="operator"
                 class="operator-list vue-flow__node-default" :draggable="true"
                 @dragstart="onDragStart($event, category, operator)">
              <span class="operator-node">{{ operator.operatorName }}</span>
            </div>
            <!--<div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">Input Node</div>
            <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'default')">Default Node</div>
            <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'default2')">222Default Node</div>
            <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>-->
          </va-collapse>
        </va-accordion>
      </va-sidebar>

      <VueFlow
          v-model="$props.setWorkflowJson"
          fit-view-on-init
          @dragover="onDragOver"
          class="vue-flow-basic-example"
          style="display: table-cell;">
        <Background variant="dots" />
        <MiniMap />
        <Controls />
        <template #node-toolbar="nodeProps">
          <CustomNode :id="nodeProps.id" :label="nodeProps.label" :toolbar="nodeProps"/>
        </template>
        <template #edge-custom="props">
          <CustomEdge v-bind="props" />
        </template>
      </VueFlow>

      <workflow-detail v-if="useAttributes" :enabled="enabled" :operatorAttributes="propsOperatorAttributes" @saveBtn="saveBtn" @closeBtn="closeBtn"></workflow-detail>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, watch } from 'vue'
import {VueFlow, useVueFlow, MarkerType} from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'
import CustomNode from './CustomNode.vue'
import CustomEdge from './CustomEdge.vue'

import { defineEmits } from "vue";
const emit = defineEmits(["toggle-drawer"]);

interface Operators {
    "operatorName": string,
    "attributes": any
}

interface Props {
  setWorkflowJson: any,
  operators: [Operators]
};

const props = withDefaults(defineProps<Props>(), {});
const propsOperatorAttributes = ref({});
const propsOperatorExpand = ref([ true, false ]);
const enabled = ref("enabled");
const DEFINE: any = {
  WORKFLOW_SAVE_DATA: "getWorkflowJson"
}

/*************************************/
/********* 워크플로우 기본 기능 ********/
/*************************************/
const { findNode, onConnect, addEdges, addNodes, project, vueFlowRef, toObject } = useVueFlow();

// 워크플로우 JSON 추출
const allSave = () => {
  emit(DEFINE.WORKFLOW_SAVE_DATA, toObject());
}

/*************************************/
/***** 워크플로우 노드 및 엣지 연결 *****/
/*************************************/
onConnect((params) => {
  let newEdge: any = {
    id: "dndedge_" +new Date().getTime(),
    source: params.source,
    sourceHandle: params.sourceHandle,
    target: params.target,
    targetHandle: params.targetHandle,
    type: "custom",
    data: { text: "TEST" },
    markerEnd: MarkerType.ArrowClosed
  };
  addEdges([newEdge]);
  allSave();
});

const onDragStart = (event: any, nodeCategory: string, nodeAttributes: any) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('operatorLabel', "<b>[" +nodeCategory+ "]</b><br/>" +nodeAttributes.operatorName);
    event.dataTransfer.setData('operatorName', nodeAttributes.operatorName);
    event.dataTransfer.setData('operatorAttributes', JSON.stringify(nodeAttributes.attributes));
    event.dataTransfer.effectAllowed = 'move'
  }
}

const onDragOver = (event: any) => {
  event.preventDefault()

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
}

const onDrop = (event: any) => {
  const operatorName = event.dataTransfer?.getData("operatorName");
  const operatorLabel = event.dataTransfer?.getData("operatorLabel");
  const operatorAttributes = event.dataTransfer?.getData("operatorAttributes");

  const { left, top } = vueFlowRef.value.getBoundingClientRect();

  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  })

  let jsonOperatorAttributes = JSON.parse(operatorAttributes);
  let attributes: any = {};
  for (let key in jsonOperatorAttributes) {
    let value = "";
    if (jsonOperatorAttributes[key]["value"]) {
      value = jsonOperatorAttributes[key]["value"];
    }
    attributes[key] = value;
  }

  const newNode = {
    id: "dndnode_" +new Date().getTime(),
    position: position,
    type: 'toolbar',
    operatorName: `${operatorName}`,
    label: `${operatorLabel}`,
    attributes: attributes,
    events: {
      doubleClick: () => {
        // 이미 속성 수정 팝업이 띄워져 있는 경우
        if (useAttributes.value) {
          // 팝업 경고창 띄우기
          useAttributesAlert.value = true;

          // 3초후 팝업 경고창 닫기
          setTimeout( () => {
            useAttributesAlert.value = false;
          }, 3000);
          return;
        }

        let saveAttribute: any = {
          operatorName: operatorName,
          value: attributes,
          view: jsonOperatorAttributes
        }
        propsOperatorAttributes.value = saveAttribute;

        // 속성 수정 팝업 띄우기
        useAttributes.value = true;
      }
    }
  }
  addNodes([newNode])

  // align node position after drop, so it's centered to the mouse
  nextTick(() => {
    const node:any = findNode(newNode.id)
    const stop = watch(
        () => node.dimensions,
        (dimensions) => {
          if (dimensions.width > 0 && dimensions.height > 0) {
            node.position = { x: node.position.x - node.dimensions.width / 2, y: node.position.y - node.dimensions.height / 2 }
            stop()
          }
        },
        { deep: true, flush: 'post' },
    )
  })

  allSave();
}

/*************************************/
/********* 오퍼레이터 상세보기 *********/
/*************************************/
const useAttributes = ref(false);
const useAttributesAlert = ref(false);

const saveBtn = (e: any) => {
  useAttributes.value = false;
  allSave();
}

const closeBtn = () => {
  useAttributes.value = false;
}
</script>

<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';

/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';

.operator-list {
  width: 100%;
  height: 45px;
}
.operator-node {
  font-size: 14pt;
  font-weight: normal;
  font-family: Consolas;
  text-align: center;
}
#alert-warning {
  text-align: center;
  font-weight: bold;
}
</style>