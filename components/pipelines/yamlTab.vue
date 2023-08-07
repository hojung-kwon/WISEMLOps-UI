<template>
  <div class="row">
    <div class="px-3 flex flex-col xs12">
      <va-card outlined>
        <va-card-content>
          <MonacoEditor 
            v-model="yamlString" 
            lang="yaml" 
            theme="vs-dark"
            :options="{ readOnly: true, minimap: { enabled:false }  }"
            style="height:500px"
          />
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>
<script setup lang="ts">


const props = withDefaults(defineProps<{modelValue: string[]}>(), {})

console.log(props)
const yamlString = ref('');
onMounted(() => {
  console.log('======'+props.modelValue.toString())
  props.modelValue.forEach((item:any) => {
    yamlString.value += item + '\n';
  })
})


</script>
