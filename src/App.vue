<template>
  　　　<div id="app" class="container mt-5">
    <!-- <notifications group="foo" /> -->
   <add-task @addTodo="addTodo"></add-task>
    <div class="row justify-content-center mt-3">
      <!-- <div class="col-11 mt-3" v-for="(todo, index) in todos" :key="index">
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
      </div> -->
     <todo-item  v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" @delTodo="delTodo" @completeTodo="completeTodo" @editTodo="editTodo"></todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import AddTask from './components/AddTask.vue';
export default {
  name: 'App',
  components: {
    TodoItem,
    AddTask
  },
  data() {
    return {
      todos: []
    }

  },
  methods: {
    addTodo(task) {
      this.todos.push({ task, done: false ,editToggle:false});
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
