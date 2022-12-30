<template>
  <app-overlay>
    <form class="localities__form" @submit.prevent="">
      <label>
        <span class="localities__label"> Выбор населённого пункта: </span>
        <app-select
          v-model="findCity"
          :get-list="getCities"
          class="localities__select"
        />
        <button class="localities__btn-submit" type="button">
          Подтвердить
        </button>
        <button
          class="localities__btn-close"
          type="button"
          @click="$emit('close')"
        >
          <close-icon />
        </button>
      </label>
    </form>
  </app-overlay>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import AppOverlay from "@/components/AppOverlay.vue";
import AppSelect from "@/components/app-select/AppSelect.vue";
import closeIcon from "./icon/crossIcon.vue";

defineEmits<{ (e: "close"): void }>();

const findCity = ref<string>("");

const getCities = async <T, U>(term: T): Promise<U[]> => {
  const URL = "https://nlstar.com/api/catalog3/v1/city/";
  const params = { country: "ru", term };
  const { data } = await axios.get(URL, { params });
  return data.data.slice(0, 5);
};
</script>

<style scoped>
.localities__form {
  padding: 28px 19px 32px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
  border-radius: 5px;
  position: relative;
}

.localities__label {
  display: block;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #272727;
  margin-bottom: 12px;
}

.localities__select {
  width: 540px;
  margin-right: 17px;
}

.localities__label {
  width: 540px;
}

.localities__btn-submit {
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  color: #acacac;
  border: 2px solid rgba(151, 151, 151, 0.3);
  border-radius: 24px;
  padding: 12px 24px;
}

.localities__btn-close {
  position: absolute;
  top: 18px;
  right: 18px;
  fill: #979797;
  cursor: pointer;
}
</style>
