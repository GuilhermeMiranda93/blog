<template>
	<nav id="navbar" class="navbar fixed navbar-toggleable-md navbar-inverse">
		<button id="toggleButton" v-on:click="toggleMenu()" class="navbar-btn">
			<i class="fa fa-bars" aria-hidden="true"></i>
		</button>

		<div class="boxContainer">
			<a class="logo" href="../index.html"><img src="../assets/img/ecos-logo.png" style="height:40px;"></a>

			<div v-bind:class="{ active: isActive }" id="menus" class="collapse">
				<ul>
					<li>
						<a class="link" href="../index.html">Home</a>
					</li>
					<li>
						<a class="link" href="../aecos/index.html">A ECOS </a>
					</li>
					<li>
						<a class="link" href="../cases/index.html">Cases </a>
					</li>
					<li>
						<a class="link" href="../servicos/index.html">Serviços</a>
					</li>
					<li>
						<a class="link active" href="index.html">Blog</span></a>
					</li>                    
					<li>
						<a class="link" href="" v-on:click="openModalNav()">Contato</a>
					</li>
				</ul>
			</div>
		</div>
		<ModalForm ref="modalForm"></ModalForm>
	</nav>

</template>

<script>
	import ModalForm from './modalForm'
	export default{
		components: { 
			ModalForm
		},
		data(){
			return{
				isActive:false
			}
		},
		methods:{
			toggleMenu(){
				console.log(this.isActive);
				if(this.isActive){
					this.isActive = false;
				}
				else{
					this.isActive = true;
				}
				
			},
			openModalNav(){
				this.$refs.modalForm.openModal();
			}
		}
		
	}
</script>

<style scope lang="scss">
	@import '../assets/css/font-awesome.min.css';
	@import '../assets/sass/style.scss';
	#navbar{
		background-color: $corPrimaria !important;
		@include flexDirection(column,vertical);
		position: relative;
		padding: 0.5rem 1rem;

		.navbar-btn{
			background-color: transparent;
			color: white;
			padding: 0.25rem 0.75rem;
			font-size: 1.25rem;
			line-height: 1;
			border: 1px solid transparent;
			border-radius: 0.25rem;
			position: absolute;
			right: 1rem;
			cursor: pointer;
			z-index: 999;
		}

		@include smaller {
			#toggleButton{
				display: block;
			}
			.collapse{
				display: none;
				&.active{
					display: block;
				}
			}
		}
		@include tiny {
			#toggleButton{
				display: none;
			}

			@include flexDirection(row,horizontal);
			@include flexWrap(nowrap);
			@include flexAlign(center);

			.collapse {
				@include flex;
				display: block;
				width: $w-100;
				&>ul{
					@include flexDirection(row,horizontal);
					margin-left: auto !important;
				}
			}
			&>.boxContainer{
				@include flexWrap(nowrap);
				@include flexAlign(center);

			}
		}
		@include medium {
			#toggleButton{
				display: none;
			}
			@include flexDirection(row,horizontal);
			@include flexWrap(nowrap);
			@include flexAlign(center);

			.collapse {
				@include flex;
				display: block;
				width: $w-100;
				&>ul{
					@include flexDirection(row,horizontal);
					margin-left: auto !important;
				}
			}
			&>.boxContainer{
				@include flexWrap(nowrap);
				@include flexAlign(center);

			}
		}
		@include bigger {
			#toggleButton{
				display: none;
			}
			@include flexDirection(row,horizontal);
			@include flexWrap(nowrap);
			@include flexAlign(center);

			.collapse {
				@include flex;
				display: block;
				width: $w-100;
				&>ul{
					@include flexDirection(row,horizontal);
					margin-left: auto !important;
				}
			}
			&>.boxContainer{
				@include flexWrap(nowrap);
				@include flexAlign(center);

			}
		}

		.logo{
			display: inline-block;
			padding-top: .25rem;
			padding-bottom: .25rem;
			margin-right: 1rem;
			font-size: 1.25rem;
			line-height: inherit;
			white-space: nowrap;
		}
		.link{
			color: rgba(255,255,255,0.5);
			padding-right: .5rem;
			padding-left: .5rem;
			&.active{
				color: white;
			}
		}


	}
</style>