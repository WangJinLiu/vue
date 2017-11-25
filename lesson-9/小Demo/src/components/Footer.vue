<template>
 	<footer>
 		<h1>{{title}}</h1>
 	</footer>
</template>

<script>

export default {
  data(){
    return{
      title:"Vue Footer"
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
	footer{
		background:lightgrey;
		padding: 10px;
	}
	h1{
		color: white;
		text-align: center;
	}
</style>