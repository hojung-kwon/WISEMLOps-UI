<template>
  <va-sidebar
      position="right"
      style="display: table-cell;">
    <va-card square  style="flex-grow: 1; height:100%">
      <va-card-title>
        {{ props.operatorAttributes.operatorName }}
      </va-card-title>
      <va-card-content>
        <div v-for="(value, key) in props.operatorAttributes.view" :key="key">
          <va-input class="attribute-input" :label="key" v-if="!value['hidden']" v-model="props.operatorAttributes.value[key]" :type="value['type']" :min-rows="3" :max-rows="5">
          </va-input>
        </div>
        <va-button class="attribute-btn margin-right-5" preset="primary" v-on:click="save">저장</va-button>
        <va-button class="attribute-btn margin-left-5" preset="primary" v-on:click="closeBtn">닫기</va-button>
      </va-card-content>
    </va-card>
  </va-sidebar>
</template>

<script setup lang="ts">
const emit = defineEmits(["toggle-drawer"]);

interface Props {
  operatorAttributes: any
};

const props = withDefaults(defineProps<Props>(), {});

const DEFINE: any = {
  SAVE_BTN: "saveBtn",
  CLOSE_BTN: "closeBtn"
}

const save = () => {
  emit(DEFINE.SAVE_BTN, props.operatorAttributes.value);
}

const closeBtn = () => {
  emit(DEFINE.CLOSE_BTN, false);
}
</script>

<style>
.attribute-input {
  width: 100%;
  margin: 5px 0px 5px 0px;
}

.attribute-btn {
  width: calc(50% - 5px);
  margin-top: 5px;
}

.margin-right-5 {
  margin-right: 5px;
}

.margin-left-5 {
  margin-left: 5px;
}
</style>