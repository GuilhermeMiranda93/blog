<template>
	<nav id="navbar" class="navbar fixed navbar-toggleable-md navbar-inverse">
		<button id="toggleButton" v-on:click="toggleMenu()" class="navbar-btn">
			<i class="fa fa-bars" aria-hidden="true"></i>
		</button>

		<div class="boxContainer">
			<a class="logo" href="../index.html"><img src="img/ecos-logo.png" style="height:40px;"></a>

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
						<a class="link" href="" data-toggle="modal" data-target="#myModal">Contato</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default{
		data: {
			isActive:false
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
				
			}
		}
	}
</script>