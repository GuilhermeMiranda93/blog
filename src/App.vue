<template>
  <div id="app">
  <!-- <router-link to="/contato">Contato</router-link>
  <router-link to="/post">Post</router-link>
  <router-link to="/">Home</router-link> -->

  <div class="boxContainer">
    <div class="boxLine">
      <Navbar></Navbar>
      <router-view></router-view>
      <!-- <Post></Post> -->
      <!-- <PostBlog></PostBlog> -->
      <SidebarWidget></SidebarWidget>
    </div>
  </div>
  <Foot></Foot>
</div>
</template>

<script>
  import Navbar from './components/navbar'
  import PostBlog from './components/postBlog'
  import SidebarWidget from './components/sidebarWidget'
  import Post from './components/post'
  import Foot from './components/footer'
  import ModalForm from './components/modalForm'
  export default {
    name: 'app',
    components: {
      Navbar,
      Post,
      PostBlog,
      SidebarWidget,
      Foot,
      ModalForm
    }
  }
</script>