<template>
 	<header>
 		<h1 v-on:click="changeTitle">{{title}}</h1>
 	</header>
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
      /*title1:"Vue Demo"*/
    }
  },
  methods:{
  	changeTitle:function(){
  		// this.title = "你好Henry";
  		/*传对应参数传给父级*/
  		/*注册事件 第一个是自定义事件名  第二个及以后的参数都是数据*/
  		this.$emit("sbqEventName",{a:"Wangniuniu",b:"niuniu"});
  	}
  },
  	/*声明周期钩子函数*/
  	/*beforeCreate(){
  		alert("在页面创建之前还没有创建");
  	},
  	created(){
  		alert("开始创建页面但页面还没显示");
  	},
  	beforeMount(){
  		alert("页面创建完毕，但页面还未显示");
  	},
  	mounted(){
  		alert("执行你此方法页面显示");
   	},
   	beforeUpdate(){
   		alert("页面更改之前");
   	},
   	updated(){
   		alert("页面更改");
   	}*/
    
  
}
</script>
<style scoped>
	header{
		background:grey;
		padding: 10px;
	}
	h1{
		color: white;
		text-align: center;
	}
</style>

