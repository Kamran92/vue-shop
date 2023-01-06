<template>
  <app-overlay>
    <form class="localities__form" @submit.prevent="">
      <div class="localities__wrap">
        <label class="localities__label">
          <span class="localities__span"> Выбор населённого пункта: </span>
          <app-select
            v-model="findCity"
            :get-list="getCities"
            class="localities__select"
          />
        </label>
        <button
          class="localities__btn-submit"
          type="button"
          :disabled="findCity.label === ''"
          @click="closeForm"
        >
          Подтвердить
        </button>
      </div>

      <button
        class="localities__btn-close"
        type="button"
        @click="$emit('close')"
      >
        <close-icon />
      </button>
    </form>
  </app-overlay>
</template>

<script lang="ts" setup>
import AppSelect from "./AppSelect.vue";
import closeIcon from "./icon/CrossIcon.vue";
import AppOverlay from "@/components/AppOverlay.vue";
import useCityIdStore from "@/stores/cityId";
import axios from "axios";
import { ref } from "vue";

const emit = defineEmits<{ (e: "close"): void }>();

const { addCityId } = useCityIdStore();

const findCity = ref({ id: 0, label: "" });

interface ICities {
  data: Array<{ id: number; city: string; label: string }>;
}
const getCities = async (term: string) => {
  const URL = "https://nlstar.com/api/catalog3/v1/city/";
  const params = { country: "ru", term };
  const { data } = await axios.get<ICities>(URL, { params });
  return data.data.slice(0, 5);
};

const closeForm = () => {
  addCityId(findCity.value);
  emit("close");
};
</script>

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
