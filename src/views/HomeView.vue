<script lang="ts" setup>
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";
import AppWidgetsLoader from "@/components/app-widgets-loader/AppWidgetsLoader.vue";
import ViewHeader from "@/components/view-header/ViewHeader.vue";

defineProps<{
  widgets: Array<string>;
  header: {
    title?: string;
    link?: string;
  };
}>();
</script>

<template>
  <app-error-boundary
    component-link="@/common-components/view-header/ViewHeader.vue"
  >
    <view-header :link="header.link" :title="header.title" class="container" />
  </app-error-boundary>
  <app-widgets-loader :widgets="widgets" />
</template>
