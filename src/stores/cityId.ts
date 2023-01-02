import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export default defineStore("cityId", () => {
  interface ICity {
    id: number;
    label: string;
  }

  const city: Ref<ICity> = ref({ id: 1, label: "Новосибирск" });

  const addCityId = (value: ICity): void => {
    city.value = value;
  };

  return {
    city,
    addCityId,
  };
});
