import AppHeader from "../AppHeader.vue";
import AppOverlay from "@/components/AppOverlay.vue";
import { createTestingPinia } from "@pinia/testing";
import { shallowMount, VueWrapper } from "@vue/test-utils";

describe("AppHeader.vue", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    const city = { storeCity: { id: 1, title: "Москва" } };
    const pinia = createTestingPinia({ initialState: { city } });
    wrapper = shallowMount(AppHeader, { global: { plugins: [pinia] } });
  });

  afterEach(() => {
    if (wrapper) wrapper.unmount();
  });

  it("отображается название города", () => {
    const headerTitle = wrapper!.get(".header__title");

    expect(headerTitle.text()).toBe("Москва");
  });

  it("при клике отображается поиск городов", async () => {
    await wrapper!.get(".header__btn").trigger("click");

    expect(wrapper!.findComponent(AppOverlay).exists()).toBe(true);
  });
});
