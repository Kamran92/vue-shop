import AppWidgetsLoader from "../AppWidgetsLoader.vue";
import { shallowMount } from "@vue/test-utils";

jest.mock("../widgets", () => {
  return {
    a: { widgetLink: "@/a" },
    b: { widgetLink: "@/b" },
  };
});

describe("AppWidgetsLoader.vue", () => {
  it("виджет отображается если компонент найден", () => {
    const props = { widgetSignatures: ["a", "b"] };
    const wrapper = shallowMount(AppWidgetsLoader, { props });

    expect(wrapper.findAll("app-error-boundary-stub")).toHaveLength(2);
  });

  it("ошибка происходит если виджет не найден", () => {
    const props = { widgetSignatures: ["singature1"] };
    const wrapper = () => shallowMount(AppWidgetsLoader, { props });

    expect(wrapper).toThrow();
  });

  it("надпись выводиться если происходит ошибка", () => {
    const props = { widgetSignatures: ["singature1"] };
    const wrapper = () => shallowMount(AppWidgetsLoader, { props });

    expect(wrapper).toThrow("не найден виджет для сигнатуры singature1");
  });
});
