// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*es6语法*/
import Vue from 'vue'
/*引入路由模块*/
import VueRouter from 'vue-router'
/*1.引入请求模块*/
import VueResource from 'vue-resource'
import App from './App'
import Routes from './routes'
Vue.config.productionTip = false
/*使用路由模块*/
Vue.use(VueRouter)
/*使用请求模块*/
Vue.use(VueResource)
/*配置路由*/
const router = new VueRouter({

	routes:Routes,
	/*干掉导航栏#*/
	mode:"history"
})
/*在Vue实例中使用路由*/
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})