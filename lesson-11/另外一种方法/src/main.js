
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'

Vue.config.productionTip = false
/*使用路由模块*/
Vue.use(VueRouter)
/*配置路由*/
const router = new VueRouter({
  /*配置路由地址等信息*/
  routes:[{path:"/",component:Customers},
          {path:"/about",component:About}],
  /*去掉浏览器url中的#*/
  mode:"history",

  base:__dirname
})


new Vue({
  /*使用上面的router*/
  router,
  template: `<div>
              <ul>
                <li><router-link to="/">主页</router-link></li>
                <li><router-link to="/about">关于</router-link></li>
              </ul> 
              <router-view></router-view>
              
            </div>`,
}).$mount("#app")
