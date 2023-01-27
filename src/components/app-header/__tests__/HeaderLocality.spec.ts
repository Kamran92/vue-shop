import HeaderLocality from "../components/HeaderLocality.vue";
import { shallowMount } from "@vue/test-utils";

describe("HeaderLocality.vue", () => {
  it("при клике закрывается поиск городов", async () => {
    const wrapper = shallowMount(HeaderLocality);

    await wrapper.get(".localities__btn-close").trigger("click");
    expect(wrapper.emitted("close")).toHaveLength(1);
  });
});
