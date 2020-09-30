<template>
  <header 
  	class='navigation'
  	:class="{ 'open-hamburger' : hamburgerOpened }"
  	>
  	<div class="navigation-hamburger" @click="toggleHamburger">
  		<img :src="getImgUrl( hamburgerIcon ) " />
  	</div>
  	<div class="navigation-links">
  		<div class="navigation-links--logo">
	      <img src="@/assets/images/logo.svg" alt="logo">
	    </div>
	    <div class="navigation-links--item">
	      Home
	      <div class="border-bottom"></div>
	    </div>
	    <div class="navigation-links--item">
	      Shop
	      <div class="border-bottom"></div>
	    </div>
	    <div class="navigation-links--item">
	      About
	      <div class="border-bottom"></div>
	    </div>
	    <div class="navigation-links--item">
	      Contact
	      <div class="border-bottom"></div>
	    </div>
  	</div>
  </header>
</template>


<script>
  export default {
  	name: "Navbar",
  	data(){
  		return {
  			hamburgerOpened: false
  		}
  	},
  	methods: {
  		getImgUrl(pic){
				return require('../assets/images/' + pic)
			},
			toggleHamburger(){
				this.hamburgerOpened = !this.hamburgerOpened;
			}
  	},
  	computed: {
  		hamburgerIcon(){
  			let icon = "icon-hamburger.svg";
  			if(this.hamburgerOpened)
  				icon = "icon-close.svg"
  			return icon;
  		}
  	}
  }
</script>

<style lang="scss">



.navigation {
	width: 100vw;
	position: fixed;
	padding: calc( 100vh * 0.083 ) calc( 100vw * 0.045 );
	
		
	&-hamburger {
		display: none;
		cursor: pointer;
	}

	&-links {
		color: $white;
		display: flex;
		align-items: center;
		

		&--logo {
			margin-right: 3rem;
		}

		&--item {
			margin-right: 2rem;
			padding: 0;
			text-transform: lowercase;
			font-weight: 600;
			
			cursor: pointer;
			&:hover {
				&:after {
					content: ""; /* This is necessary for the pseudo element to work. */ 
			    display: block; /* This will put the pseudo element on its own line. */
			    margin: 0 auto; /* This will center the border. */
			    width: 50%; /* Change this to whatever width you want. */
			    border-bottom: 2px solid $white; /* This creates the border. Replace black with whatever color you want. */
				}
			}
		}
	}
	
}


@media only screen and (max-width: 375px) {
	.navigation {
		display: grid;
		grid-template-columns: 10vw auto;
		
		
		&-hamburger {
			display: block;
		}
		&-links {
			margin: 0;
			justify-content: center;
			&--item {
				display: none;
			}
			
		}
	}

	&.open-hamburger{
		background: $white;

		.navigation-links {
			color: $black;
			&--item {
				display: block;
			}
			&--logo {
				display: none;
			}
		}
	}
}
</style>