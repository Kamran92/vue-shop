import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("city", () => {
  const city = ref({ id: 1, title: "Новосибирск" });

  type TCity = typeof city.value;
  const addCity = (value: TCity) => {
    city.value = value;
  };

  return { city, addCity };
});
