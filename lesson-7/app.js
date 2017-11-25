new Vue({
	el:"#vue-app",
	data:{
		colors:["red","hotpink","lightgreen"],
		users:[
			{name:"Hnjffeijg",age:30},
			{name:"Hn",age:30},
			{name:"Hnjf",age:33},
			{name:"Hnjff",age:36}

		]
	
	
	},
	
	/*只有变化的才会动*/
	computed:{
	

	}
});
/*
	v-for用于遍历数组和对象
	in:是变量和属性 的分割线
	变量：随便起名
	属性：一定来字data对象
	数组：遍历时，默认传的值为数组元素，第二个值为下标
	对象：一值val，二值key

	
*/
