<template>
  <div id="users">
    <div class="box">
    	<div class="topBox">
        <!-- 用父级组件里传过来的值应该遍历新属性,不是之前的属性名了 -->
    		<div v-for="user in users">
    			<p>{{user.name}}</p>
    			<p>{{user.email}}</p>
    		</div>
    	</div>
      <button v-on:click="deleteUser">删除用户</button>
    </div>
  </div>
</template>

<script>

export default {
  /*[]中的东西要和父组件中的属性名一样（写法一）*/
  /*props:["users"]*/
  /*规范的写法*/
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data(){
    return{
      
    }
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
  }
}
</script>
<!-- 

  属性传值  从父组件传值到子组件
  1.属性绑定<v-bind>2.自定义属性<users> 3.props 
  (在父组件中所对应的子组件的标签中自定义属性，属性值就是从父组件中传过来的值，在子组件中使用的时候要用属性名操作)
  传值&传引用
  引用：Object Array
  传值: String Number Boolean ...
  事件传值：从子组件传值到父组件
  1.注册事件<$emit> 2.绑定事件<v-on:自定义事件>
  3.实现方法及逻辑

 



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

