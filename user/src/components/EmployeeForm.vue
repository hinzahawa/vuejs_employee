<template>
  <div class="employee-form">
    <form @submit.prevent="handleSubmit">
      <label for="">name</label>
      <input ref="first" type="text" v-model="dataUser.name" />
      <br />
      <label for="">email</label>
      <input type="text" v-model="dataUser.email" />
      <br />
      <!-- <p v-if="error && submitting" class="error-message" >
        Please fill out all  require fields.
      </p> -->
      <!-- <p v-if="success" class="success-message" >
        Employee successfully add.
      </p> -->
      <button>Add Employee</button>
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
      this.dataUser.email =''
      this.dataUser.name =''
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