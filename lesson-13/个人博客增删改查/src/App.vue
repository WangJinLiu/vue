<template>

  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark  bag mb-3 p-4 fixed-top">
      <div class="container">

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active mr-5 ">
              <router-link to="/" class="text-white"><span class="mm">主页</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="text-white"><span class="mm">添加博客</span></router-link>
            </li>
          </ul>
        </div>
      </div>

    </nav>



      <!--<add-blog></add-blog>-->
     <!-- <show-blogs></show-blogs>-->
    <router-view></router-view>
    <div class="navbar navbar-expand-md navbar-dark bag p-4 fixed-bottom text-white">
      <div class="container">
        <p class="text-center">欢迎联系我，我是妞妞</p>
      </div>
    </div>
  </div>
</template>

<script>
/*import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'*/

export default {
  name: 'app',
  /*components: {
    AddBlog,ShowBlogs
  }*/
}
</script>

<style scoped>
  .bag {
    background: black;

}
  .mm{
    display: inline-block;
  }
  .mm:hover{
    color:red!important;
    transform:rotate(30deg);
    transition: 2s linear;


  }
</style>
