
import Vue from 'vue'
import VueRouter from 'vue-router'
/*引入*/
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import AddUser from './components/AddUser'
import CustomerDetail from './components/CustomerDetail'
import Edit from './components/Edit'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
  routes:[{path:"/",component:Customers},
          {path:"/about",component:About},
          {path:"/user",component:AddUser},
          {path:"/customerDetail/:id",component:CustomerDetail},
          {path:"/edit/:id",component:Edit}],

  mode:"history",
  base:__dirname
})


new Vue({
  /*使用上面的router*/
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
