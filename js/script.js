// import 'babel-polyfill';
// import Vue from 'vue';
import postBlog from './components/navbar.vue';
// import sidebarWidget from './components/sidebarWidget.vue';

new Vue({
  el: '#navbar',
  store,
  render: h => h(navbar)
})

// new vue({
// 	el:'#sidebarWidget',
// 	components: {sidebarWidget}
// });