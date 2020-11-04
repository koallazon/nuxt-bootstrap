<template>
    <div>
        <div class="text">
            <h1 class="h2 mt-2">
        {{ $t('head.menu2') }}
      </h1></div>
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
