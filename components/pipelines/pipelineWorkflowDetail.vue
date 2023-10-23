<template>
  <va-sidebar v-model="props.sideEnabled" position="right" width="40vw">
    <va-card outlined style="height:100%">
      <va-card-title>상세보기</va-card-title>
      <va-card-content>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="ID" v-model="props.nodeInfo.id" placeholder="Node Label" background="backgroundElement"
              outline class="inputbox mb-2" readonly>
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="label" v-model="props.nodeInfo.label" placeholder="Node Label" background="backgroundPrimary"
              outline class="inputbox mb-2">
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-select label="Type" v-model="props.nodeInfo.attribute.type" :options="attributeTypeOptions" outline
              class="selectbox mb-2" readonly />
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <textarea class="textarea">{{ JSON.stringify(props.nodeInfo.attribute) }}</textarea>
            <!-- <va-textarea v-model="$props.nodeInfo.attribute" class="textarea" readonly /> -->
          </div>
        </div>
        <!-- <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="label" v-model="props.nodeInfo.label" placeholder="Node Label" background="backgroundPrimary"
              outline class="inputbox mb-2" readonly>
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Input Parameters" v-model="props.nodeInfo.attribute.inputParams"
              placeholder="Input Parameters" background="backgroundPrimary" outline class="inputbox mb-2" readonly>
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Output Parameters" v-model="props.nodeInfo.attribute.outputParams"
              placeholder="Output Parameters" background="backgroundPrimary" outline class="inputbox mb-2" readonly>
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Arguments" v-model="props.nodeInfo.attribute.args" placeholder="Arguments"
              background="backgroundPrimary" outline class="inputbox mb-2" readonly>
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Command" v-model="props.nodeInfo.attribute.command" placeholder="Command"
              background="backgroundPrimary" outline class="inputbox mb-2" readonly>
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Image" v-model="props.nodeInfo.attribute.image" placeholder="Image"
              background="backgroundPrimary" outline class="inputbox mb-2" readonly>
            </va-input>
          </div>
        </div> -->
      </va-card-content>
    </va-card>
  </va-sidebar>
</template>

<script setup lang="ts">

interface Props {
  nodeInfo: workflowNodeInfo
  sideEnabled: boolean
}
const props = withDefaults(defineProps<Props>(), {
})

console.log(props.nodeInfo.attribute)
const attribute = ref();


const attributeTypeOptions = ref([
  'load_data',
  'train_model',
  'serve_model'
])


</script>

<style>
.inputbox {
  width: 100%;
}

.inputbox label {
  margin: 4px 0;
}

.inputbox input {
  padding: 12px 0;
}

.textarea {
  width: 100%
}
</style>