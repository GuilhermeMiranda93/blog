<template>
	<div id="blogBlock">

		<h1>BLOG ECOS <small> Notícias, Novidades e Curiosidades </small></h1>

		<div v-for="item in list" class="blog-post">
			<a href="{{item.link}}"><img class="image" :src="item.img" :alt="item.titulo"></a>
			<div class="text-block">
				<h2 class="title">{{item.titulo}}</h2>
				<p class="text">{{item.descricao}}</p>
				<a href="{{item.link}}" class="btn">LEIA MAIS AQUI &rarr;</a>
			</div>
			<div class="footer text-muted">
				Posted on {{item.data}} by <a href="{{item.linkAutor}}">{{item.autor}}</a>
			</div>
		</div>

		<ul class="pagination justify-content-center">
			<li><a class="link" href="#">&larr; Mais Antigas</a></li>
			<li><a class="link" href="#">1</a></li>
			<li><a class="link" href="#">2</a></li>
			<li><a class="link" href="#">3</a></li>
			<li><a class="link disable" href="#">Mais Novas &rarr;</a></li>
		</ul>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				list: [
				{titulo: 'POST DO BLOG - EXEMPLO',
				descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
				img:'http://placehold.it/750x300',
				link: 'blogpost/index.html',
				data: 'January 1, 2017',
				autor: 'Agência ECOS',
				linkAutor: 'http://ecosoitic.com.br'}
				]
			}
		}
	}
</script>