<template>
  <div class="home">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tarefa</th>
          <th scope="col">Data</th>
          <th scope="col">Finalizar</th>
          <th scope="col">Apagar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in this.$store.state.tasks" v-bind:key="task">
          <td>{{task.id}}</td>
          <td>{{task.name}}</td>
          <td>{{task.date}}</td>
          <td>
            <span v-if="task.done == 0">
              <button @click="changeState(task.id)">✔️</button>
            </span>
            <span v-else>Tarefa Feita</span>
          </td>
          <td>
            <button @click="removeTasks(task.id)">❌</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    created: function() {
      if (localStorage.getItem("tasks")) {
        this.$store.state.tasks = JSON.parse(localStorage.getItem("tasks"));
      }
    },
    removeTasks(idT) {
      let result = confirm("Apagar tarefa?");
      if (result) {
        this.$store.commit("REMOVE_TASKS", {
          id: idT
        });
      }
    },
    changeState(idT) {
      let result = confirm("Já finalizou a tarefa?");
      if (result) {
        this.$store.commit("CHANGE_STATE", {
          id: idT
        });
      }
    }
  }
};
</script>
