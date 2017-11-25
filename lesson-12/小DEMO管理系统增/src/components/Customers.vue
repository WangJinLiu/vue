<template>
  <div id="customers" class="container">
    <h1 class="page-header text-muted">用户管理系统</h1>
    <br>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(customer,index) in customers">
        <td>{{customer.name}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td class="btn m-1 rounded btn-light border text-dark" v-on:click="say(index)">查看详情</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'customers',
    data(){
      return {
        customers:[]
      }
    },
    methods:{
      say:function (i) {

        this.$http.get("http://localhost:3000/users").then((res) =>{
            var a =  res.body[i].id;
            this.$http.get("http://localhost:3000/users/"+a).then((res) =>{
              console.log(res);
            });
        })

      }
    },
    /*请求url数据安装vue-resource*/
    created(){
      this.$http.get("http://localhost:3000/users").then((res) =>{
        console.log(res);
        this.customers = res.body;
      })
    }

  }
</script>
