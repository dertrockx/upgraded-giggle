<template>
  <section class="carousel">
    <div class="slide">
      <div class="image">
        <img :src=" getImgUrl(currentSlide.imgSrc)" alt="" />
      </div>
      <div class="text">
      	<div class="buttons">
      		<div class="button" @click="prev">
      			<img src="@/assets/images/icon-angle-left.svg" alt="">
      		</div>
      		<div class="button" @click="next">
      			<img src="@/assets/images/icon-angle-right.svg" alt="">
      		</div>
      	</div>
        <div class="content" v-if="slides.length > 0">
          <h1 class="text-content header-1">
            {{ currentSlide.header }}
          </h1>
          <p class="text-content subtitle">
            {{ currentSlide.subtitle }}
          </p>
          <div class="text-content cta">
            Shop now
            <svg id="cta-arrow" width="40" height="12">
              <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

class Slide {
	constructor(number=0, header="", subtitle="", imgSrc=""){
		this.slideNo = number;
		this.header = header;
		this.subtitle = subtitle;
		this.imgSrc = imgSrc;
	}
}

export default {
	name: "Carousel",
	data(){ 
		return {
			slides: [],
			currentSlideIndex: 0,
			loading: false
		}
	},
	methods: {
		instantiateNewSlide(number, header, subtitle, imgSrc){
			const slide = new Slide(number, header, subtitle, imgSrc);
			return slide;
		},
		getImgUrl(pic){
			return require('../assets/images/' + pic)
		},
		prev(){
			if( this.currentSlideIndex === 0 )
				this.currentSlideIndex = 2;
			else
				this.currentSlideIndex--;
		},
		next(){
			if( this.currentSlideIndex === 2 )
				this.currentSlideIndex = 0;
			else
				this.currentSlideIndex++;
		},
	},
	computed: {
		currentSlide(){
			let header = "";
			let subtitle = "";
			let imgSrc = "";
			if( !this.loading ){
				subtitle = this.slides[this.currentSlideIndex].subtitle;
				header = this.slides[this.currentSlideIndex].header;
				imgSrc = this.slides[this.currentSlideIndex].imgSrc;
			}
			return {
				header,
				subtitle,
				imgSrc
			}
		}
	},
	created(){
		const slideObjs = [
			{
			header : "Discover innovative ways to decorate",
			subtitle :`We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room inyour own style with our collection and make your property a reflection of you and what you love.`,
				imgSrc: "desktop-image-hero-1.jpg"
			},
			{
			header : "We are available all across the globe",
			subtitle :`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
				imgSrc: "desktop-image-hero-2.jpg"
			},
			{
			header : "Manufactured with the best materials",
			subtitle :`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
				imgSrc: "desktop-image-hero-3.jpg"
			},
		]
		
		for(let i = 0; i < 3; i++){
			let slideObj = slideObjs[i];
			const { header, subtitle, imgSrc } = slideObj;
			const slide = this.instantiateNewSlide( i, header, subtitle, imgSrc );
			this.slides.push(slide);
		}
		this.loading = false;
		
	}
}
</script>

<style lang="scss">
.slide {
	display: grid;
	grid-template-columns: 5.9fr 4.1fr;

	.image {
		display: flex;
		align-items: center;
		justify-content: center;
		// position: relative;
		img {
			width: 100%;
			height: auto;
		}

	}


	.text {
		display: flex;
		justify-content: center;
		padding: calc( 100vh * 0.145 ) calc( 100vw * 0.07 );
		position: relative;

		.buttons {
			position: absolute;
			bottom: 0;
			left: 0;
			background: red;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			.button {
				cursor: pointer;
				padding: 1.5rem 1.9rem;
				background: $black;
				&:hover {
					background: $very-dark-gray;
				}
			}
		}

		.content {

			.text-content {
				margin-bottom: 2.1rem;
			}

			.cta {
				color: $black;
				text-transform: uppercase;
				font-weight: bold;
				letter-spacing: 0.5rem;
				font-size: 0.8rem;
				cursor: pointer;
				
				&:hover {
					color: lighten($dark-gray, 20%);
					& #cta-arrow path {
						fill: lighten($dark-gray, 20%);
					}
				}

			}

		}
	}
}


@media only screen and (max-width: 768px){
  .slide{
  	grid-template-columns: 1fr;
  	
  	.text .buttons {
  		bottom: auto;
  		left: auto;
  		top: -4.8rem;
  		right: 0;
  	}
  }
}

</style>