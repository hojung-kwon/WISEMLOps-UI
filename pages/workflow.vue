<template>
    <div>
        <va-button v-on:click="new WorkflowFunc().getJson()">SAVE</va-button>
    </div>
    <div>
        <workflow :setWorkflowJson="workflowJson" @getWorkflowJson="new WorkflowFunc().save" :operators="operatorList"></workflow>
    </div>
</template>

<script setup lang="ts">
import { operatorList } from '~/assets/data/workflow/sample_operators';

const workflowJson: any = ref([]);

class WorkflowFunc {

    getJson = () => {
        alert(JSON.stringify(workflowJson.value, null, 4));
        return workflowJson.value;
    }

    save = (json: any) => {
        // 워크플로우를 다시 그리기 위해 데이터 파싱
        let saveJson: [] = [];

        let nodes: any = json.nodes;
        if(nodes) {
            for (let idx in nodes) {
                let node = nodes[idx];
                saveJson.push(node);
            }
        }

        let edges: any = json.edges;
        if (edges) {
            for (let idx in edges) {
                let edge = edges[idx];
                saveJson.push(edge);
            }
        }

        workflowJson.value = saveJson;
    }
}
</script>

<style scoped>

</style>