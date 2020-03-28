import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

jest.mock('axios')

import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {      
  it("渲染iframe", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.contains('iframe')).toBe(true);
  });
});

