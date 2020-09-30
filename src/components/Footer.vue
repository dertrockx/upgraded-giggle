<template>
	<section class="footer">
    <div class="footer-item">
      <img src="@/assets/images/image-about-dark.jpg" alt="">
    </div>
    <div class="footer-item">
      <div class="text">
        <h1 class="text-content header-2">
        About our furniture
        </h1>
        <p class="text-content subtitle">
          Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
    </div>
    <div class="footer-item">
      <img src="@/assets/images/image-about-light.jpg" alt="" />
    </div>
  </section>
</template>


<script>
  export default {
  	name: "Footer"
  }
</script>

<style scoped lang="scss">

.footer {
		display: grid;
		grid-template-columns: 3fr 4fr 3fr;
		
		.footer-item {
			display: flex;
			align-items: center;
			justify-content: center;

			.text {
				padding: calc( 100vh * 0.03 ) calc( 100vw * 0.03 );

				.text-content {
					margin-bottom: 1rem;
				}

			}

			img {
				width: 100%;
				height: auto;
			}
		}
	}

@media only screen and (max-width: 37.5rem){
  .footer{
  	grid-template-columns: 1fr;
  }
}


</style>