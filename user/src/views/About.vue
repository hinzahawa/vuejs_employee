<template>
<v-app>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{counter}}</h2>
    <br>
    <button @click="addCount">Chang</button>
  </div>
  </v-app>
</template>

<script>
export default {
  name:"about",
  data() {
    return {
      count:0
    }
  },
  methods:{
    addCount(){
      console.log('sdf');
      this.count++
    }
  },
  created(){
    console.log('create');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated(){
    console.log('updated');
  },
  beforeDestroy(){
    console.log('beforeDestroy');
  },
  destroyed(){
    console.log('destroyed');
  }
}
</script>