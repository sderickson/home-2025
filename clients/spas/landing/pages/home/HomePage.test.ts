import { describe, it, expect } from "vitest";
import {
  mountWithPlugins,
  withResizeObserverMock,
} from "@saflib/vue-spa-dev/components.ts";
import HomePage from "./HomePage.vue";
import { router } from "../../router.ts";

withResizeObserverMock(() => {
  describe("HomePage", () => {
    it("should render", () => {
      const wrapper = mountWithPlugins(HomePage, {}, { router });
      expect(wrapper.html()).toContain("Welcome!");
    });
  });
});
