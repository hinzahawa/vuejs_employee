import Vue from "vue";
import Vuex from "vuex";
import ApiService from "../common/api_service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataEmployee: [
      // {
      //   id:1,
      //   name: "test",
      //   email: "test@mail.com",
      // },
    ],
  },
  mutations: {
    setDataEmployee(state, payload) {
      state.dataEmployee = payload;
      // state.dataEmployee.push(payload);
      // state.dataEmployee = [...state.dataEmployee,payload]
    },
    updateDataEmployee(state, payload) {
      state.dataEmployee = state.dataEmployee.map((v) =>
        v._id === payload._id ? payload : v
      );
    },
    deleteDataEmployee(state, payload) {
      state.dataEmployee = state.dataEmployee.filter((v) => v._id !== payload);
    },
    getDataEmployee(state, payload) {
      state.dataEmployee = payload;
    },
  },
  actions: {
    setDataEmployee({ commit }, data) {
      const { email, name } = data;
      ApiService.post("users/insert", { email: email, name: name })
        .then(({ data }) => {
          if (data.status === "success") {
            commit("setDataEmployee", data.data);
          }
        })
        .catch(({ response }) => {
          console.log(response);
          // context.commit(SET_ERROR, response.data.errors);
        });
    },
    EditDataEmployee({ commit }, data) {
      const { _id,email,name } = data
      ApiService.put(`users/update`,{ id:_id,email:email,name:name})
      .then(({ data }) => {
        if (data.status === "success") {
          commit("updateDataEmployee", data);
        }
      })
      .catch(({ response }) => {
        console.log(response);
        // context.commit(SET_ERROR, response.data.errors);
      });
    },
    DeleteDataEmployee({ commit }, id) {
      ApiService.delete(`users/delete/${id}`)
        .then(({ data }) => {
          if (data.status === "success") {
            commit("deleteDataEmployee", id);
          }
        })
        .catch(({ response }) => {
          console.log(response);
          // context.commit(SET_ERROR, response.data.errors);
        });
    },
    getDataEmployee({ commit }) {
      ApiService.get("users")
        .then(({ data }) => {
          if (data.status === "success") {
            commit("getDataEmployee", data.data);
          }
        })
        .catch(({ response }) => {
          console.log(response);
          // context.commit(SET_ERROR, response.data.errors);
        });
    },
  },
  modules: {},
  getters: {
    getDataEmployee(state) {
      return state.dataEmployee;
    },
  },
});
