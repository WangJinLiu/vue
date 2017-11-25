new Vue({
	el:"#vue-app",
	data:{
		judge:false,
		color:false,
		color1:false
	
	},
	methods:{
		// addToA:function(){
		// 	return this.a + this.age;
		// },
		// addToB:function(){
		// 	// console.log(4854);
		// 	return this.b + this.age;
		// }

	},
	/*只有变化的才会动*/
	computed:{
		compClasses:function(){
			return {
				color:this.color,
				color1:this.color1
			}
		}

	}
});
/*
	动态css样式
	b-bind:class:用于绑定对应的样式对象（**一定是对象）
	class对象值：有两个值，分别为true & false
	注意：在对象中 key样式  value 属性
	经常改变样式，最好使用computed计算属性

*/
