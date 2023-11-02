<template>
  <va-sidebar v-model="props.sideEnabled" position="right" width="40vw">
    <va-card outlined style="height:100%">
      <va-card-title>상세보기</va-card-title>
      <va-card-content>
        <div class="va-table-responsive">
          <table class="va-table .va-table--striped">
            <tbody>
              <tr>
                <td>RUN ID</td>
                <td>{{ props.nodeInfo.details?.run_id }}</td>
              </tr>
              <tr>
                <td>TASK ID</td>
                <td>{{ props.nodeInfo.details?.task_id }}</td>
              </tr>
              <tr>
                <td>DISPLAY NAME</td>
                <td>{{ props.nodeInfo.details?.display_name }}</td>
              </tr>
              <tr>
                <td>CREATE TIME</td>
                <td>{{ new Date(props.nodeInfo.details?.create_time).toLocaleString() }}</td>
              </tr>
              <tr>
                <td>START TIME</td>
                <td>{{ new Date(props.nodeInfo.details?.start_time).toLocaleString() }}</td>
              </tr>
              <tr>
                <td>END TIME</td>
                <td>{{ new Date(props.nodeInfo.details?.end_time).toLocaleString() }}</td>
              </tr>
              <tr>
                <td>STATE</td>
                <td>
                  {{ props.nodeInfo.details?.state ? props.nodeInfo.details?.state : '-' }}
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </va-card-content>
    </va-card>
  </va-sidebar>
</template>

<script setup lang="ts">

const emit = defineEmits(["saveNode"]);

interface Props {
  nodeInfo: workflowNodeInfo;
  sideEnabled: boolean;

}
const props = withDefaults(defineProps<Props>(), {
})


const onNodeSave = () => {
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
</style>