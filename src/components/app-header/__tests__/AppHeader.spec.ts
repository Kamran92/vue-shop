import AppHeader from "../AppHeader.vue";
import AppOverlay from "@/components/AppOverlay.vue";
import { shallowMount } from "@vue/test-utils";
import * as pinia from "pinia";

jest.mock("@/stores/cityStore", () => () => "");
jest.mock("pinia");

const beforeEachTest = () => {
  const mockStoreToRefs = pinia.storeToRefs as jest.Mock;
  mockStoreToRefs.mockReturnValue({ storeCity: { id: 1, title: "Москва" } });
  return shallowMount(AppHeader);
};

describe("AppHeader.vue", () => {
  it("отображается название города", () => {
    const wrapper = beforeEachTest();
    const headerTitle = wrapper.get(".header__title");

    expect(headerTitle.text()).toBe("Москва");
  });

  it("при клике отображается поиск городов", async () => {
    const wrapper = beforeEachTest();
    await wrapper.get(".header__btn").trigger("click");

    expect(wrapper.findComponent(AppOverlay).exists()).toBe(true);
  });
});
