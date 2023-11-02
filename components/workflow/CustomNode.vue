<template>
  <div>
    <NodeToolbar :is-visible="props.data.toolbar.isVisible" :position="props.data.toolbar.position">
      <va-button class="button-margin" preset="secondary" @click="removeNodes([id])">삭제</va-button>
    </NodeToolbar>

    <div class="operator" :class="{ 'active': props.selected }">
      <div class="label">
        {{ props.label }}
      </div>
      <div class="status" :class="props.data.attribute.status">
      </div>
    </div>

    <Handle type="target" :position="Position.Top" />
    <!-- <Handle type="source" :position="Position.Left" /> -->
    <Handle type="source" :position="Position.Bottom" />
    <!-- <Handle type="target" :position="Position.Right" /> -->
  </div>
</template>

<script lang="ts" setup>
const { removeNodes } = useVueFlow();
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { NodeToolbar, NodeToolbarProps } from '@vue-flow/node-toolbar'


interface PipelineAttribute {
  inputParams: string,
  outputParams: string;
  args: string;
  command: string;
  image: string;
  status: string;
}


interface Data {
  toolbar: NodeToolbarProps;
  attribute: PipelineAttribute;
}
interface Props {
  id: string;
  data: Data;
  label: any;
  selected: boolean;
}

const props = withDefaults(defineProps<Props>(), {
})


</script>

<style>
.button-margin {
  margin: 0px 5px 0px 0px;
}

.operator {
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 3px;

  min-height: 70px;
  min-width: 150px;
  display: flex;
  align-items: flex-start;
  /* justify-content: left; */
  background-color: #fff;
}

.operator.active {
  border: 1px solid blue;
}

.operator .label {}

.operator .status {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #666E75;

  background-color: #ECF0F1;
}

.operator .status.SUCCEEDED {
  background-color: #3D9209;
}

.operator .status.PENDING {
  background-color: #FFD43A;
}

.operator .status.RUNNING {
  background-color: #158DE3;
}

.operator .status.FAILED {
  background-color: #E42222;
}
</style>