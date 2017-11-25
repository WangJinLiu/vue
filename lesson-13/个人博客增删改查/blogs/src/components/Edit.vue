<template>
  <div class="blog marg">
    <div class="container">
      <h2 class="text-white bg-dark p-3">添加博客</h2>
      <form>
        <div class="form-group">
          <label for="">博客标题</label>
          <input type="text" class="form-control" v-model="blog.title">
        </div>
        <div class="form-group">
          <label for="">博客内容</label>
          <textarea name="" id="" cols="30" rows="10" v-model="blog.content" class="form-control"></textarea>
          <br>
          <div id="checkboxes">

            <div class="form-check">
              <label class="form-check-label mr-3">
                <input type="checkbox" class="form-check-input" value="Vue.js" v-model="blog.categories">
                Vue.js
              </label>
              <label class="form-check-label mr-3">
                <input type="checkbox" class="form-check-input" value="Node.js" v-model="blog.categories">
                Node.js
              </label>
              <label class="form-check-label mr-3">
                <input type="checkbox" class="form-check-input" value="React.js" v-model="blog.categories">
                React.js
              </label>
              <label class="form-check-label mr-3">
                <input type="checkbox" class="form-check-input" value="Angular4" v-model="blog.categories">
                Angular4
              </label>
            </div>
            <div class="form-group" >
              <label for="">作者：</label>
              <select class="form-control" v-model="blog.author">
                <option  v-for="author in authors" >
                  {{author}}
                </option>
              </select>
            </div>
            <button v-on:click.prevent="post">确认修改</button>


          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'blog',
    data () {
      return {
        blog:{
          title:'',
          content:'',
          categories:[],
          author:''
        },
        submited:false,
        authors:["Henny","many","Emmiy"],
        id:this.$route.params.id

      }
    },
    methods:{
      post:function () {
        this.$http.patch("http://localhost:3000/blog/" + this.id,{title:this.blog.title,body:this.blog.content,userId:1}).then( (res) => {
          console.log(res);
          this.submited = true;
          this.$router.push({path:"/"});



        });

      }
    },
    created(){
      this.$http.get("http://localhost:3000/blog/" + this.id).then((res) => {
        console.log(res);
        this.blog.title = res.body.title;
        this.blog.content = res.body.body;




      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    background: grey;
  }
  .marg{
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>
