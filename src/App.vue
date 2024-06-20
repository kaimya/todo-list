<template>
  　　　<div id="app" class="container mt-5">
    <!-- <notifications group="foo" /> -->
    <div class="row justify-content-center">
      <div class="col-11">
        <img src="./assets/logo-w.png" class="d-block mx-auto">
        <label>新タスク</label>
        <input type="text" class="form-control" v-model="task">
        <button class="btn btn-dark mt-3" @click="addTodo">タスク作成</button>
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-11 mt-3" v-for="(todo, index) in todos" :key="index">
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
    </div>
  </div>
</template>

<script>
// import TodoItem from './components/TodoItem.vue';
// import AddTask from './components/AddTask.vue';
export default {
  name: 'App',
  components: {
    // TodoItem,
    // AddTask
  },
  data() {
    return {
      task: '',
      todos: []
    }

  },
  methods: {
    addTodo() {
      
      if (this.task == '') {
        return alert('タスクを入れてください。');
      }
      this.todos.push({ task: this.task, done: false ,editToggle:false});
      this.task = '';
    },
    delTodo(index) {
      if (confirm('削除しますか?')) {
        this.todos.splice(index, 1);
      }
    },
    completeTodo(index) {
      this.todos[index].done = true;
    },
    editTodo(todo) {
      todo.editToggle=false
      // this.$store.commit("editTodo", { todo: this.todo, index: this.index });
      // this.editToggle = false;
    }
  }
}

</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

label {
  color: white;
}

.card {
  border-radius: 1rem !important;
}
</style>
