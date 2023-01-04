<script setup lang="ts">
import BackIcon from "./icons/BackIcon.vue";

defineProps<{
  link: string;
  title: string;
}>();
</script>

<template>
  <router-link v-if="link" class="link" :to="link">
    <back-icon class="link__icon" />
    <h2 class="link__title">{{ title }}</h2>
  </router-link>
</template>

<style>
.link {
  display: flex;
  align-items: center;
}

.link__icon {
  flex: none;
  margin-right: 10px;
}

.link__title {
  color: #272727;
  font-weight: 500;
  font-size: 44px;
  line-height: 44px;
}
</style>
