<template>
	<div id="blogBlock">

		<h1>BLOG ECOS <small> Notícias, Novidades e Curiosidades </small></h1>

		<div v-for="item in list" class="blog-post">
			<a v-bind:href="item.link"><img class="image" :src="item.img" :alt="item.titulo"></a>

			<div class="text-block">
				<h2 class="title">{{item.titulo}}</h2>
				<p class="text">{{item.descricao}}</p>
				<router-link :to='item.link' class="btn">LEIA MAIS AQUI &rarr;</router-link>
				<!-- <a v-bind:href='item.link' class="btn">LEIA MAIS AQUI &rarr;</a> -->
			</div>
			<div class="footer text-muted">
				Posted on {{item.datapost}} by <a v-bind:href='item.linkAutor'> {{item.autor}}</a>
			</div>
		</div>

		<!-- <ul class="pagination justify-content-center">
			<li><a class="link" v-bind:href=''>&larr; Mais Antigas</a></li>
			<li><a class="link" v-bind:href=''>1</a></li>
			<li><a class="link" v-bind:href=''>2</a></li>
			<li><a class="link" v-bind:href=''>3</a></li>
			<li><a class="link disable" v-bind:href=''>Mais Novas &rarr;</a></li>
		</ul> -->

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
				link: 'post/testando_o_link_da_pagina',
				datapost: 'January 1, 2017',
				autor: 'Agência ECOS',
				linkAutor: 'http://ecosoitic.com.br'},

				{titulo: 'POST DO BLOG 2 - EXEMPLO',
				descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
				img:'http://placehold.it/750x300',
				link: 'blogpost/index.html',
				datapost: 'January 1, 2017',
				autor: 'Agência ECOS',
				linkAutor: 'http://ecosoitic.com.br'}
				]
			}
		}
	}
</script>

<style scope lang="scss">
	@import '../assets/sass/style.scss';
	#blogBlock{
		@include smaller {
			width: 100%;
		}
		@include tiny {
			width: 100%;
		}
		@include medium {
			width: 60%;
		}
		@include bigger {
			width: 60%;
		}
		.blog-post{
			position: relative;
			@include flexDirection(column, vertical);
			border: 1px solid rgba($corSecundaria, 0.3);
			border-radius: 0.25rem;
			margin-bottom: 1.5rem;
			.image{
				width: 100%;
				height: auto;
				border-top-right-radius: calc(0.25rem - 1px);
				border-top-left-radius: calc(0.25rem - 1px);

			}
			.text-block{
				padding: 1.25rem;
				.title{
					font-family: $fontFamily2;
					margin-bottom: 0.75rem;
				}
			}
			.footer{
				border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
				color: $corSecundaria !important;
				padding: 0.75rem 1.25rem;
				background-color: lighten($corSecundaria, 50%);
				border-top: 1px solid rgba($corSecundaria, 0.3);
			}
		}
	}
</style>