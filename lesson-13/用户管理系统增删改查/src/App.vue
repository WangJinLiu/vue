<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">用户管理系统</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto w-100">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item ml-auto">
              <router-link class="nav-link" to="/user">添加用户</router-link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>
