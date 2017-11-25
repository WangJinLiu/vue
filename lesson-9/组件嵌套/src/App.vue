<!-- 跟组件 -->
<!-- template:我们需要用到的模板，模板中有且只能有一个跟标签 -->
<template>
  <div id="app">
    <sbqusers></sbqusers>
  </div>
</template>
<!-- 

  script:标签中囊括的是所有的属性和方法
  export default{}:对外公开当前文件可被其他文件引入
  name：给当前组件起名，此名字可以在其他组件中以标签的形式调用
  components:承载所有当前组件需要依赖的其他组件

 -->
<script>
/*import HelloWorld from './components/HelloWorld'*/
/*引入局部组件*/
import Users from './components/Users'

export default {
  name: 'app',
  components:{
    /*要和上面sbqusers标签名一致 第二个参数引入的组件名*/
   "sbqusers":Users
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>
<!-- 
  组件嵌套至少两个组件（包括根组件）
  全局组件：需要在main.js中注册，注册后可以在任何有关联的组件中使用
  局部组件：哪个组件中引入，就在哪个组件中使用
  嵌套流程：
    1.设计组件内容
    2.在引入组件中<app.vue>,script 里import 上方组件
    3.在引入组件中<app.vue>, export 里 components进行注册
    4.在引入组件中template中<app.vue>，进行使用<sbqusers></sbqusers>
  


 -->

