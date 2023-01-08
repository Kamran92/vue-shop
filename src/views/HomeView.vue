<script lang="ts" setup>
import AppViewHeader from "@/components/app-view-header/AppViewHeader.vue";
import AppWidgetsLoader from "@/components/app-widgets-loader/AppWidgetsLoader.vue";

defineProps<{
  widgets: Array<string>;
  header: {
    title?: string;
    link?: string;
  };
}>();
</script>

<template>
  <app-view-header
    :link="header.link"
    :title="header.title"
    class="container"
  />
  <app-widgets-loader :widgets="widgets" />
</template>
