import AppHeader from "../AppHeader.vue";
import AppOverlay from "@/components/AppOverlay.vue";
import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";

const beforeEachTest = () => {
  const city = { storeCity: { id: 1, title: "Москва" } };
  const pinia = createTestingPinia({ initialState: { city } });
  return shallowMount(AppHeader, { global: { plugins: [pinia] } });
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
