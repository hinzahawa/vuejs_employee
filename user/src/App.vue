<template>
<div>
  <EmployeeTable/>
  <!-- <About /> -->
</div>

</template>

<script>
import EmployeeTable from "./components/EmployeeTable.vue";
// import About from './components/About.vue';

export default {
  name: "App",
  components: {
    EmployeeTable
    // About
  },
  data: () => ({
    //
  }),
};
</script>
