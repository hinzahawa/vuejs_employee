import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataEmployee: [
      {
        id:1,
        name: "test",
        email: "test@mail.com",
      },
    ],
  },
  mutations: {
    setDataEmployee(state, payload) {
      state.dataEmployee.push(payload)
      // state.dataEmployee = [...state.dataEmployee,payload]
    },
    updateDataEmployee(state, payload) {
      state.dataEmployee = state.dataEmployee.map(v=> v.id === payload.id ? payload : v)
    },
    deleteDataEmployee(state, payload) {
      state.dataEmployee = state.dataEmployee.filter(v=> v.id !== payload)
    },
  },
  actions: {
    setDataEmployee({commit},data){
      commit('setDataEmployee',data)
    },
    EditDataEmployee({commit},data){
      commit('updateDataEmployee',data)
    },
    DeleteDataEmployee({commit},data){
      commit('deleteDataEmployee',data)
    }
  },
  modules: {},
  getters: {
    getDataEmployee(state) {
      return state.dataEmployee;
    },
  },
});
