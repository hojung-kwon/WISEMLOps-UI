<template>
    <div>
        <h1>Alarm Box</h1>

        <div>
            <fieldset>
                <legend>DEFAULT Alarm</legend>
                <va-alert color="warning">
                    Your account is about expire, upgrade now
                </va-alert>

                <va-alert color="danger">
                    Change a few things up and try submitting again!
                </va-alert>

                <va-alert color="#ce6e67">
                    This alert needs your attention, but it's not super important
                </va-alert>

                <va-alert color="#fdeae7" text-color="#940909">
                    Hello World! This is an alert with an important message and a custom background and text color!
                </va-alert>
            </fieldset>

            <fieldset>
                <legend>ICON Alarm</legend>

                <va-alert color="info">
                    <template #icon>
                        <va-icon name="info" />
                    </template>
                    You read this important alert message with a slotted icon
                </va-alert>

                <va-alert color="warning" icon="warning">
                    You read this important alert message with an icon
                </va-alert>

                <va-alert color="warning" outline>
                    <template #icon>
                        <va-icon name="star" color="warning"/>
                    </template>
                    If you like Vuestic UI, please give us a star on
                    <a href="https://github.com/epicmaxco/vuestic-ui" target="_blank">GitHub</a>
                </va-alert>
            </fieldset>

            <fieldset>
                <legend>TITLE Alarm</legend>

                <va-alert color="info" :title="'Hello World!'">
                    Who-hoooo! You successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                </va-alert>

                <va-alert color="#265c83">
                    <template #title>
                        <h4>You can use slotted title</h4>
                    </template>
                    <va-divider />
                    You can add a divider, close button, links, icons, change the color and you can do whatever you need with Vuestic UI!
                </va-alert>
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
legend {
    font-weight: bold;
}
fieldset {
    margin-bottom: 20px;
}
</style>