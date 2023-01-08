<script setup lang="ts">
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";
import AppRequestContainer from "@/components/AppRequestContainer.vue";
import AppWidgetsLoader from "@/components/app-widgets-loader/AppWidgetsLoader.vue";
import useCategories from "@/composables/useCategories";
import addAsyncComponent from "@/utils/addAsyncComponent";

const ViewHeader = addAsyncComponent(
  () => import("@/common-components/view-header/ViewHeader.vue")
);

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
    <app-error-boundary component-link="@/views/category-view/ViewHeader.vue">
      <view-header :link="header.link" :title="header.title" />
    </app-error-boundary>
    <app-widgets-loader :widgets="widgets" />
  </app-request-container>
</template>
