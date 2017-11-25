// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*es6语法*/
import Vue from 'vue'
import App from './App'
/*import Users from './components/Users'*/
/*这句话关系不大*/
Vue.config.productionTip = false
/*注册全局组件可以在任何组件中调用它*/
/*users 随便起的名*/
/*Vue.component("user",Users)*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


/*
	main.js整个项目的逻辑主文件
	index.html 整个项目的入口文件
	Vue实例：vue的实例化对象，包含el / tem / com
	temp:模板中可以写 HTML / 调用其他组件
	<App/> :代表模板要执行的组件文件，跟APP.vue中的name属性有关
	comp:组件组中要包含需要调用的组件名，例如上面模板调用了<App/> 那么组件组中就一定要包含App组件
	import:用于导入需要依赖的文件，例如上方组件组中，想要引入App组件，那么首先要使用import引入这个组建文件
	import .. from ..: import 后面是自己起的名字，form后面是组件的名字




*/
