import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("cityId", () => {
  const city = ref({ id: 1, label: "Новосибирск" });

  type TCity = typeof city.value;
  const addCityId = (value: TCity): void => {
    city.value = value;
  };

  return { city, addCityId };
});
