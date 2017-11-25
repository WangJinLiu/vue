<template>
  <div id="customers" class="container">
    <Alert v-bind:message="alert"></Alert>
    <h1 class="page-header text-muted">用户管理系统</h1>
    <br>
    <input type="text" class="form-control" placeholder="根据姓名搜索" v-model="filterInput">
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
      <tr v-for="customer in filterCustomers(customers,filterInput)">
        <td>{{customer.name}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td class="btn m-1 rounded btn-light border text-dark">
          <!--得根据路由参数把id传到   CustomerDetail.vue中  那边用-->
          <router-link v-bind:to="/customerDetail/+customer.id">查看详情</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
  export default {
    name: 'customers',
    data(){
      return {
        customers:[],
        filterInput:"",
        alert:""
      }
    },
    methods:{
      fetchCustomers:function () {
        this.$http.get("http://localhost:3000/users").then((res) =>{
          console.log(res);
          this.customers = res.body;
        })

      },
      filterCustomers:function (customers,filterInput) {
        /*es6*/
        return  customers.filter(function (item) {
          return item.name.match(filterInput);
          /*if (item.name == filterInput) {
            return item;
          }else{
            return item;
          }*/



        });

      }
    },
    /*请求url数据安装vue-resource*/
    created(){
      /*在页面展示之前*/

      /*this.$route.query.那边跳转自己定义的属性名*/
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;

      }
      this.fetchCustomers();
    },
    /*注册组件*/
    components:{
      Alert
    }


  }
</script>
