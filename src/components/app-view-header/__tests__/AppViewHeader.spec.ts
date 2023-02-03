import AppViewHeader from "../AppViewHeader.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

jest.mock("vue-router", () => ({
  useRoute: () => ({ params: { categorySlug: "bad" } }),
}));

jest.mock("@/stores/categories-store/categoriesStore", () => {
  return () => ({
    storeGetCategoryBySlug: (slug: "bad") => {
      const category = { bad: { name: "БАД" } };
      return category[slug];
    },
  });
});

interface IProps {
  title?: string;
  link?: string;
}
const beforeEachTest = (props: IProps) => {
  return mount(AppViewHeader, {
    global: {
      stubs: { RouterLink: RouterLinkStub },
    },
    props,
  });
};
describe("AppViewHeader.vue", () => {
  it("отображается название страницы, co ссылкой", () => {
    const wrapper = beforeEachTest({ link: "/" });

    expect(wrapper.get(".link .link__title").text()).toBe("БАД");
  });

  it("отображается название страницы, без ссылки", () => {
    const wrapper = beforeEachTest({ title: "Парфюм" });

    expect(wrapper.get(".link__title").text()).toBe("Парфюм");
  });
});
