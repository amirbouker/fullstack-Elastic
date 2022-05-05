//store.js
// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dataCitySearch: [],
    dataCitySearchArrival: [],
    flight: [],
  },
  mutations: {
    dataCitySearchMute(state, payload) {
      state.dataCitySearch = payload;
    },
    dataCitySearchArrival(state, payload) {
      state.dataCitySearchArrival = payload;
    },
    SET_FLIGHT(state, payload) {
      state.flight = payload;
    },
  },
  getters: {
    dataCitySearch: (state) => {
      return state.dataCitySearch;
    },
    dataCitySearchArrival: (state) => {
      return state.dataCitySearchArrival;
    },
    FLIGHT: (state) => {
      return state.flight;
    },
  },
  actions: {
    SET_FLIGHT: (context) => {
      context.commit("SET_FLIGHT");
    },
  },
});
