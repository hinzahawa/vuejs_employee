<template>
  <v-app>
  <div class="employee-table">
    <EmployeeForm />
    <v-simple-table v-if="dataEmployee.length">
      <template v-slot:default>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(e, idx) in dataEmployee" :key="e._id">
            <td>{{ idx + 1 }}</td>
            <td v-if="checkEditMode === e._id">
              <v-text-field
                placeholder="Placeholder"
                outlined
                v-model="e.name"
              ></v-text-field>
              <!-- <input type="text" v-model="e.name" /> -->
            </td>
            <td v-else>{{ e.name }}</td>
            <td v-if="checkEditMode === e._id">
              <v-text-field
                placeholder="Placeholder"
                outlined
                v-model="e.email"
              ></v-text-field>
            </td>
            <td v-else>{{ e.email }}</td>
            <td v-if="checkEditMode === e._id">
              <v-btn depressed color="primary" @click="edit(e)">Save</v-btn>
              <v-btn depressed color="error" @click="cancel()">Cancel</v-btn>
            </td>
            <td v-else >
              <v-btn depressed color="warning" @click="editMode(e)">Edit</v-btn>
              <v-btn depressed color="error" @click="deleteUser(e._id)">Delete</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <h2 v-else>no data user</h2>
  </div>
  </v-app>
</template>

<script>
import EmployeeForm from "./EmployeeForm.vue";

export default {
  name: "EmployeeTable",
  components: {
    EmployeeForm,
  },
  data() {
    return {
      checkEditMode: null,
    };
  },
  methods: {
    editMode(data) {
      this.checkEditMode = data._id;
    },
    edit(data) {
      this.$store.dispatch("EditDataEmployee", data);
      this.checkEditMode = null;
    },
    deleteUser(id) {
      this.$store.dispatch("DeleteDataEmployee", id);
    },
    cancel() {
      this.$store.getters.getDataEmployee;
      this.checkEditMode = null;
    },
  },
  computed: {
    dataEmployee() {
      return this.$store.getters.getDataEmployee;
    },
  },
  created() {
    this.$store.dispatch("getDataEmployee");
  },
};
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
#table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
.empty-table {
  font-weight: bold;
  font-size: 1.3rem;
  background-color: coral;
}

td {
  text-align: left;
}
.tools{
padding-top: 12px;
}
</style>
