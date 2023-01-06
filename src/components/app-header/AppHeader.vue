<template>
  <div class="mb-35 header">
    <div class="container">
      <button class="header__btn" @click="toggleOpenLocalities">
        <location-icon class="header__icon" />
        <span class="header__title"> {{ city.label }} </span>
      </button>
    </div>
    <app-localities v-if="isOpenLocalities" @close="toggleOpenLocalities" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";

import useCityIdStore from "@/stores/cityId";

import AppLocalities from "./AppLocalities.vue";
import locationIcon from "./icon/LocationIcon.vue";

const cityIdStore = useCityIdStore();
const { city } = storeToRefs(cityIdStore);

const isOpenLocalities = ref<boolean>(false);

const toggleOpenLocalities = (): void => {
  isOpenLocalities.value = !isOpenLocalities.value;
};
</script>

<style scoped>
.header {
  padding: 25px 0px;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(39, 39, 39, 0.1);
}

.header__btn {
  display: flex;
  align-items: center;

  cursor: pointer;
}

.header__icon {
  margin-right: 8px;

  fill: #dadada;
}

.header__title {
  color: #272727;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0px;
}

.mb-35 {
  margin-bottom: 35px;
}
</style>
