<template>
  <div class="employee-form">
    <form>
    <v-text-field
      v-model="dataUser.name"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="dataUser.email"
      label="E-mail"
      required
    ></v-text-field>
    <v-btn
      class="mr-4"
      @click="handleSubmit"
    >
      Add
    </v-btn>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataUser: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // const id = this.$store.getters.getDataEmployee[this.$store.getters.getDataEmployee.length-1].id+1
      // const data = {...this.dataUser, _id}
      this.$store.dispatch("setDataEmployee", this.dataUser);
      this.dataUser.email = "";
      this.dataUser.name = "";
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
input {
  margin-bottom: 2rem;
}
[class*="-message"] {
  font-weight: bold;
}
.error-message {
  background-color: red;
  color: black;
}
.success-message {
  background-color: greenyellow;
  color: black;
}
</style>
