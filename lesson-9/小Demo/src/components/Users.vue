<template>
  <div id="users">
    <div class="box">
    	<div class="topBox">
    		<div v-for="user in data">
    			<p v-on:click="user.judge = !user.judge">{{user.name}}</p>
    			<p v-show="user.judge">{{user.text}}</p>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      data:[{name:"Miaojie1",text:"程序员",judge:false},{name:"Miaojie2",text:"程序员",judge:false},{name:"Miaojie3",text:"程序员",judge:false},{name:"Miaojie4",text:"程序员",judge:false},{name:"Miaojie5",text:"程序员",judge:false},{name:"Miaojie6",text:"程序员",judge:false}],
    }
  },
  methods:{
  }
}
</script>
<!-- 

  


 -->
 <style scoped>
   .box{
   	border: 1px solid white;
   	background: black;

   }
   .topBox{
   	margin-top: 12px;
   	margin: 0 auto;
   	width: 80%;
   	display: flex;
   	justify-content: space-around;
   	color:white;
   	flex-wrap: wrap;
   	text-align: center;
   }
   .topBox div{
   	width: 30%;
   	padding:60px 0;
   	border: 1px solid white;
   	margin: 12px;

   }
 </style>

