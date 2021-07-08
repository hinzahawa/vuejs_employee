<template>
<div>
  <EmployeeTable />
</div>

</template>

<script>
import EmployeeTable from "./components/EmployeeTable.vue";

export default {
  name: "App",
  components: {
    EmployeeTable,
  },
  data: () => ({
    //
  }),
};
</script>
