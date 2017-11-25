<template>
  <div class="blog marg">
   <div class="container">
     <h2 class="text-white bg-dark p-3">添加博客</h2>
     <form v-if="! submited">
       <div class="form-group">
         <label for="">博客标题</label>
         <input type="text" class="form-control" v-model="blog.title" required>
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
             <select name="" class="form-control" v-model="blog.author">
               <option  v-for="author in authors" >
                 {{author}}
               </option>
             </select>
           </div>
           <button v-on:click.prevent="post">添加博客</button>


         </div>
       </div>
     </form>
     <div v-if="submited" class="d-block bg-success text-white p-1 mb-4">
       <h3 >您的博客发送成功</h3>
     </div>
     <div id="preview" class="card" v-if="submited" >
       <h3 class="card-header text-muted">博客总览</h3>
       <div class="card-body">
         <p class="card-title">博客标题：
           {{blog.title}}
         </p>
         <p class="card-text d-inline-block">博客内容：</p>
         <p class="card-body d-inline-block border w-100 h-100 content">{{blog.content}}</p>
         <p class="card-text">博客分类:</p>
         <ul class="list-unstyled d-inline-block">
           <li v-for="category in blog.categories" class="d-inline-block mr-3">
             {{category}}
           </li>
         </ul>
         <p>作者：{{blog.author}}</p>
       </div>

     </div>
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
        authors:["Henny","many","Emmiy"],
        submited:false

      }
    },
    methods:{
      post:function () {
        this.$http.post("http://localhost:3000/blog",{title:this.blog.title,body:this.blog.content,userId:1}).then( (res) => {
//          console.log(res);
          this.submited = true;
          this.$router.push({path:"/"});



        });

      }
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
