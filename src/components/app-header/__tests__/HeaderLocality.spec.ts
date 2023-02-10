import HeaderLocality from "../components/HeaderLocality.vue";
import { shallowMount } from "@vue/test-utils";
import * as vue from "vue";

jest.mock("@/stores/city-store/cityStore", () => () => {
  return { storeAddCity: () => "" };
});

describe("HeaderLocality.vue", () => {
  it("нельзя сохранить, если город не выбран", () => {
    jest.spyOn(vue, "reactive").mockReturnValue({ findCity: null });
    const wrapper = shallowMount(HeaderLocality);

    const submitBtn = wrapper.get(".localities__btn-submit");
    expect(submitBtn.attributes().disabled).toBeDefined();
  });

  it("можно сохранить, если город выбран", () => {
    jest.spyOn(vue, "reactive").mockReturnValue({ findCity: {} });
    const wrapper = shallowMount(HeaderLocality);

    const submitBtn = wrapper.get(".localities__btn-submit");
    expect(submitBtn.attributes().disabled).not.toBeDefined();
  });

  it("сохраняется в localStorage", async () => {
    const findCity = { id: 1, title: "Москва" };
    jest.spyOn(vue, "reactive").mockReturnValue({ findCity });
    const setItem = jest.spyOn(Storage.prototype, "setItem");
    const wrapper = shallowMount(HeaderLocality);

    await wrapper.get(".localities__btn-submit").trigger("click");
    expect(setItem).toHaveBeenCalledWith("city", JSON.stringify(findCity));
  });

  it("поиск городов сворачивается после сохранения", async () => {
    jest.spyOn(vue, "reactive").mockReturnValue({ findCity: {} });
    const wrapper = shallowMount(HeaderLocality);

    await wrapper.get(".localities__btn-submit").trigger("click");

    expect(wrapper.emitted("close")).toHaveLength(1);
  });

  it("поиск городов сворачивается при закрытии", async () => {
    const wrapper = shallowMount(HeaderLocality);

    await wrapper.get(".localities__btn-close").trigger("click");

    expect(wrapper.emitted("close")).toHaveLength(1);
  });
});
