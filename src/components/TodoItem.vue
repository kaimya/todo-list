<template>
  <div class="col-11 mt-3">
    <div class="card">
      <div class="row p-3 align-items-center">
        <div class="col-7" :class="{ taskCompleted: todo.done }" @dblclick="todo.editToggle = !todo.editToggle">
          <input type="text" v-model="todo.task" class="form-control" v-if="todo.editToggle" @keyup.enter="editTodo(todo)" />
          <span v-else>{{ todo.task }}</span>
        </div>
        <div class="col text-right">
          <button class="btn btn-success mr-3">
            <i class="material-icons mt-1" @click="completeTodo(index)">check</i>
          </button>
          <button class="btn btn-danger" @click="delTodo(index)">
            <i class="material-icons mt-1">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  data: () => ({
    editToggle: false
  }),
  methods: {
    completeTodo(index) {
      this.$store.commit("completeTodo", index);
    },
    delTodo(index) {
      this.$store.commit('delTodo', index);
     
    },
    editTodo(todo) {
      this.$store.commit("editTodo",todo);
     
    }
  }
};
</script>

<style scoped></style>
