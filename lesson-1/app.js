new Vue({
	el:"#vue-app",
	data:{
		name:"王妞妞",
		job:"你猜",
		website:"http://www.thenewstep.com",
		websiteTag:'<a href="http://www.baidu.com">Baidu</a>'
	},
	methods:{
		/*es6*/
		// greet(){

		// }
		greet:function(value){
			/*这里的this就指向new的对象*/
			
			return "你好呀，你好呀"+value + this.name;
		}

	}
});
/*el:element(需要控制的标签元素)
  data:用于存储各个类型的数据 <array,object,string,number>
  methods:用于存储各种方法
  v-bind:用于绑定某个属性（指令）
  v-html:用于给某个标签绑定值为标签的属性
  ":":是v-bind的语法糖，和v-bind效果一样
*/