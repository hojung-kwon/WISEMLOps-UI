<template>
    <div class="contents">
        <va-tabs v-model="useTab">
            <template #tabs>
                <va-tab v-for="(item, idx) in props.columns" :key="idx" v-on:click="clickTab(this, item.title, idx)">
                    {{ item.title }}
                </va-tab>
            </template>
        </va-tabs>
    </div>
</template>

<script setup lang="ts">
// import { defineEmits } from "vue";
const emit = defineEmits(["toggle-drawer"]);

interface COLUMNS {
    icon: string,
    title: string
};

interface Props {
    columns: COLUMNS[]
};

const props = withDefaults(defineProps<Props>(), {});

const useTab = ref(0);
const clickTab = (e: any, title: string, idx: number) => {
    useTab.value = idx;
    emit('useTab', title);
}
</script>

<style scoped>
.contents {
    margin: 10px 0px 0px 5px;
}
</style>