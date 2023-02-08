import AppErrorBoundary from "../AppErrorBoundary.vue";
import stubComponent from "./stubComponent.vue";
import { mount } from "@vue/test-utils";

describe("AppErrorBoundary.vue", () => {
  it("надпись 'Произошла ошибка в' выводиться, если произошла ошибка", async () => {
    const props = { componentLink: "@/stubComponent.vue" };
    const slots = { default: stubComponent };
    const wrapper = mount(AppErrorBoundary, { props, slots });

    await wrapper.getComponent("button").trigger("click");

    const divValue = wrapper.getComponent("div").text();
    expect(divValue).toBe('Произошла ошибка в "@/stubComponent.vue"');
  });
});
