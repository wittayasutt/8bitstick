<template>
  <section class="error">
    <div>
      {{ error.statusCode }} | {{ error.message }}
    </div>
    <div class="center">
      <nuxt-link to="/" class="toHome pixel">PRESS TO HOME</nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
  	props: ['error']
  }
</script>
<style lang="scss" scoped>
  .error {
  	height: 100vh;
  	width: 100vw;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	background: $primary;
  	color: #ffffff;
  	font-size: 1.2rem;
  	text-align: center;

  	.center {
  		margin-top: 0.75rem;

  		.toHome {
  			border: 5px solid #ffffff;
  			padding: 3px 15px 5px;
  			font-size: 2rem;
  			color: #ffffff;
  			cursor: pointer;
  			box-shadow: 7px 10px rgba(0, 0, 0, 0);
  			transition: 0.1s;

  			&:hover {
  				box-shadow: 7px 10px rgba(0, 0, 0, 0.3);
  			}

  			&:active {
  				transform: translateY(7px);
  				box-shadow: 0px 0px rgba(0, 0, 0, 0.3);
  			}
  		}
  	}
  }
</style>
