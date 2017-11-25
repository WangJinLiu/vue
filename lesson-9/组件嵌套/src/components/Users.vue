<template>
  <div id="users">
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

