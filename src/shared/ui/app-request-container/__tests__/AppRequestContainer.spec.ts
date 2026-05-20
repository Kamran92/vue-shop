import AppRequestContainer from "../AppRequestContainer.vue";
import { shallowMount } from "@vue/test-utils";

describe("AppRequestContainer.vue", () => {
  it("надпись 'Загрузка...' выводиться", async () => {
    const props = { isLoading: true, isError: false };
    const wrapper = shallowMount(AppRequestContainer, { props });

    expect(wrapper.getComponent("div").text()).toBe("Загрузка...");
  });

  it("надпись 'Произошла ошибка...' выводиться", async () => {
    const props = { isLoading: false, isError: true };
    const wrapper = shallowMount(AppRequestContainer, { props });

    expect(wrapper.getComponent("div").text()).toBe("Произошла ошибка...");
  });

  it("компонент выводиться", async () => {
    const props = { isLoading: false, isError: false };
    const slots = { default: "<div></div>" };
    const wrapper = shallowMount(AppRequestContainer, { props, slots });

    expect(wrapper.getComponent("div").text()).toBe("");
  });
});
