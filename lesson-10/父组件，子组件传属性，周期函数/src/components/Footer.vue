<template>
 	<footer>
 		<h1>{{title1}} {{title}}</h1>
 	</footer>
</template>

<script>

export default {
  props:{
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      title1:"Vue Footer"
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