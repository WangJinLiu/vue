var a = new Vue({
	el:"#vue-app-one",
	data:{
		title:"this is vue-app-one"
	},
	
	/*只有变化的才会动*/
	computed:{
		greet:function(){
			return "Hello App one"
		}

	}
});
var b = new Vue({
	el:"#vue-app-two",
	data:{
		title:"this is vue-app-two"

	},
	methods:{
		mm:function(){
			a.title = "ewrigjflwrigodsjojvwarmik" 
		}
	},
	/*只有变化的才会动*/
	computed:{
		greet:function(){
			return "Hello App two"
		}

	}
});

