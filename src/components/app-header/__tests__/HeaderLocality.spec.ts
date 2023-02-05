import HeaderLocality from "../components/HeaderLocality.vue";
import { shallowMount } from "@vue/test-utils";
import * as vue from "vue";

jest.mock("@/stores/cityStore", () => () => {
  return { storeAddCity: () => "" };
});

describe("HeaderLocality.vue", () => {
  it("если город не выбран, нельзя сохранить", () => {
    jest.spyOn(vue, "reactive").mockReturnValue({ findCity: null });
    const wrapper = shallowMount(HeaderLocality);

    const submitBtn = wrapper.get(".localities__btn-submit");
    expect(submitBtn.attributes().disabled).toBeDefined();
  });

  it("если город выбран, можно сохранить", () => {
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

  it("после сохранения сворачивается поиск городов", async () => {
    jest.spyOn(vue, "reactive").mockReturnValue({ findCity: {} });
    const wrapper = shallowMount(HeaderLocality);

    await wrapper.get(".localities__btn-submit").trigger("click");

    expect(wrapper.emitted("close")).toHaveLength(1);
  });

  it("при закрытии сворачивается поиск городов", async () => {
    const wrapper = shallowMount(HeaderLocality);

    await wrapper.get(".localities__btn-close").trigger("click");

    expect(wrapper.emitted("close")).toHaveLength(1);
  });
});
