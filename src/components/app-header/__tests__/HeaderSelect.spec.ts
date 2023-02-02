import HeaderSelect from "../components/HeaderSelect.vue";
import * as types from "../types";
import axios from "@/plugins/axios";
import { shallowMount, flushPromises } from "@vue/test-utils";

jest.mock("@/plugins/axios");
const axiosGet = axios.get as jest.Mock;

jest.mock("@/utils/debounce", () => {
  type TCallback = (value: unknown) => void;

  return (callback: TCallback) => (value: unknown) => callback(value);
});

const cities = [
  {
    id: 1058,
    label: "Россия, Дагестан, Дербент",
    city: "Дербент",
  },
  {
    id: 111575,
    label: "Россия, Краснодарский край, Дербентская (Северский)",
    city: "Дербентская",
  },
  {
    id: 111708,
    label: "Россия, Краснодарский край, Дербентский (Тимашевский)",
    city: "Дербентский",
  },
  {
    id: 147489,
    label: "Россия, Рязанская область, Дербень (Захаровский)",
    city: "Дербень",
  },
  {
    id: 160925,
    label: "Россия, Ставропольский край, Дербетовка (Апанасенковский)",
    city: "Дербетовка",
  },
  {
    id: 161803,
    label: "Россия, Тамбовская область, Дербень (Кирсановский)",
    city: "Дербень",
  },
];
const beforeEachTest = () => {
  const wrapper = shallowMount(HeaderSelect, {
    props: {
      modelValue: null,
      "onUpdate:modelValue": (e: types.TModelValue) => {
        return wrapper.setProps({ modelValue: e });
      },
    },
  });

  return wrapper;
};

describe("HeaderSelect.vue", () => {
  it("при вводе(2 и меньше символа) города, не получаю список городов", async () => {
    axiosGet.mockResolvedValue({ data: { data: cities } });
    const wrapper = beforeEachTest();

    await wrapper.get(".select__input").setValue("Де");
    await flushPromises();

    expect(wrapper.find(".select__list").exists()).toBe(false);
  });

  it("при вводе(3 и больше символа) города, выводится список городов из 5 строк", async () => {
    axiosGet.mockResolvedValue({ data: { data: cities } });
    const wrapper = beforeEachTest();

    await wrapper.get(".select__input").setValue("Дерб");
    await flushPromises();

    expect(wrapper.findAll(".select__item")).toHaveLength(5);
  });

  it("при сбросе, очищается список городов", async () => {
    axiosGet.mockResolvedValue({ data: { data: cities } });
    const wrapper = beforeEachTest();

    await wrapper.get(".select__input").setValue("Дерб");
    await flushPromises();
    await wrapper.get(".select__input-btn").trigger("click");

    expect(wrapper.find(".select__list").exists()).toBe(false);
  });

  it("при клике на элемент из списка городов, скрывается список городов", async () => {
    axiosGet.mockResolvedValue({ data: { data: cities } });
    const wrapper = beforeEachTest();

    await wrapper.get(".select__input").setValue("Дерб");
    await flushPromises();
    await wrapper.get(".select__item").trigger("click");

    expect(wrapper.find(".select__list").exists()).toBe(false);
  });

  it("выводиться 'Ничего не найдено...' если возвращается пустой массив", async () => {
    axiosGet.mockResolvedValue({ data: { data: [] } });
    const wrapper = beforeEachTest();

    await wrapper.get(".select__input").setValue("Дерб");
    await flushPromises();

    expect(wrapper.find(".select__item").text()).toBe("Ничего не найдено...");
  });

  it("выводиться 'Загрузка...' при запросе списка городов", async () => {
    axiosGet.mockResolvedValue({ data: { data: [] } });
    const wrapper = beforeEachTest();

    await wrapper.get(".select__input").setValue("Дерб");

    expect(wrapper.find(".select__item").text()).toBe("Загрузка...");
  });
});
