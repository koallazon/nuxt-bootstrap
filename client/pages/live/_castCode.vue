<template>
    <div>
        <b>live ID : {{ $route.params.castCode }}</b>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    head: {
        titleTemplate: 'live_castCode'
    }
})
</script>
