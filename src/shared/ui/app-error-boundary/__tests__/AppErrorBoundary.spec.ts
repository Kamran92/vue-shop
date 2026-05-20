import AppErrorBoundary from "../AppErrorBoundary.vue";
import { mount } from "@vue/test-utils";

const StubComponent = {
  template: `<button @click="click"></button>`,
  methods: {
    click() {
      throw new Error();
    },
  },
};
describe("AppErrorBoundary.vue", () => {
  it("надпись 'Произошла ошибка в' выводиться, если произошла ошибка", async () => {
    window.console.error = () => "";
    const props = { componentLink: "@/stubComponent.vue" };
    const slots = { default: StubComponent };
    const wrapper = mount(AppErrorBoundary, { props, slots });

    await wrapper.getComponent("button").trigger("click");

    const divValue = wrapper.getComponent("div").text();
    expect(divValue).toBe('Произошла ошибка в "@/stubComponent.vue"');
  });
});
