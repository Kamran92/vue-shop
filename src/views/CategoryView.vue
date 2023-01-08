<script setup lang="ts">
import AppRequestContainer from "@/components/AppRequestContainer.vue";
import AppViewHeader from "@/components/app-view-header/AppViewHeader.vue";
import AppWidgetsLoader from "@/components/app-widgets-loader/AppWidgetsLoader.vue";
import useCategories from "@/composables/useCategories";

defineProps<{
  widgets: Array<string>;
  header: {
    title?: string;
    link?: string;
  };
}>();

const { isLoading, isError } = useCategories();
</script>

<template>
  <app-request-container
    class="container"
    :is-loading="isLoading"
    :is-error="isError"
  >
    <app-view-header :link="header.link" :title="header.title" />
    <app-widgets-loader :widgets="widgets" />
  </app-request-container>
</template>
