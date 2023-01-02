<template>
  <div class="select">
    <div class="select__wrap">
      <input
        ref="input"
        v-model="findValue"
        :class="{
          'select__input--focus': isList || isFindValueMoreThreeCharacters,
        }"
        class="select__input"
        placeholder="Например, Санкт-петербург"
        type="text"
        @focus="isFocusInput = true"
        @blur="isFocusInput = false"
      />
      <button class="select__input-btn" @click="setCity({ id: 0, label: '' })">
        <cross-icon class="select__input-icon" />
      </button>
    </div>
    <ul
      v-if="isFindValueMoreThreeCharacters && !selectedValue.label"
      class="select__list"
    >
      <li v-if="isLoading" class="select__item">Загрузка...</li>
      <li v-else-if="!isList" class="select__item">Ничего не найдено...</li>
      <li
        v-for="item in list"
        v-else
        :key="item.id"
        class="select__item"
        @click="setCity({ id: item.id, label: item.city })"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, Ref, ref, watch } from "vue";

import debounce from "@/utils/debounce";

import crossIcon from "./icon/crossIcon.vue";

interface IModeValue {
  id: number;
  label: string;
}
const props = defineProps<{
  modelValue: IModeValue;
  getList: <T, U>(value: T) => Promise<Array<U>>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: IModeValue): void;
}>();

interface IList {
  id: number;
  city: string;
  label: string;
}
const list: Ref<IList[]> = ref([]);
const findValue = ref<string>("");
const isLoading = ref<boolean>(false);
const isFocusInput = ref(false);

const isList = computed<boolean>(() => !!list.value.length);
const isFindValueMoreThreeCharacters = computed<boolean>(
  () => findValue.value.length > 3
);

const selectedValue = computed<IModeValue>({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const getList = async <T>(value: T): Promise<void> => {
  try {
    list.value = await props.getList(value);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const setCity = (city: IModeValue): void => {
  findValue.value = city.label;
  selectedValue.value = city;
  list.value = [];
};

const debounceGetCities = debounce(getList);
watch(findValue, (newValue: string) => {
  if (!isFindValueMoreThreeCharacters.value) return;
  if (newValue === selectedValue.value.label) return;

  isLoading.value = true;
  selectedValue.value = { id: 0, label: "" };
  debounceGetCities(newValue);
});
</script>

<style scoped>
.select {
  position: relative;

  display: inline-block;
}

.select__input {
  width: 100%;
  padding: 12px 40px 12px 12px;

  border: 1px solid rgba(151, 151, 151, 0.5);
  border-radius: 5px;
}

.select__input::placeholder {
  color: #979797;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
}

.select__input--focus,
.select__input:focus {
  border: 1px solid #272727;
}

.select__wrap {
  position: relative;
}

.select__input-btn {
  position: absolute;
  top: 0px;
  right: 0px;

  padding: 16px 14px;

  cursor: pointer;
}
.select__input-icon {
  width: 12px;
  height: 12px;

  fill: #979797;
}

.select__list {
  position: absolute;
  top: 36px;

  display: grid;
  grid-gap: 8px;
  width: 100%;
  padding: 12px;

  font-weight: 300;
  font-size: 18px;
  line-height: 24px;

  background: #ffffff;
  border: 1px solid #272727;
  border-top: none;
  border-radius: 0px 0px 5px 5px;
}

.select__item {
  cursor: pointer;
}

.select__item:hover {
  color: #272727;
}

.select__item:nth-child(1) {
  padding-top: 12px;

  color: #979797;

  border-top: 2px solid rgba(151, 151, 151, 0.3);
}
</style>
