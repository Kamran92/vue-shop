import AppOverlay from "../AppOverlay.vue";
import { shallowMount } from "@vue/test-utils";

describe("AppOverlay.vue", () => {
  it("скроллбар браузера скрывается", async () => {
    shallowMount(AppOverlay);

    expect(document.body.className).toBe("remove-body-scroll");
  });

  it("скроллбар браузера показывается", async () => {
    const wrapper = shallowMount(AppOverlay);

    wrapper.unmount();
    expect(document.body.className).toBe("");
  });
});
