<template>
  <div id="detail" class="container">
    <h1 class="display-4 text-muted">
      {{customer.name}}
      <span class="float-right">
        <router-link class="btn btn-success" v-bind:to="/edit/+customer.id">编辑</router-link>
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <router-link calss="btn btn-link" to="/">返回主页</router-link>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val,key) in customer">
        <strong>{{key}}:</strong>{{val}}
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'detail',
    data(){
      return{
        /*获取id 这个id要写自己定义的路由参数 $route  没r*/
        /*id:this.$route.params.id*/
        customer:{}

      }
    },
    methods:{
      fetchCustomer:function (id) {
        this.$http.get("http://localhost:3000/users/"+id).then((res) =>{
          console.log(res);
          this.customer = res.body;
        })

      },
      /*删除*/
      deleteCustomer:function (id) {
        /*更新用put*/
        this.$http.delete("http://localhost:3000/users/"+id).then((res) =>{
          this.$router.push({path:"/",query:{alert:"用户删除成功!"}});
        })

      }
    },
    /*请求url数据安装vue-resource */
    created(){
      this.fetchCustomer(this.$route.params.id);
    }

  }
</script>
