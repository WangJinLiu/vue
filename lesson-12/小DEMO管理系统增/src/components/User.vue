<template>
  <div id="user">
    <div class="container">
      <h1 class="text-muted">添加用户</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">姓名</label>
          <input type="text" ref="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">电话</label>
          <input type="text" ref="phone" class="form-control" id="exampleInputPassword1" placeholder="phone">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">邮箱</label>
          <input type="email" ref="email" class="form-control" id="exampleInputPassword1" placeholder="email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">学历</label>
          <input type="text" ref="education" class="form-control" id="exampleInputPassword1" placeholder="education">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">毕业学校</label>
          <input type="text" ref="graduationschool" class="form-control" id="exampleInputPassword1" placeholder="graduationschool">
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">职业</label>
          <input type="text" ref="profession" class="form-control" id="exampleInputPassword1" placeholder="profession">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">个人简历</label>
          <textarea ref="profile" class="form-control"></textarea>
        </div>
        <button v-on:click="click" class="btn btn-primary">Submit</button>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'user',
    data(){
      return {

      }

    },
    methods:{
      click:function(){
        var a = {"name":this.$refs.name.value,"phone":this.$refs.phone.value,
          "email":this.$refs.email.value,"education":this.$refs.education.value,"graduationschool":this.$refs.graduationschool.value,
        "profession":this.$refs.profession.value,"profile":this.$refs.profile.value};
        this.$http.post("http://localhost:3000/users",a).then(function (res) {
          console.log(res);

        })
        window.location.href="/";
      }
    }


  }
</script>
