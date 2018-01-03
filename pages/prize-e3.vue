<template>
  <section class="prize">
    <img src="/prize/e3.jpg" alt="8bitdo_bestof_e3">
  </section>
</template>

<style lang="scss" scoped>
  .prize {
  	display: flex;
  	justify-content: center;
  	align-items: center;

  	img {
  		min-height: 100vh;
  		min-width: 100vw;
  	}
  }

  @media (orientation: portrait) {
  	.prize {
  		img {
  			min-height: auto;
  			min-width: auto;
  		}
  	}
  }
</style>
