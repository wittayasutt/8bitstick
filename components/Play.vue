<template>
	<section class="play">
		<div class="container">
			<h2 class="title-pixel title-play"></h2>
			<div class="text">
				แนะนำการเล่นเกม Famicom / Super Famicom / Gameboy Advance / Nintendo DS / PlayStation บนโทรศัพท์มือถือ, คอมพิวเตอร์ และการใช้งานจอยสติ๊ก 8Bitdo
			</div>

			<div class="columns">
				<div class="column is-8" :class="{ fade: fade }">
					<div class="columns is-multiline is-mobile">
						<div class="column is-half">
							<img class="play-1" src="/play/1.jpg" alt="playmobile">
						</div>
						<div class="column is-half">
							<img class="play-2" src="/play/2.jpg" alt="playtablet">
						</div>
						<div class="column is-half">
							<img class="play-3" src="/play/3.jpg" alt="playcomputer">
						</div>
						<div class="column is-half">
							<img class="play-4" src="/play/4.jpg" alt="playtablet">
						</div>
					</div>
				</div>

				<div class="column is-4" :class="{ fade: fade }">
					<div class="articles">
						<nuxt-link to="/article/unbox-fc30pro" class="article" tag="div">[UNBOX] 8Bitdo FC Pro Edition จอยสติ๊กรุ่นต่อยอดความสำเร็จแห่ง Famicom</nuxt-link>
					</div>
					<!-- <span class="icon has-text-info">
            <i class="fa fa-2x fa-gamepad"></i>
          </span> -->
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Typed from 'typed.js'

	export default {
		data() {
			return {
				fade: false
			}
		},
		props: ['inPlay'],
		watch: {
			inPlay: function(val) {
				if (val && !this.fade) {
					const options = {
						strings: ['HOW TO PLAY'],
						typeSpeed: 100,
						fadeOut: true,
						showCursor: false
					}

					const typed = new Typed('.title-play', options)
					this.fade = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.play {
		background: $gray;
		padding: $container-padding;

		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.title-pixel {
				margin-bottom: 0;
			}

			.text {
				max-width: $tablet;
				margin: 0.75rem auto;
				text-align: center;
				font-weight: 200;
			}

			.columns {
				.is-8 {
					opacity: 0;

					.is-mobile > .is-half {
						display: flex;
						align-items: center;
					}
				}

				.is-8.fade {
					animation: fade-left 1s ease-out forwards;
				}

				@keyframes fade-left {
					0% {
						opacity: 0;
						transform: translateX(-50px);
					}
					100% {
						opacity: 1;
						transform: translateX(0px);
					}
				}

				.is-4 {
					display: flex;
					flex-direction: column;
					align-items: center;
					background: $primary;
					color: #ffffff;
					margin: 0.75rem;
					opacity: 0;

					.articles {
						flex: 1;
						.article {
							min-height: 3rem;
							padding: 0.75rem;
							margin-bottom: 0.75rem;
							border: 2px solid #ffffff;
							background: $primary;
							color: #ffffff;
							cursor: pointer;
							transition: 0.2s;

							&:hover {
								background: #ffffff;
								color: $primary;
							}

							&:active {
								background: $primary;
								color: #ffffff;
							}
						}

						.article:nth-last-child(1) {
							margin-bottom: 0;
						}
					}

					// .icon > i {
					// 	color: #ffffff;
					// }
				}

				.is-4.fade {
					animation: fade-right 1s ease-out forwards;
				}

				@keyframes fade-right {
					0% {
						opacity: 0;
						transform: translateX(50px);
					}
					100% {
						opacity: 1;
						transform: translateX(0px);
					}
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.play {
			.container {
				.columns > .is-8 > .is-mobile > .is-half {
					padding-bottom: 0;
				}

				.columns > .is-8 > .is-mobile > .is-half:nth-child(odd) {
					padding-right: 0.375rem;
				}

				.columns > .is-8 > .is-mobile > .is-half:nth-child(even) {
					padding-left: 0.375rem;
				}
			}
		}
	}
</style>
