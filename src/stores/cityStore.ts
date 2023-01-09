import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("city", () => {
  const localStorageCity = localStorage.getItem("city");
  const defaultCity = localStorageCity
    ? JSON.parse(localStorageCity)
    : { id: 1, title: "Новосибирск" };

  const storeCity = ref(defaultCity);

  type TCity = typeof storeCity.value;
  const storeAddCity = (value: TCity) => {
    storeCity.value = value;
  };

  return { storeCity, storeAddCity };
});
