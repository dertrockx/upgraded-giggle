<template>
  <main>
  	<slot></slot>
  </main>
</template>


<script>
  export default {
  	name: "DefaultLayout"
  }
</script>

<style>
main {
	display: grid;
	grid-template-rows: 4fr;
}
</style>