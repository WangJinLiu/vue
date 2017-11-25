<!-- 跟组件 -->
<!-- template:我们需要用到的模板，模板中有且只能有一个跟标签 -->
<template>
  <div id="app">
    <app-header></app-header> 
    <app-users></app-users> 
    <app-footer></app-footer>   
  </div>
</template>
<!-- 

  script:标签中囊括的是所有的属性和方法
  export default{}:对外公开当前文件可被其他文件引入
  name：给当前组件起名，此名字可以在其他组件中以标签的形式调用
  components:承载所有当前组件需要依赖的其他组件

 -->
<script>
/*引入局部组件*/
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './components/Users'

export default {
  name: 'app',
  /*注册*/
  components:{
    "app-header":Header,
    "app-footer":Footer,
    "app-users":Users
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

 <!-- scoped 域 -->
<style scoped>

</style>
