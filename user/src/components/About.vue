<template>
  <div class="about">
    <h1>This is an about page asd</h1>
    <h2>{{counter}}</h2>
    <br>
    <button @click="add">Change</button>
    <br>
    <a v-bind:href="'/about'" >route</a>
    </div>
</template>

<script>
export default {
  name:"about",
  data() {
    return {
      counter:0
    }
  },
  watch:{
    counter(newValue,oldValue){
      console.log('oldValue',oldValue);
      console.log('newValue',newValue);
    }
  },
  methods:{
    add(){
      this.counter++
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