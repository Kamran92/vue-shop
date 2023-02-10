import ProductList from "../components/ProductList.vue";
import { shallowMount } from "@vue/test-utils";

describe("ProductList", () => {
  it("список продуктов выводится", () => {
    const product = {
      main_image_thumb_300: "string",
      price: 0,
      allowed: true,
      available: true,
    };
    const props = { products: [product, product] };
    const wrapper = shallowMount(ProductList, { props });

    expect(wrapper.findAll("li")).toHaveLength(2);
  });

  it("надпись 'данных нет' выводится если список продуктов пустой", () => {
    const props = { products: [] };
    const wrapper = shallowMount(ProductList, { props });

    expect(wrapper.text()).toBe("данных нет");
  });
});
