import ProductCard from "../components/ProductCard.vue";
import { shallowMount } from "@vue/test-utils";

describe("cityStore", () => {
  it("кнопка 'В корзину' отображается", async () => {
    const props = {
      linkImg: "https://183930.selcdn.ru/media.png",
      isBuy: true,
      price: 990,
      commentName: "Дренирующий напиток",
      categoryName: "DrainEffect",
      presentName: "DrainEffect Red",
    };
    const wrapper = shallowMount(ProductCard, { props });

    expect(wrapper.find(".cart__btn--add").exists()).toBe(true);
  });

  it("кнопка 'В корзину' скрывается", async () => {
    const props = {
      linkImg: "https://183930.selcdn.ru/media.png",
      isBuy: false,
      price: 990,
      commentName: "Дренирующий напиток",
      categoryName: "DrainEffect",
      presentName: "DrainEffect Red",
    };
    const wrapper = shallowMount(ProductCard, { props });

    expect(wrapper.find(".cart__btn--add").exists()).toBe(false);
  });

  it("кнопка 'Нет в наличии' отображается", async () => {
    const props = {
      linkImg: "https://183930.selcdn.ru/media.png",
      isBuy: false,
      price: 990,
      commentName: "Дренирующий напиток",
      categoryName: "DrainEffect",
      presentName: "DrainEffect Red",
    };
    const wrapper = shallowMount(ProductCard, { props });

    expect(wrapper.find(".cart__btn--empty").exists()).toBe(true);
  });

  it("кнопка 'Нет в наличии скрывается", async () => {
    const props = {
      linkImg: "https://183930.selcdn.ru/media.png",
      isBuy: true,
      price: 990,
      commentName: "Дренирующий напиток",
      categoryName: "DrainEffect",
      presentName: "DrainEffect Red",
    };
    const wrapper = shallowMount(ProductCard, { props });

    expect(wrapper.find(".cart__btn--empty").exists()).toBe(false);
  });

  it("название категории скрывается", async () => {
    const props = {
      linkImg: "https://183930.selcdn.ru/media.png",
      isBuy: true,
      price: 990,
      commentName: "",
      categoryName: "",
      presentName: "",
    };
    const wrapper = shallowMount(ProductCard, { props });

    expect(wrapper.find(".cart__category").exists()).toBe(false);
  });

  it("название продукта скрывается", async () => {
    const props = {
      linkImg: "https://183930.selcdn.ru/media.png",
      isBuy: true,
      price: 990,
      commentName: "",
      categoryName: "",
      presentName: "",
    };
    const wrapper = shallowMount(ProductCard, { props });

    expect(wrapper.find(".cart__title").exists()).toBe(false);
  });

  it("описание продукта скрывается", async () => {
    const props = {
      linkImg: "https://183930.selcdn.ru/media.png",
      isBuy: true,
      price: 990,
      commentName: "",
      categoryName: "",
      presentName: "",
    };
    const wrapper = shallowMount(ProductCard, { props });

    expect(wrapper.find(".cart__description").exists()).toBe(false);
  });
});
