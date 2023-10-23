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
              class="selectbox mb-2" @update:modelValue="onChangeType" />
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <!-- <va-textarea v-model="attribute" /> -->
          </div>
        </div>
        <!--
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Input Parameters" v-model="props.nodeInfo.attribute.inputParams"
              placeholder="Input Parameters" background="backgroundPrimary" outline class="inputbox mb-2">
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Output Parameters" v-model="props.nodeInfo.attribute.outputParams"
              placeholder="Output Parameters" background="backgroundPrimary" outline class="inputbox mb-2">
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Arguments" v-model="props.nodeInfo.attribute.args" placeholder="Arguments"
              background="backgroundPrimary" outline class="inputbox mb-2">
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Command" v-model="props.nodeInfo.attribute.command" placeholder="Command"
              background="backgroundPrimary" outline class="inputbox mb-2">
            </va-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="flex flex-col xl12 lg12 md12 sm12 xs12">
            <va-input label="Image" v-model="props.nodeInfo.attribute.image" placeholder="Image"
              background="backgroundPrimary" outline class="inputbox mb-2">
            </va-input>
          </div>
        </div>
      -->
      </va-card-content>
      <va-card-actions>
        <va-button @click="onNodeSave">저장</va-button>
      </va-card-actions>
    </va-card>
  </va-sidebar>
</template>

<script setup lang="ts">

const emit = defineEmits(["saveNode"]);

interface Props {
  nodeInfo: workflowNodeInfo
  sideEnabled: boolean
}
const props = withDefaults(defineProps<Props>(), {
})


const attribute = ref('')
// const attributeType = ref('')
const attributeTypeOptions = ref([
  'load_data',
  'train_model',
  'serve_model'
])

const attributeLoadData = ref({
  dataset_name: "wine"
});
const attributeTrainModel = ref({
  "algorithm": "decision_tree_classifier",
  "split_ratio": 0.2,
  "hyper_parameter": {
    "dt_criterion": "gini",
    "dt_max_depth": 100,
    "dt_min_samples_split": 2,
    "dt_min_samples_leaf": 2
  },
  "experiment_name": "test-pipeline",
  "model_name": "wine-dtc",
  "input_columns": [
    "alcohol",
    "malic_acid",
    "ash",
    "alcalinity_of_ash",
    "magnesium",
    "total_phenols",
    "flavanoids",
    "nonflavanoid_phenols",
    "proanthocyanins",
    "color_intensity",
    "hue",
    "od280/od315_of_diluted_wines",
    "proline"
  ],
  "target_column": "target"
});
const attributeServeModel = ref({
  "model_name": "wine-dtc"
});

const onChangeType = () => {

  switch (props.nodeInfo.attribute.type) {
    case 'load_data':
      attribute.value = JSON.stringify(attributeLoadData.value)
      props.nodeInfo.attribute = attributeLoadData.value
      props.nodeInfo.attribute.type = 'load_data'
      break;
    case 'train_model':
      attribute.value = JSON.stringify(attributeTrainModel.value)
      props.nodeInfo.attribute = attributeTrainModel.value
      props.nodeInfo.attribute.type = 'train_model'

      break;
    case 'serve_model':
      attribute.value = JSON.stringify(attributeServeModel.value)
      props.nodeInfo.attribute = attributeServeModel.value
      props.nodeInfo.attribute.type = 'serve_model'

      break;

  }

}

const onNodeSave = () => {

  // let attr = JSON.parse(attribute.value);
  // attr.type = attributeType;
  // props.nodeInfo.attribute = attr;
  emit('saveNode', props.nodeInfo)
}

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

.selectbox {
  width: 100%;
  z-index: 2;
}

.selectbox label {
  margin-top: 4px;
}

.selectbox .va-input-wrapper__text {
  padding-top: 20px;
  padding-bottom: 12px;
}

.va-select-dropdown__content {
  z-index: 3;
}
</style>