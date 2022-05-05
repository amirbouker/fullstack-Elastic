// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files

import Vue from "vue";
import Router from "vue-router";
// import Hello from '@/components/Hello'

import createOrder from "@/components/createOrder.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "",
      component: createOrder,
    },
  ],
});
