<template>

  <div id="details" class="marg">
    <div class="container">

      <div class="card">
        <h2 class="card-header bg-dark text-white">详情</h2>
        <div class="card-body">
          <ul class="list-unstyled">
            <!--遍历对象-->
            <li v-for="(value,key) in contents" class="m-2">
              <strong>{{key}}</strong>:{{value}}
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <router-link to="/" class="btn card-footer text-dark border">返回首页</router-link>
          <router-link v-bind:to="/edit/ + contents.id" class="btn card-footer text-dark float-right border">修改</router-link>
          <button type="button" class="card-footer text-dark float-right btn border mr-2" v-on:click="deletenew()">删除</button>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'details',
    components: {

    },
    data(){
      return {
        contents:{},
        id:this.$route.params.id
      }
    },
    created(){
      this.$http.get("http://localhost:3000/blog/"+this.id).then((res) => {
       /* console.log(res);*/
       this.contents = res.body;

      } )
    },
    /*删除功能*/
    methods:{
      deletenew:function () {
        this.$http.delete("http://localhost:3000/blog/"+this.id).then( (res) => {

          this.$router.push({path:"/"});
        })

      }
    }
  }
</script>

<style scoped>
  .marg{
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>
