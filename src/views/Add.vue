<template>
  <div class="about">
    <form v-on:submit.prevent="addTask()">
      <div class="form-group">
        <label for="name">Nome da Tarefa:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="date">Data:</label>
        <input type="date" class="form-control" id="date" v-model="date" />
      </div>
      <button type="submit" class="btn btn-primary">Adicionar Tarefa</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      date: ""
    };
  },
  methods: {
    created: function() {
      if (localStorage.getItem("tasks")) {
        this.$store.state.tasks = JSON.parse(localStorage.getItem("tasks"));
      }
    },
    getLastId() {
      return this.$store.getters.lastId;
    },
    addTask() {
      this.$store.commit("ADD_TASKS", {
        taskId: this.getLastId() + 1,
        taskName: this.name,
        taskDate: this.date,
        taskState: 0
      });
      alert("Tarefa adicionada!");
      this.name = "";
      this.date = "";
    }
  }
};
</script>
