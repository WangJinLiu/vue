
import Vue from 'vue'
import VueRouter from 'vue-router'
/*引入*/
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import User from './components/User'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
  routes:[{path:"/",component:Customers},
          {path:"/about",component:About},
          {path:"/user",component:User}],

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
