import categoriesStore from "../categoriesStore";
import { setActivePinia, createPinia } from "pinia";

jest.mock("../api", () => {
  return {
    getCategories: () => {
      return [
        { name: "a", slug: "a" },
        { name: "b", slug: "b" },
      ];
    },
  };
});

describe("categoriesStore", () => {
  it("категорию получаю по slug", async () => {
    setActivePinia(createPinia());
    const { storeGetCategories, storeGetCategoryBySlug } = categoriesStore();
    await storeGetCategories();
    expect(storeGetCategoryBySlug("b")).toEqual({ name: "b", slug: "b" });
  });
});
