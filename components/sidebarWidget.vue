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