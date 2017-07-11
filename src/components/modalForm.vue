<template>
	<div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" ref="modalForm">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">                    
					<h4 class="modal-title">Entre em contato Conosco!</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="closeModal()"><span aria-hidden="true">&times;</span></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label for="nome">Nome</label>
							<input type="text" class="form-control" id="nome" placeholder="Nome">
						</div>
						<div class="form-group">
							<label for="email">Endereço de e-mail</label>
							<input type="email" class="form-control" id="email" placeholder="Email">
						</div>
						<div class="form-group">
							<label for="telefone">Telefone</label>
							<input type="tel" class="form-control" id="telefone" placeholder="Telefone">
						</div>               
						<button type="submit" class="btn">Enviar</button>                            
					</form>                    
				</div>
				<div class="modal-footer">
					<p>Agilize seu atendimento - Um consultor está a sua disposição: <strong><span>0800 707 5900 | +55 35 3729 9900</span></strong></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'modal',
		methods:{
			closeModal(){
				this.$refs.modalForm.style.display = 'none';
			},
			openModal(){
				event.preventDefault();
				this.$refs.modalForm.style.display = 'block';
			}
		}
	}
</script>

<style scope lang="scss">
	@import '../assets/sass/style.scss';
	#modalForm{
		// display: none;
		padding-right: 15px;
		overflow-x: hidden;
		overflow-y: auto;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1050;
		outline: 0;
		background-color: rgba(0,0,0,.5);

		.modal-dialog{
			max-width: 500px;
			margin: 30px auto;
			position: relative;
			width: auto;
		}

		.modal-content{
			position: relative;
			@include flexDirection(column,vertical)
			background-color: #fff;
			-webkit-background-clip: padding-box;
			background-clip: padding-box;
			border: 1px solid rgba(0, 0, 0, 0.2);
			border-radius: 0.3rem;
			outline: 0;

			.modal-header{
				@include flexAlign(center);
				@include flexJustify(space-between);
				padding: 15px;
				border-bottom: 1px solid rgba($corSecundaria,.2);
				.modal-title{
					margin-bottom: 0;
					line-height: 1.5;
					font-size: 1.5rem;
					font-weight: 500;
				}
				.close{
					padding: 0;
					cursor: pointer;
					background: transparent;
					border: 0;
					-webkit-appearance: none;
					float: right;
					font-size: 1.5rem;
					font-weight: bold;
					line-height: 1;
					color: $corTerciaria;
					opacity: .5;
				}
			}
			.modal-body{
				position: relative;
				-webkit-box-flex: 1;
				-webkit-flex: 1 1 auto;
				-ms-flex: 1 1 auto;
				flex: 1 1 auto;
				padding: 15px;

				.form-group{
					margin-bottom: 1rem;
					label{
						display: inline-block;
						margin-bottom: .5rem;
						color: $corTerciaria;
					}
					input{
						display: block;
						width: 100%;
						padding: 0.5rem 0.75rem;
						font-size: 1rem;
						line-height: 1.25;
						color: $corTerciaria;
						background-color: #fff;
						background-image: none;
						-webkit-background-clip: padding-box;
						background-clip: padding-box;
						border: 1px solid rgba(0, 0, 0, 0.15);
						border-radius: 0.25rem;
					}
				}
			}
			.modal-footer{
				@include flexAlign(center);
				@include flexJustify(flex-end);
				padding: 15px;
				border-top: 1px solid rgba($corSecundaria,.2);
				p{
					text-align: center;
				}
			}
		}
	}
</style>