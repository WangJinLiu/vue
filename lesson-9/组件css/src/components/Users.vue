<template>
  <div id="users">
      <h1>Hello Users</h1>
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      users:["miaojie","binjie","gaojie"]
    }
  },
  methods:{
    
  }
}
</script>
<!-- 

  


 -->
 <style >
   h1{
    color: red;
   }
 </style>

