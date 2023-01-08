import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("city", () => {
  const localStorageCity = localStorage.getItem("city");
  const defaultCity = localStorageCity
    ? JSON.parse(localStorageCity)
    : { id: 1, title: "Новосибирск" };

  const city = ref(defaultCity);

  type TCity = typeof city.value;
  const addCity = (value: TCity) => {
    city.value = value;
  };

  return { city, addCity };
});
