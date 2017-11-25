new Vue({
	el:"#vue-app",
	data:{
		age:18,
		x:0,
		y:0
	
	},
	methods:{
		addAge:function(value){
			// console.log("加一岁");
			// this.age++;
			this.age+=value;
		},
		subtractAge:function(value){
			// this.age--;
			this.age-=value;
			// console.log("减一岁");
		},
		moveXY:function(event){
			// console.log("鼠标正在移动中");
			// console.log(event);
			this.x = event.offsetX;

			this.y = event.offsetY;

		},
		stopPropagation:function(event){
			// event.stopPropagation();

		},
		alert:function(){
			alert(515156);
		},
		logName:function(){
			console.log("名字");
		},
		logAge:function(){
			console.log("年龄");
		}

	}
});

/*
	事件：用于按钮触发时处理逻辑的方法
	v-on:给某个事件<click>绑定到某个元素上
	"@":语法糖，同v-on
	事件值:可以是对应的方法，也可以是具体的属性
	优先级：首先找方法，如果没有方法，那么找属性
	事件修饰符：
	stop：阻止冒泡事件
	once:事件只生效一次
	prevent:阻止默认事件



*/
