<template>
	<div id="post">
		<h1 class="mt-4">{{titulo}}</h1>

		<p class="lead">
			by <a v-bind:href="linkAutor">{{autor}}</a>
		</p>

		<hr>

		<p>{{datapost}}</p>

		<hr>

		<span v-html="texto"></span>

	</div>
</template>

<script>
	export default{
		data(){
			return{

				titulo: '5 dicas essenciais para o Facebook do seu negócio',
				datapost: 'January 1, 2017',
				autor: 'Agência ECOS',
				linkAutor: 'http://ecosoitic.com.br',
				texto: "<div class='text-center'>"+
				"<img class='image' src='http://ecosoitic.com.br/pedro/sucesso%20no%20Facebook.PNG' alt=''>"
				+
				"</div>"
				+
				"<hr>"
				+
				"<p><strong>Facebook, a plataforma onde todas as marcas querem e, na maioria das vezes, devem estar. E não é à toa, claro. A rede social é hoje a maior do mundo em número de usuários, o que significa uma coisa bem simples: o público-alvo das empresas, ou pelo menos grande parte dele, também está lá.</strong></p>"
				+
				"<p>Com o seu negócio não é diferente. Seja ele pequeno, médio ou de qualquer outra proporção, seguir essa tendência e marcar presença na rede social pode ser uma excelente maneira de expor a sua marca e garantir que ela seja vista pelo seu público de interesse. Entretanto, assim como qualquer outro meio de comunicação, é preciso tomar alguns cuidados.</p>"
				+
				"<p>Não é raro, por exemplo, navegar pela rede e encontrar páginas que não dão o resultado esperado. Baixo número de curtidas, quase nenhum engajamento e pouca movimentação de conteúdo são apenas alguns indicadores de que algo por ali não vai bem. Por isso, contar com ajuda profissional e especializada para gerenciar e monitorar a imagem da sua empresa é o ideal. E isso a ECOS pode fazer por você.</p>"
				+
				"<p>Vale lembrar que uma página mal desenvolvida pode impactar a sua marca de forma negativa. Por isso, seja com apoio profissional ou não, é preciso ter atenção a algumas questões que podem fazer toda a diferença na percepção que os usuários têm da sua empresa no ambiente virtual.</p>"
				+
				"<h2>Como fazer com que uma marca tenha sucesso no Facebook?</h2>"
				+
				"<p>Se você tem dúvidas ou está em busca de dicas e orientações para ajudar na exposição da sua empresa na rede social, aqui é o lugar certo. Confira alguns passos que podem ajudar você:</p>"
				+
				"<h2>1- DEFINA OS SEUS OBJETIVOS</h2>"
				+
				"<p>Qual é o verdadeiro objetivo da sua marca no Facebook? Estabelecer uma relação mais próxima com os clientes? Vender um novo produto? Funcionar como serviço de atendimento? Aumentar as vendas de uma linha que já está no mercado? Atrair clientes? Transmitir valores e conceitos da marca?</p>"
				+
				"<p>Apesar de ser um canal de comunicação aberto e flexível que permite um contato próximo com os usuários, uma estratégia mal delineada no Facebook e sem objetivos definidos pode botar tudo a perder. Portanto, não se perca! Trace um caminho, estabeleça metas, saiba o qual é o verdadeiro propósito da sua marca e descubra até que ponto ela pode chegar fazendo uso do Facebook.</p>"
				+
				"<div class='text-center'>"
				+   
				"<img class='image' src='http://ecosoitic.com.br/pedro/facebook-vender.PNG'>"
				+
				"</div>"
				+
				"<hr>"
				+
				"<h2>2 - CRIE CONTEÚDO DE INTERESSE</h2>"
				+
				"<p>Conteúdo é a palavra-chave para atrair o público. Tenha sempre em mente que as boas informações podem estabelecer uma relação de confiança entre a sua marca e o consumidor. Seja investigativo: saiba do que ele gosta, quais assuntos mais comenta, etc. Definir e conhecer quem acessa ou possivelmente acessará a sua página é mais do que importante. É fundamental.</p>"
				+
				"<p>Outra questão essencial para chamar a atenção na rede é não falar apenas de si mesmo. Conteúdo maçante e repetitivo pode chatear o público e fazer com que as pessoas deixem de seguir a sua empresa. Por isso, uma boa sugestão é compartilhar conteúdo de outras fontes que também sejam relevantes. Isso vai melhorar a qualidade da sua marca na visão dos usuários.</p>"
				+
				"<div class='text-center'>"
				+
				"<img class='image' src='http://ecosoitic.com.br/pedro/facebook%20conte%C3%BAdo%20de%20interesse.png'>"
				+
				"</div>"
				+
				"<hr>"
				+
				"<h2>3 - ATUALIZE CONSTANTEMENTE</h2> "
				+
				"<p>A relação é bem simples: se o seu conteúdo está parado, o fluxo de visitas da sua página também vai estar. Publicar um post hoje e outro daqui um mês não vai gerar nenhum interesse e engajamento do público com a marca.</p>"
				+
				"<p>Por isso, estabeleça uma periodicidade de acessos e publicações e não perca esta rotina. Dedique tempo à sua página, responda mensagens, perguntas, interaja com os usuários nos comentários. Enfim, envolva-se. Dessa forma, o público vai associar a sua marca a diversos aspectos positivos como agilidade e comprometimento.</p>"
				+
				"<div class='text-center'>"
				+
				"<img class='image' src='http://ecosoitic.com.br/pedro/facebook-04.PNG'>"
				+
				"</div>"
				+
				"<hr>"
				+
				"<h2>4 - FALE A LÍNGUA DO SEU PÚBLICO</h2>"
				+
				"<p>O Facebook é uma daquelas situações que dispensa o excesso de formalidades. Claro, isso não é uma regra. Mesmo porque, quando se trata de comunicação, cada caso é um caso. Tudo vai depender do perfil de quem a sua marca deseja atingir.</p>"
				+
				"<p>Outra dica muito importante que vai facilitar a sua vida: nunca se esqueça de que do outro lado da tela existem pessoas. Por isso, faça com que os usuários sejam parte da sua página. Humanize sua marca com uma abordagem próxima do público, leve e interessante.</p>"
				+
				"<div class='text-center'>"
				+
				"<img class='image' src='http://ecosoitic.com.br/pedro/facebook-publico.png'>"
				+
				"</div>"
				+
				"<hr>"
				+
				"<h2>5 - AVALIE RESULTADOS</h2>"
				+
				"<p>Após criar a página, estabelecer estratégias e colocar a mão na massa, chegou a hora de mensurar os resultados para saber se seus esforços estão indo na direção correta. O Facebook oferece milhares de dados, números, gráficos e muito mais. Tudo isso disponibilizado de maneira intuitiva para ajudar você.</p>"
				+
				"<p>Ainda tem dúvidas ou quer saber mais sobre como gerenciar a página da sua empresa da melhor maneira possível? Então entre em contato com a ECOS e descubra um universo de possibilidades para a exposição e comunicação da sua empresa. Ligue: 0800 707 5900</p>"
				+
				"<hr>"

			}
		}
	}
</script>

<style scope lang="scss">
	@import '../assets/sass/style.scss';
	#post{
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

		hr{
			margin-top: 1rem;
			margin-bottom: 1rem;
			border: 0;
			border-top: 1px solid rgba(0, 0, 0, 0.1);
		}

		h2{
			font-size: 16pt;
			color: $corPrimaria;
			font-weight: 600;
		}

		.image{
			width: 100%;
			height: auto;

		}

	}
</style>