<template>
  <div id="AddUser">
    <div class="container">
      <h1 class="text-muted">添加用户</h1>
      <br>
      <form action="" v-on:submit="addCustomer">
        <div class="form-group">
          <label for="exampleInputEmail1">姓名</label>
          <input type="text" v-model="customer.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">电话</label>
          <input type="text" v-model="customer.phone" class="form-control" id="exampleInputPassword1" placeholder="phone">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">邮箱</label>
          <input type="email" v-model="customer.email" class="form-control" id="exampleInputPassword1" placeholder="email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">学历</label>
          <input type="text" v-model="customer.education" class="form-control" id="exampleInputPassword1" placeholder="education">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">毕业学校</label>
          <input type="text" v-model="customer.graduationschool" class="form-control" id="exampleInputPassword1" placeholder="graduationschool">
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">职业</label>
          <input type="text" v-model="customer.profession" class="form-control" id="exampleInputPassword1" placeholder="profession">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">个人简历</label>
          <textarea v-model="customer.profile" class="form-control" rows="10"></textarea>
        </div>
        <button class="btn btn-primary btn-block" type="submit">添加</button>
      </form>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'AddUser',
    data(){
      return {
        customer:{}
      }

    },
    methods:{
      addCustomer:function (e){
        e.preventDefault();
        if(!this.customer.name || !this.customer.phone || !this.customer.email || !this.customer.education || !this.customer.graduationschool || !this.customer.profession || !this.customer.profile ){
          console.log("请输入对应内容");
        }else{
          let newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            education:this.customer.education,
            graduationschool:this.customer.graduationschool,
            profession:this.customer.profession,
            profile:this.customer.profile,

          };
          this.$http.post("http://localhost:3000/users",newCustomer).then((res) =>{
            /*console.log(res);*/
            /*路由跳转 有r*/
            this.$router.push({path:"/",query:{alert:"用户添加成功!"}});
          });
        }

      }
    }


  }
</script>
