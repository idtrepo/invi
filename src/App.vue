<template>
    <InvitacionApp/>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// componentes
const InvitacionApp = defineAsyncComponent(() => import('@/modules/shared/layouts/InvitacionApp.vue'));
</script>