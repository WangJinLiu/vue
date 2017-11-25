new Vue({
	el:"#vue-app",
	data:{
		age:18,
		name:"Henry"
	
	},
	methods:{
		logName:function(){
			// console.log(this.$refs.name1.value);
			// this.name = this.$refs.name1.value;
			// console.log("名字");
		},
		logAge:function(){
			// console.log("年龄");
		}

	}
});
/*
	v-model:双向数据绑定的指令，应用于input,textarea,select(v-model的值要和data里的key值相同)
	ref:用于设置元素的唯一标识，通过$refs获取属性值


*/
