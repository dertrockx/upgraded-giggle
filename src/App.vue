<template>
  <div id="app">
    <Navbar />
    <DefaultLayout>
      <Carousel />
      <Footer />
    </DefaultLayout>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import DefaultLayout from "./layouts/default.vue";
import Carousel from "./components/Carousel.vue"
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    DefaultLayout,
    Carousel,
    Footer
  },
  name: 'App',

}
</script>

<style lang="scss">

.subtitle {
  font-weight: 400;
  color: $very-dark-gray;
  line-height: 1rem;
  font-size: 0.7rem;
}

.header {
  color: $black;
  font-weight: 600;
  &-1{
    font-size: 2.4rem;
    letter-spacing: -0.15rem;
    line-height: 2.8rem;
  }
  &-2{
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 0.7rem;
  }
}



</style>
