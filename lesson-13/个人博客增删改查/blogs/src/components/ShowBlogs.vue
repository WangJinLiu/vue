<template>
  <div id="show-blogs" v-theme:column="'wide'" class="marg">
    <div class="adver">
      <a href="https://weibo.com/jasonzhangjie?refer_flag=1001030101_&ssl_rnd=1510411530.2914"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015983&di=d22953191ffbc2f6ef3430bebea32007&imgtype=jpg&er=1&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20165_11_14%2Fa7548j83840125788596.jpg" alt=""></a>
    </div>
    <div class="container">
      <h2 class="card-body bg-dark text-white">博客总览</h2>
      <input type="text" PLACEHOLDER="搜索" v-model="search" class="form-control">
      <div class="single-blog card m-4 bg mb-5" v-for="content in filteredBlogs">

        <!-- | 是一个管道 用来自定义过滤器  -->

        <h2 v-rainbow class="card-header bg1">{{content.title | to-uppercase}}</h2>
        <article class="card-body">
          {{content.body | snippet}}
        </article>
        <!--<button class="btn" v-on="click">详情</button>-->
        <router-link class="card-body" v-bind:to="/details/ + content.id">查看详情</router-link>



      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'show-blogs',
    data() {
      return {
        contents:[],
        search:''
      }
    },
    created(){
      this.$http.get("http://localhost:3000/blog").then((res) => {
        this.contents= res.body;
        /*data.body.slice(0,10);*/

      } )
    },
    computed:{
      /*计算属性 注意调用的时候不能加括号*/
      filteredBlogs:function(){
        /*es6里面的新语法过滤*/
        /*filter的callback函数需要返回布尔值true或false*/
        return this.contents.filter((blog) =>{
          return blog.title.match(this.search);
          /*里面这个return的是真和假，如果是真的则外边的filter方法会返回对应的数据 如果是假的filter会返回所有数据*/
        })
      }
    },
    /*自定义过滤器*/
    filters:{
      "to-uppercase":function (value) {
        return value.toUpperCase();

      },
      "snippet":function (value) {

          return value.slice(0,100) + "...";



      }


    },
    /*自定义指令*/
    directives: {
      'rainbow': {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      },
      "theme": {
        /*bind(el,binding,vnode )
        {
          /!* 自定义指令=后面的用binding.value获得**!/
          if(binding.value == 'wide') {
            el.style.maxWidth = "1260px";

          } else if (binding.value == "narrow") {
            el.style.maxWidth = "560px";

          }
          /!*自定义指令：后边的用binding.arg获得*!/
          if (binding.arg == "column") {
            el.style.background = 'red';

          }

        }*/
      }
    },
    methods:{

    }

  }
</script>

<style scoped>
  .bg{
    background: #e0e0e0;
  }
  .bg1{
    background: #8e8e8e;
  }
  .adver{
    position: fixed;
    top: 20vh;
    left: 0px;
    width: 10vw;
    height:30vh;
    background: grey;
    text-align: center;
    line-height: 100px;
    border:1px solid white;
    z-index: 2;
  }
  .adver img{
   width: 100%;
    height:100%;
  }
  .marg{
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>
