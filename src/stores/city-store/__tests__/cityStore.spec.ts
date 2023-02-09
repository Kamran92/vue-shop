import cityStore from "../cityStore";
import { setActivePinia, createPinia } from "pinia";

describe("cityStore", () => {
  it("город получаю из localStorage", async () => {
    setActivePinia(createPinia());
    const mockCity = { id: 2, title: "Москва" };
    window.localStorage.setItem("city", JSON.stringify(mockCity));
    const { storeCity } = cityStore();

    expect(storeCity).toEqual(mockCity);

    window.localStorage.clear();
  });

  it("город Новосибирск по умолчанию", async () => {
    setActivePinia(createPinia());
    const { storeCity } = cityStore();

    expect(storeCity).toEqual({ id: 1, title: "Новосибирск" });
  });
});
