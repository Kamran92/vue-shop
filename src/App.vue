<script lang="ts" setup>
import AppHeader from "@/components/app-header/AppHeader.vue";
</script>

<template>
  <app-header class="mb-35" />
  <router-view />
</template>

<style scoped>
.mb-35 {
  margin-bottom: 35px;
}
</style>
