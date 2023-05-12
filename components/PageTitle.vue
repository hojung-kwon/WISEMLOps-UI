<template>
  <h5 class="va-h5">
    {{ $props.pageTitle }}
  </h5>
</template>

<script setup lang="ts">

interface Props {
  pageTitle? : string;
}

const props = withDefaults(defineProps<Props>(), {
  pageTitle: '제목없음'
})

</script>