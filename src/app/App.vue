<script lang="ts" setup>
import AppHeader from "@/widgets/app-header/ui/AppHeader.vue";
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
