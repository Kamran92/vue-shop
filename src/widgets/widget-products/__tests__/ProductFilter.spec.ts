import ProductFilter from "../components/ProductFilter.vue";
import useCategoriesStore from "@/stores/categories-store/categoriesStore";
import { shallowMount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import { nextTick } from "vue";

jest.mock("vue-router", () => ({
  useRoute: () => ({ params: { categorySlug: "" } }),
}));

type TChildren = Array<{ name: string; slug: string }>;
const beforeEachTest = (children?: TChildren) => {
  setActivePinia(createPinia());

  jest.spyOn(useCategoriesStore(), "storeGetCategoryBySlug");
  const mockStoreGetCategoryBySlug = useCategoriesStore()
    .storeGetCategoryBySlug as jest.Mock;

  children = children ?? [
    { name: "a", slug: "a" },
    { name: "b", slug: "b" },
    { name: "c", slug: "c" },
  ];
  mockStoreGetCategoryBySlug.mockReturnValue({ children });

  const wrapper = shallowMount(ProductFilter, {
    props: {
      modelValue: "",
      "onUpdate:modelValue": async (e: string) => {
        await nextTick();
        wrapper.setProps({ modelValue: e });
      },
    },
  });

  return wrapper;
};

describe("ProductFilter", () => {
  it("фильтры отображаются, если фильтров 3 и больше", () => {
    const wrapper = beforeEachTest();

    expect(wrapper.findAll(".list__item")).toHaveLength(4);
  });

  it("фильтры не отображаются, если 2 и меньше", () => {
    const children = [
      { name: "a", slug: "a" },
      { name: "b", slug: "b" },
    ];
    const wrapper = beforeEachTest(children);

    expect(wrapper.findAll(".list__item")).toHaveLength(3);
  });

  it("фильтр 'Все продукты' выбран по умолчанию", async () => {
    const wrapper = beforeEachTest();
    await nextTick();

    expect(wrapper.find(".list__item--active").text()).toBe("Все продукты");
  });

  it("фильтр меняется если выбрать другой фильтр", async () => {
    const wrapper = beforeEachTest();

    await wrapper.find(".list__item:nth-child(2)").trigger("click");

    expect(wrapper.props("modelValue")).toBe("a");
  });
});
