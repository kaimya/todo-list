import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
  },
  mutations: {
    addTodo(state,task) {
      state.todos.push({ task, done: false ,editToggle:false});
    },
    delTodo(state,index) {
      if (confirm('削除しますか?')) {
        state.todos.splice(index, 1);
      }
    },
    completeTodo(state,index) {
      state.todos[index].done = true;
    },
    editTodo(state,todo) {
      todo.editToggle=false
    }
  },
  actions: {
  },
  modules: {
  }
})
