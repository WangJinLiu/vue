<!-- 跟组件 -->
<!-- template:我们需要用到的模板，模板中有且只能有一个跟标签 -->
<template>
  <div id="app">
     <ul>
      <!-- 路由标签 -->
       <li><router-link to="/">home</router-link></li>
       <li><router-link to="/test">test</router-link></li>
     </ul>
      <router-view></router-view>
  </div>
</template>
<!-- 

  script:标签中囊括的是所有的属性和方法
  export default{}:对外公开当前文件可被其他文件引入
  name：给当前组件起名，此名字可以在其他组件中以标签的形式调用
  components:承载所有当前组件需要依赖的其他组件

 -->
<script>

export default {
  name: 'app',
  data(){
    
    return{

    }

    
  }
}
</script>

 <!-- scoped 域 -->
<style scoped>

</style>
