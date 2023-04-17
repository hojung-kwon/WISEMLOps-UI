<template>
    <div>
        <h1>Loading</h1>

        <div>
            <fieldset>
                <legend>Size 50px</legend>
                <va-progress-circle :size="50" :thickness="0.1" v-model="percent" style="display: inline-block; margin-right: 30px;">{{percent}}</va-progress-circle>
                <va-progress-circle :size="50" :thickness="0.3" indeterminate style="display: inline-block; margin-right: 30px;"/>
                <va-progress-circle :size="50" :thickness="0.7" indeterminate style="display: inline-block; margin-right: 30px;">Loading</va-progress-circle>
            </fieldset>

            <fieldset>
                <legend>Size 100px</legend>
                <va-progress-circle :size="100" :thickness="0.1" indeterminate style="display: inline-block; margin-right: 30px;"/>
                <va-progress-circle :size="100" :thickness="0.3" indeterminate style="display: inline-block; margin-right: 30px;">Loading</va-progress-circle>
                <va-progress-circle :size="100" :thickness="0.7" v-model="percent" style="display: inline-block; margin-right: 30px;">{{percent}}</va-progress-circle>
            </fieldset>

            <fieldset>
                <legend>Size 200px</legend>
                <va-progress-circle :size="200" :thickness="0.1" indeterminate style="display: inline-block; margin-right: 30px;">Loading</va-progress-circle>
                <va-progress-circle :size="200" :thickness="0.3" v-model="percent" style="display: inline-block; margin-right: 30px;">{{percent}}</va-progress-circle>
                <va-progress-circle :size="200" :thickness="0.7" indeterminate style="display: inline-block; margin-right: 30px;"/>
            </fieldset>

            <fieldset>
                <legend>Progress Bar</legend> <br/>
                <va-progress-bar indeterminate/> <br/>
                <va-progress-bar v-model="percent" color="danger"/> <br/>
                <va-progress-bar color="#a1a1a1"/> <br/>
            </fieldset>
        </div>
    </div>
</template>

<script setup lang="ts">
const percent: globalThis.Ref<number> = ref(0);
setInterval( () => {
    percent.value = percent.value + Math.ceil(new Date().getTime() % 20) + 7;
    if (percent.value > 100) {
        percent.value = 0;
    }
}, 2000);
</script>

<style scoped>
h1 {
    font-size: 20pt;
    margin-bottom: 20px;
}
legend {
    font-weight: bold;
}
fieldset {
    margin-bottom: 20px;
}
</style>