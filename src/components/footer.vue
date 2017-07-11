<template>
	<div id="foot">
		<div class="boxContainer">
			<div class="boxLine">
				<div class="menus">
					<h3 class="title">SAIBA MAIS</h3>
					<ul>
						<li><a href="http://www.ecosoitic.com.br/index.html">Home</a></li>
						<li><a href="http://www.ecosoitic.com.br/aecos/index.html">A ECOS</a></li>
						<li><a href="http://www.ecosoitic.com.br/cases/index.html">Cases</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/index.html">Serviços</a></li>
						<li><a href="http://www.ecosoitic.com.br/blog/index.html">Blog</a></li>
						<li><a href="" data-toggle="modal" data-target="#myModal">Contato</a></li>
					</ul>
				</div>
				<div class="menus">
					<h3 class="title">SERVIÇOS</h3>
					<ul>
						<li><a href="http://www.ecosoitic.com.br/servicos/redessociais/index.html">Gestão de Redes Sociais</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/graficosdigitais/index.html">Materiais Gráficos</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/fotovideo/index.html">Foto e Vídeo</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/websites/index.html">Websites</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/branding/index.html">Branding</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/mktconteudo/index.html">Marketing de Conteúdo</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/emailmarketing/index.html">E-mail e SMS</a></li>
						<li><a href="http://www.ecosoitic.com.br/servicos/assessoriaimprensa/index.html">Assessoria de Imprensa</a></li>
					</ul>
				</div>
				<div class="menus">
					<h3 class="title">FALE CONOSCO</h3>
					<p>0800 704 1133<br>+55 35 3729 9900</p>
					<p>ecos@soitic.com</p>
					<p>Dr. Francisco Faria Lobato, 416 - Centro - Poços de Caldas - MG</p>
				</div>
				<div class="menus">                    
					<div class="fb-page" data-href="https://www.facebook.com/agenciaecos" data-tabs="timeline" data-height="130px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/agenciaecos" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/agenciaecos" target="blank">Agência ECOS - Exposição &amp; Comunicação</a></blockquote></div>
				</div>

			</div>            
		</div>
		<div class="footer-info">
			<p>Copyright &copy; ECOS 2017</p>
		</div>
		<!-- /.container -->
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style scope lang="scss">
	@import '../assets/sass/style.scss';
	#foot{
		background-color: $corTerciaria;
		font-size: 14px;
		padding-top: 3rem !important;

		ul{
			padding: 0;
		}

		li{
			line-height: 16px;
		}
		a,p{
			color: white;
			font-weight: 300;

		}

		.boxContainer{
			padding-left: 4em;
		}

		.title{
			color: $corPrimaria;
			font-size: 1rem;
			margin-bottom: 0.5rem;
			font-family: inherit;
			font-weight: 700;
			line-height: 1.1;
			margin-top: 0;
		}
		.menus{
			@include smaller {
				width: 100%;
			}
			@include tiny {
				width: 25%;
			}
			@include medium {
				width: 25%;
			}
			@include bigger {
				width: 25%;
			}
		}

		blockquote{
			margin-left: 0;
		}

		.footer-info{
			background-color: $corPrimaria;
			padding-top: 0.25rem !important;
			padding-bottom: 0.25rem !important;
			border-top: 1px solid #fff;
			p{
				color: white;
				text-align: center;
			}
		}

	}
</style>