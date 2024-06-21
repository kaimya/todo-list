<template>
  　　　<div id="app" class="container mt-5">
    <!-- <notifications group="foo" /> -->
   <add-task></add-task>
    <div class="row justify-content-center mt-3">

     <todo-item  v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" ></todo-item>
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
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  data() {
    return {
     
    }

  },
  methods: {
    // addTodo(task) {
    //   this.todos.push({ task, done: false ,editToggle:false});
    // },
    // delTodo(index) {
    //   if (confirm('削除しますか?')) {
    //     this.todos.splice(index, 1);
    //   }
    // },
    // completeTodo(index) {
    //   this.todos[index].done = true;
    // },
    // editTodo(todo) {
    //   todo.editToggle=false
     
    // }
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
