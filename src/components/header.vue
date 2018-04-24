<template>
<b-navbar id="header" toggleable="sm" type="dark" variant="dark">
  <b-navbar-brand href="#">
      <img src="/static/images/logo.png">   
  </b-navbar-brand>

  <b-navbar-brand  v-if="title" class="collapse d-md-block">{{title}}</b-navbar-brand>

  <b-navbar-toggle target="header_collapse"></b-navbar-toggle>
  <b-collapse is-nav id="header_collapse">
    <b-navbar-nav class="ml-auto" >
      <b-nav-item href="#">平台配置</b-nav-item>
      <b-nav-item href="#">服务发现</b-nav-item>
      <b-nav-item href="#">业务监控</b-nav-item>
      <b-nav-item><icon name="sign-out-alt" class="text-secondary"></icon>
           <router-link to="/login"><a class="d-lg-none d-xl-none d-md-none d-sm-none text-secondary">注销</a></router-link>        
        </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>
<script>
export default {
 props:["title"]
}
</script>
