<template>
    <div>
        <div class="text">about</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    head: {
        titleTemplate: 'About'
    }
})
</script>

<style scoped>
    .text {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
</style>
