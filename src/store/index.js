import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    lastId(state) {
      return state.tasks.length ?
        state.tasks[state.tasks.length - 1].id :
        0;
    }
  },
  mutations: {
    ADD_TASKS(state, payload) {
      state.tasks.push({
        id: payload.taskId,
        name: payload.taskName,
        date: payload.taskDate,
        done: payload.taskState,
      })
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    },
    REMOVE_TASKS(state, payload) {
      state.tasks = state.tasks.filter(task => task.id !== payload.id);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    },
    CHANGE_STATE(state, payload) {
      for (let i in state.tasks) {
        if (state.tasks[i].id === payload.id) {
          state.tasks[i].done = 1;
        }
      }
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    },
  },
  actions: {},
  modules: {}
});