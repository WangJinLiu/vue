new Vue({
	el:"#vue-app",
	data:{
		a:0,
		b:0,
		age:20
	
	},
	methods:{
		/*addToA:function(){
			console.log(111);
			return this.a + this.age;
		},
		addToB:function(){
			console.log(4854);
			return this.b + this.age;
		}
*/
	},
	/*只有变化的才会动*/
	computed:{
		addToA:function(){
			console.log(111);
			return this.a + this.age;
		},
		addToB:function(){
			console.log(4854);
			return this.b + this.age;
		}

	}
});
/*
	computed计算属性
	computed:计算属性和方法methods方法使用方式极度相似
	使用场景：处理频繁调用方法的时候<搜索>，建议使用计算属性
	使用规则：计算属性，在调用的时候，不能加方法()


*/
