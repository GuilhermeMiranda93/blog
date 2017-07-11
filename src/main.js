// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Post from './components/post'
import PostBlog from './components/postBlog'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.component('modalForm');

const Bar = { template: '<div>bar</div>' }

const routes = [
{ path: '/', component: PostBlog },
{ path: '/post', component: Post },
{ path: '/post/:id', component: Post }
]

const router = new VueRouter({
	routes
})

new Vue({
	el: '#app',
	router,
	render: h=>h(App),
	template: '<App/>',
	components: { App }
})