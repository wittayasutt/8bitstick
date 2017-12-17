<template>
  <section class="welcome">
    <div class="center">
      <div class="pixel title-8">8BITSTICK</div>
      <div class="pixel subtitle-8">ENJOY YOUR PLAY</div>
    </div>
    <div class="pixel play" @click="toStart">
      PRESS TO START
    </div>
    <div class="support">รองรับสำหรับ Android, iOS, Windows, macOS, Nintendo Switch และอีกมากมาย</div>
    <img class="stick stick-1" src="/hello/1.png" alt="8bitstick">
    <img class="stick stick-2" src="/hello/2.png" alt="8bitstick">
    <img class="stick stick-3" src="/hello/4.png" alt="8bitstick">
    <img class="stick stick-4" src="/hello/3.png" alt="8bitstick">
  </section>
</template>

<script>
  export default {
  	props: ['toStart']
  }
</script>

<style lang="scss" scoped>
  .welcome {
  	height: 100vh;
  	width: 100vw;
  	background: $primary;
  	color: #ffffff;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	overflow: hidden;
  	position: fixed;

  	.center {
  		.title-8 {
  			font-size: 4rem;
  			text-align: center;
  			line-height: 1;
  		}
  		.subtitle-8 {
  			font-size: 2rem;
  			text-align: center;
  		}
  		animation: fade 1.5s ease-out forwards;
  		z-index: 2;
  	}
  	@keyframes fade {
  		0% {
  			transform: scale(0.8);
  			opacity: 0;
  		}
  		30% {
  			transform: scale(0.8);
  			opacity: 0;
  		}
  		90% {
  			transform: scale(1);
  			opacity: 1;
  		}
  	}

  	.play {
  		position: absolute;
  		top: 80vh;
  		border: 5px solid #ffffff;
  		padding: 3px 15px 5px;
  		font-size: 2rem;
  		line-height: 1;
  		cursor: pointer;
  		animation: blink 1.5s linear infinite;
  		box-shadow: 7px 10px rgba(0, 0, 0, 0);
  		transition: 0.1s;

  		&:hover {
  			animation: none;
  			box-shadow: 7px 10px rgba(0, 0, 0, 0.3);
  		}

  		&:active {
  			animation: none;
  			transform: translateY(7px);
  			box-shadow: 0px 0px rgba(0, 0, 0, 0.3);
  		}
  	}
  	@keyframes blink {
  		0% {
  			opacity: 1;
  		}
  		30% {
  			opacity: 1;
  		}
  		45% {
  			opacity: 0;
  		}
  		55% {
  			opacity: 0;
  		}
  		80% {
  			opacity: 1;
  		}
  	}

  	.support {
  		position: absolute;
  		top: 92vh;
  		text-align: center;
  		font-weight: 200;
  	}

  	.stick {
  		position: absolute;
  		z-index: -1;
  	}

  	.stick-1 {
  		height: 28vh;
  		top: 2vh;
  		left: -9vw;
  		transform: rotate(25deg);
  		animation: stick-1 1s ease-out forwards;
  	}
  	@keyframes stick-1 {
  		0% {
  			left: -30vw;
  			transform: rotate(-45deg);
  		}
  		100% {
  			left: -9vw;
  			transform: rotate(25deg);
  		}
  	}

  	.stick-2 {
  		height: 40vh;
  		top: 63vh;
  		left: -12vw;
  		transform: rotate(-23deg);
  		animation: stick-2 1s ease-out forwards;
  	}
  	@keyframes stick-2 {
  		0% {
  			left: -30vw;
  			transform: rotate(10deg);
  		}
  		100% {
  			left: -12vw;
  			transform: rotate(-23deg);
  		}
  	}

  	.stick-3 {
  		height: 30vh;
  		top: 0vh;
  		right: -6vw;
  		transform: rotate(-27deg);
  		animation: stick-3 1s ease-out forwards;
  	}
  	@keyframes stick-3 {
  		0% {
  			right: -30vw;
  			transform: rotate(45deg);
  		}
  		100% {
  			right: -6vw;
  			transform: rotate(-27deg);
  		}
  	}

  	.stick-4 {
  		height: 32vh;
  		top: 63vh;
  		right: -12vw;
  		transform: rotate(17deg);
  		animation: stick-4 1s ease-out forwards;
  	}
  	@keyframes stick-4 {
  		0% {
  			right: -30vw;
  			transform: rotate(-20deg);
  		}
  		100% {
  			right: -12vw;
  			transform: rotate(17deg);
  		}
  	}
  }

  @media screen and (orientation: portrait) {
  	.welcome {
  		.center {
  			position: absolute;
  			top: 35vh;

  			.title-8 {
  				font-size: 3.5rem;
  			}
  			.subtitle-8 {
  				font-size: 1.4rem;
  			}
  		}

  		.play {
  			top: 55vh;
  			border: 3px solid #ffffff;
  			padding: 3px 15px 5px;
  			font-size: 1.8rem;
  		}

  		.support {
  			top: 64vh;
  		}

  		.stick-1 {
  			height: auto;
  			width: 63vw;
  			top: 3vh;
  			left: -20vw;
  			transform: rotate(25deg);
  		}
  		@keyframes stick-1 {
  			0% {
  				left: -30vw;
  				transform: rotate(-45deg);
  			}
  			100% {
  				left: -20vw;
  				transform: rotate(25deg);
  			}
  		}

  		.stick-2 {
  			height: auto;
  			width: 63vw;
  			top: 82vh;
  			left: -17vw;
  			transform: rotate(-23deg);
  		}
  		@keyframes stick-2 {
  			0% {
  				left: -30vw;
  				transform: rotate(10deg);
  			}
  			100% {
  				left: -17vw;
  				transform: rotate(-23deg);
  			}
  		}

  		.stick-3 {
  			height: auto;
  			width: 62vw;
  			top: 2vh;
  			right: -16vw;
  			transform: rotate(-27deg);
  		}
  		@keyframes stick-3 {
  			0% {
  				right: -30vw;
  				transform: rotate(45deg);
  			}
  			100% {
  				right: -16vw;
  				transform: rotate(-27deg);
  			}
  		}

  		.stick-4 {
  			height: auto;
  			width: 68vw;
  			top: 82vh;
  			right: -18vw;
  			transform: rotate(17deg);
  		}
  		@keyframes stick-4 {
  			0% {
  				right: -30vw;
  				transform: rotate(-20deg);
  			}
  			100% {
  				right: -18vw;
  				transform: rotate(17deg);
  			}
  		}
  	}
  }
</style>
