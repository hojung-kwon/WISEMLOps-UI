<template>
  <span v-for="(item, idx) in $props.toolButtons"
        :key="idx"
  >
    <va-button @click="pageMove(item.path?item.path:'')" class="ml-2" :icon="item.icon ? item.icon : '' ">{{ item.title ? item.title: ''  }}</va-button>
  </span>
</template>

<script setup lang="ts">

const router = useRouter();


interface ToolButton {
  id: string;
  title?: string;
  icon?: string;
  path?: string;
}

interface Props {
  toolButtons: ToolButton[]
}

const props = withDefaults(defineProps<Props>(), {})

const pageMove = ( path:string ) => {
  if (path) {
    router.push(path);
  }
}

</script>
