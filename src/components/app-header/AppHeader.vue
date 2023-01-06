<script lang="ts" setup>
import AppLocalities from "./AppLocalities.vue";
import LocationIcon from "./icon/LocationIcon.vue";
import useCityIdStore from "@/stores/cityId";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { city } = storeToRefs(useCityIdStore());
const isOpenLocalities = ref(false);

const toggleOpenLocalities = () => {
  isOpenLocalities.value = !isOpenLocalities.value;
};
</script>

<template>
  <div class="header">
    <div class="container">
      <button class="header__btn" @click="toggleOpenLocalities">
        <location-icon class="header__icon" />
        <span class="header__title"> {{ city.label }} </span>
      </button>
    </div>
    <app-localities v-if="isOpenLocalities" @close="toggleOpenLocalities" />
  </div>
</template>

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
</style>
