<template>
  <div class="row">
    <div class="px-3 flex flex-col xs12">
      <va-card outlined>
        <va-card-content>
            {{ props.modelValue.meta }}
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>
<script setup lang="ts">


const props = withDefaults(defineProps<{modelValue: any,}>(), {})


// const yamlString = ref('');
// onMounted(() => {
//   props.modelValue.forEach((item:any) => {
//     yamlString.value += item + '\n';
//   })
// })


</script>
