<template>
  <div class="row justify-content-center">
    <div class="col-11">
      <img src="./../assets/logo-w.png" class="d-block mx-auto" />
      <label>New Task</label>
      <input type="text" class="form-control" v-model="task" />
      <button class="btn btn-dark mt-3" @click="addTodo">Add New Task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data: () => ({
    task: ""
  }),
  methods: {
    addTodo() {
      if (this.task == "") {
        return alert("タスクを入力してください。");
      }
      // this.$store.commit('addTodo', { task: this.task, done: false });
      this.$store.commit("addTodo",this.task)
      this.task = "";
    }
  }
};
</script>

<style scoped></style>
