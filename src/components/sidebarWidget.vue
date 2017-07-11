<template>
	<div id="sidebarWidget">

		<div class="sidebarBlock">
			<h5 class="header">Pesquisa</h5>
			<div class="block">
				<div class="input-group">
					<input type="text" class="form-control" placeholder="Procurar por...">
					<span class="input-group-btn">
						<button class="btn" type="button">IR</button>
					</span>
				</div>
			</div>
		</div>

		<div class="sidebarBlock">
			<h5 class="header">Categorias</h5>
			<div class="block">
				<div class="boxLine">
					<div class="col-lg-6">
						<div v-for="item in list" class="items">
							<div class="item"><a href="#">{{item.text}}</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				list: [
				{text: 'Web Design'},
				{text: 'Facebook'},
				{text: 'SEO'},
				{text: 'Gráficos Digitais'},
				{text: 'Mídias Sociais'},
				{text: 'Marketing'}
				]
			}
		}
	}
</script>

<style scope lang="scss">
@import '../assets/sass/style.scss';
	#sidebarWidget{
	@include smaller {
		width: 100%;
	}
	@include tiny {
		width: 100%;
	}
	@include medium {
		width: 40%;
	}
	@include bigger {
		width: 40%;
	}
	.sidebarBlock{
		@include flexDirection(column,vertical);
		position: relative;
		background-color: white;
		border: 1px solid lighten($corSecundaria, 50%);
		border-radius: 0.25rem;
		margin-bottom: 2em;
		.header{
			padding: 0.75rem 1.25rem;
			margin-bottom: 0;
			background-color: lighten($corSecundaria, 50%);
			border-bottom: 1px solid rgba($corSecundaria, 0.3);
			font-family: $fontFamily2;
		}
		.block{
			padding: 1.25rem;
			.input-group{
				width: $w-100;
				@include flex;
				input{
					display: block;
					width: 100%;
					padding: 0.5rem 0.75rem;
					font-size: 1rem;
					line-height: 1.25;
					color: $corSecundaria;
					background-color: white;
					border: 1px solid rgba($corSecundaria, 0.3);
					border-radius: 0.25rem;
					border-top-right-radius: 0rem;
					border-bottom-right-radius: 0rem;

				}
				.btn{
					color: $corSecundaria;
					background-color: white;
					border: 1px solid rgba($corSecundaria, 0.3);
					border-radius: 0.25rem;
					border-top-left-radius: 0rem;
					border-bottom-left-radius: 0rem;
					margin-left: -1px;
				}
			}
			.items {
				overflow: hidden; /* simple clearfix */
			}
			.items .item {
				float: left;
				width: 50%;
				color: $corPrimaria;
			}
		}
	}
}
</style>