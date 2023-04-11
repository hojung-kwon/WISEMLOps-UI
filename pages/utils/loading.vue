<template>
    <div>
        <h1>Loading</h1>

        <div>
            <fieldset>
                <legend>Size 50px</legend>

                <loading-type1 class="loading-size-50"></loading-type1>
                <loading-type2 class="loading-size-50"></loading-type2>
                <loading-type3 class="loading-size-50"></loading-type3>
            </fieldset>

            <fieldset>
                <legend>Size 100px</legend>

                <loading-type1 class="loading-size-100"></loading-type1>
                <loading-type2 class="loading-size-100"></loading-type2>
                <loading-type3 class="loading-size-100"></loading-type3>
            </fieldset>

            <fieldset>
                <legend>Size 200px</legend>

                <loading-type1 class="loading-size-200"></loading-type1>
                <loading-type2 class="loading-size-200"></loading-type2>
                <loading-type3 class="loading-size-200"></loading-type3>
            </fieldset>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
h1 {
    font-size: 20pt;
    margin-bottom: 20px;
}
.loading-size-50 {
    width: 50px;
    display: inline-block;
}
.loading-size-100 {
    width: 100px;
    display: inline-block;
}
.loading-size-200 {
    width: 200px;
    display: inline-block;
}
legend {
    font-weight: bold;
}
fieldset {
    margin-bottom: 20px;
}
</style>