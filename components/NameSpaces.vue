<template>
  <div class="row justify-start align-center ">
    <va-select v-model="selectedNamespace" :options="$props.namespaces" class="selectbox"
      @update:modelValue="selectNamespace" />
  </div>
</template>

<script setup lang="ts">
const { $bus } = useNuxtApp();
interface Props {
  namespaces: [];
  namespace: string;
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits(['selectNamespace'])

const selectedNamespace = ref(props.namespace)


const selectNamespace = (e: any) => {
  emit('selectNamespace', e)
  $bus.$emit("namespace", e)
}

</script>

<style>
.selectbox {
  color: #000;
  background-color: #fff
}
</style>