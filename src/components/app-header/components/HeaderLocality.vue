<script lang="ts" setup>
import closeIcon from "../icon/CrossIcon.vue";
import HeaderSelect from "./HeaderSelect.vue";
import useCityStore from "@/stores/city-store/cityStore";
import { reactive } from "vue";

const emit = defineEmits<{ (e: "close"): void }>();

const data = reactive({ findCity: null });

const submitForm = () => {
  const { storeAddCity } = useCityStore();
  storeAddCity(data.findCity);
  localStorage.setItem("city", JSON.stringify(data.findCity));
  emit("close");
};
</script>

<template>
  <form class="localities__form" @submit.prevent="">
    <div class="localities__wrap">
      <label class="localities__label">
        <span class="localities__span"> Выбор населённого пункта: </span>
        <header-select v-model="data.findCity" class="localities__select" />
      </label>
      <button
        class="localities__btn-submit"
        type="button"
        :disabled="data.findCity === null"
        @click="submitForm"
      >
        Подтвердить
      </button>
    </div>

    <button class="localities__btn-close" type="button" @click="emit('close')">
      <close-icon />
    </button>
  </form>
</template>

<style scoped>
.localities__form {
  position: relative;

  padding: 28px 19px 32px;

  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(151, 151, 151, 0.2);
}

.localities__wrap {
  display: flex;
  align-items: flex-end;
}

@media screen and (max-width: 768px) {
  .localities__wrap {
    display: block;
  }
}

.localities__label {
  margin-right: 17px;
}

.localities__span {
  color: #272727;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  cursor: pointer;
}

.localities__select {
  width: 100%;
  margin-top: 12px;
}

.localities__btn-submit {
  padding: 12px 24px;

  color: #acacac;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 1.75px;
  text-align: center;
  text-transform: uppercase;

  border: 2px solid rgba(151, 151, 151, 0.3);
  border-radius: 24px;

  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .localities__btn-submit {
    width: 100%;
    margin-top: 17px;
  }
}

.localities__btn-close {
  position: absolute;
  top: 18px;
  right: 18px;

  cursor: pointer;

  fill: #979797;
}
</style>
