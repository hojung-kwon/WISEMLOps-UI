<template>
<div>
  <div class="row">
    <div class="px-3 flex flex-col xs12">
      <va-card outlined>
        <va-card-title>
          <div>Run Details</div>
        </va-card-title>
        <va-card-content>
          <table class="va-table va-table--striped" style="width:100%">
            <tbody>
              <tr>
                <td>RunId</td><td>{{ config['id'] }}</td>
              </tr>
              <tr>
                <td>Workflow name</td><td>{{ workflowManifest['metadata']['name'] }}</td>
              </tr>
              <tr>
                <td>Status</td><td>{{ config['status'] }}</td>
              </tr>
              <tr>
                <td>Description</td><td>{{ config['description'] }}</td>
              </tr>
              <tr>
                <td>Created at</td><td>{{ config['created_at']!='1970-01-01T00:00:00+00:00' ? new Date(config['created_at']).toLocaleString(): '-' }}</td>
              </tr>
              <tr>
                <td>Started at</td><td>{{ config['scheduled_at']!='1970-01-01T00:00:00+00:00' ? new Date(config['scheduled_at']).toLocaleString(): '-' }}</td>
              </tr>
              <tr>
                <td>Finished at</td><td>{{ config['finished_at']!='1970-01-01T00:00:00+00:00' ? new Date(config['finished_at']).toLocaleString(): '-' }}</td>
              </tr>
            </tbody>
          </table>
        </va-card-content>
      </va-card>      
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{modelValue: string[] | any,}>(), {})

const config = props.modelValue['run']
const workflowManifest = props.modelValue['pipeline_runtime']['workflow_manifest'] ? JSON.parse(props.modelValue['pipeline_runtime']['workflow_manifest']) : ''

</script>