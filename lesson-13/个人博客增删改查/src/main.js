// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import Routes from './routers'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
/*自定义全局指令 在ShowBlogs 中定义成了全局的*/
/*Vue.directive('rainbow',{
  /!*钩子函数*!/
  bind(el,binding,vnode){
    el.style.color ="#" + Math.random().toString(16).slice(2,8);

  }
});*/
/*Vue.directive("theme",{
  bind(el,binding,vnode){
    /!*自定义指令=后面的用binding.value获得*!/
   /!* if(binding.value == 'wide'){
      el.style.maxWidth = "1260px";

    }else if(binding.value == "narrow"){
      el.style.maxWidth = "560px";

    }*!/
   /!*自定义指令：后边的用binding.arg获得*!/
    if(binding.arg == "column"){
      el.style.background = '#';

    }

  }
})*/
/*自定义过滤器 */
/*Vue.filter("to-uppercase",function (value) {
  /!*这个value就是前面自定义过滤器前面的内容*!/
  return value.toUpperCase();


})
Vue.filter("snippet",function (value) {
  return value.slice(0,100) + "...";

})*/
/*创建路由*/
const router = new VueRouter({
  /*注意是routes*/
  routes:Routes,
  mode:"history"

})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  /*这里是router*/
  router:router
})
