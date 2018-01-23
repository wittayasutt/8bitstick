<template>
	<section class="item">
		<div class="detail">
			<div class="imgWrapper">
				<img :src="item.picture" :alt="item.title">
			</div>
			<div class="title-and-desc">
				<div class="text">
					<h1 class="title-8">{{item.title}}</h1>
					<div class="subtitle-8">{{commaNumber(item.price)}} บาท</div>
					<h2 class="brand-and-code">Brand: {{item.brand}}</h2>
					<div class="brand-and-code">Codename: {{item.codename}}</div>
					<div class="brand-and-code">Support:
						<a href="http://support.8bitdo.com/" target="_blank">8bitdo.com</a>
					</div>
					<article class="description">&nbsp;&nbsp;&nbsp;&nbsp;{{item.desc}}</article>
				</div>
				<a class="button is-primary is-rounded" @click="toBuy">ซื้อเลย!</a>
			</div>
		</div>

		<div v-if="item.support > 0" class="compatibility">
			<h2 class="whatplay">เล่นอะไรได้บ้าง?</h2>
			<div v-for="(platform, index) in compatible" class="platform" :key="index">
				<div class="imgWrapper">
					<img :src="platform.picture" :alt="platform.name">
				</div>
				<div class="name-and-detail">
					<div class="platform-name">{{ platform.name }}</div>
					<div class="platform-detail">{{ platform.detail }}</div>
				</div>
			</div>
			<p></p>
			<div v-if="item.support > 4" class="asterisk">*เครื่องเล่นที่เป็นสีเทา จำเป็นต้องติดตั้งเฟิร์มแวร์จากทาง
				<a href="http://support.8bitdo.com/" target="_blank">8bitdo.com</a> ก่อน</div>
			<div v-if="item.support > 4" class="asterisk">*เครื่องเล่น Switch จะไม่รองรับ HD rumble, s-axis motion control และ amiibo scanning</div>
		</div>

		<buy id="buy" :item='item' :showBuyFb="showBuyFb" />

		<img class="screenshot" v-for="(screenshot, index) in item.screenshot" :src="screenshot" :alt="item.title" :key="index">

		<div class="nearly">แนะนำสินค้า</div>
		<div class="columns is-multiline">
			<div class="column is-half" v-for="(item, index) in suggestionItem" :key="index">
				<nuxt-link :to="'/item/'+item.id" class="item">
					<img :src="item.picture" :alt="item.title">
					<div class="overlay">
						<div class="top">
							<p>{{item.brand}}</p>
							<h2>{{item.title}}</h2>
						</div>
						<div class="center">
						</div>
						<div class="bottom">
							<p>{{commaNumber(item.price)}} บาท</p>
							<div class="buy">ดูรายละเอียด</div>
						</div>
					</div>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Buy from '~/components/Buy.vue'
	import jump from 'jump.js'
	import commaNumber from 'comma-number'

	export default {
		validate({ params }) {
			return !isNaN(+params.id)
		},
		fetch({ store, params }) {
			store.commit('setItem', params.id)
		},
		created() {
			if (this.$store.getters.getProduct.length === 0) {
				this.$store.dispatch('initProduct')
			}

			if (this.$store.getters.getPlatform.length === 0) {
				this.$store.dispatch('initPlatform')
			}
		},
		components: {
			Buy
		},
		head() {
			return {
				title: `${this.item.brand} ${
					this.item.title
				} | 8bitstick ศูนย์รวมจอยสติ๊ก`,
				meta: [
					{
						name: 'description',
						content: `${this.item.desc}`
					},
					{
						name: 'keywords',
						content: `${this.item.title},${this.item.brand},${
							this.item.codename
						},Android JoyStick,iPhone Joystick,PC Joystick,Bluetooth Joystick`
					}
				]
			}
		},
		props: ['showBuyFb'],
		methods: {
			toBuy() {
				jump('#buy', {
					duration: 1000,
					offset: -60
				})
			},
			commaNumber(number) {
				return commaNumber(number)
			}
		},
		computed: {
			...mapGetters({
				item: 'getSelectedItem',
				compatible: 'getCompatible',
				suggestionItem: 'getSuggestionItem'
			})
		}
	}
</script>
<style lang="scss" scoped>
	.item {
		.detail {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			padding: 0.75rem;

			.imgWrapper {
				width: 40%;

				img {
					display: flex;
				}
			}

			.title-and-desc {
				max-width: 60%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 0 0.75rem;

				.text {
					flex: 1;

					.title-8 {
						font-size: 1.2rem;
						line-height: 1;
					}

					.subtitle-8 {
						font-size: 1.4rem;
						color: $primary;
					}

					.brand-and-code {
						font-size: 0.8rem;
						font-weight: 200;
						color: $grey;

						a {
							color: $grey;

							&:hover {
								color: $primary;
								text-decoration: underline;
							}
						}
					}

					.description {
						font-size: 0.9rem;
						margin-top: 0.75rem;
					}
				}

				.button {
					width: 80%;
				}
			}
		}

		.compatibility {
			margin: $gap 0 0.75rem;
			padding: 1.5rem 0.75rem 0.75rem;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			background: $gray;

			.whatplay {
				width: 100%;
				margin-bottom: 0.75rem;
				font-size: 0.9rem;
				font-weight: 200;
				text-align: center;
			}

			.platform {
				width: 25%;
				display: flex;
				flex-direction: row;
				margin: 0.25rem 0;
				padding: 0.75rem;

				.imgWrapper {
					width: 20%;
					display: flex;
					align-items: center;
				}

				.name-and-detail {
					margin-left: 1rem;
					font-weight: 200;

					.platform-name {
						font-size: 0.9rem;
					}

					.platform-detail {
						color: $grey;
						font-size: 0.5rem;
					}
				}
			}

			p {
				height: 0.75rem;
				width: 100%;
			}

			.asterisk {
				width: 100%;
				font-size: 0.3rem;
				font-weight: 200;
				text-align: center;
				color: $grey-light;

				a {
					color: $grey-light;

					&:hover {
						color: $primary;
						text-decoration: underline;
					}
				}
			}
		}

		.screenshot {
			width: 100%;
		}

		.nearly {
			text-align: center;
			padding: $gap 0 0.75rem;
		}

		.columns {
			display: flex;
			max-width: $fullhd / 2;
			margin: auto;
			padding: 0.75rem;

			.column {
				.item {
					display: flex;
					align-items: center;
					position: relative;
					cursor: pointer;

					img {
						border-radius: $radius;
					}

					.overlay {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						height: 100%;
						width: 100%;

						display: flex;
						flex-direction: column;
						align-items: center;

						border: 3px solid transparent;
						border-radius: $radius;
						transition: 0.2s;

						.top,
						.center,
						.bottom {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						}

						.top {
							flex: 2;
							color: #ffffff;

							p {
								font-size: 0.9rem;
							}

							h2 {
								font-size: 1.2rem;
							}
						}

						.center {
							flex: 4;
							opacity: 0;
						}

						.bottom {
							flex: 3;
							color: $primary;

							p {
								font-size: 1.4rem;
								margin-bottom: 0.25rem;
							}

							.buy {
								font-size: 1rem;
								padding: 0 0.75rem 0.25rem;
								border: 3px solid $primary;
								border-radius: $radius;
								background: $primary;
								color: #ffffff;
								box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
								transition: 0.2s;
							}
						}

						&:hover {
							border: 3px solid $primary;
							box-shadow: 7px 7px rgba(0, 0, 0, 0.2);
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 1023px) {
		.item {
			.detail {
				.imgWrapper {
					width: 100%;
					margin-bottom: 0.75rem;
				}

				.title-and-desc {
					max-width: 100%;
					padding: 0;

					.button {
						margin: $gap 0;
					}
				}
			}

			.compatibility {
				margin: 0;

				.platform {
					width: 50%;
				}
			}

			.columns {
				.column {
					padding-bottom: 0;

					.item {
						.overlay {
							.top {
								p {
									font-size: 0.6rem;
								}

								h2 {
									font-size: 0.8rem;
								}
							}

							.bottom {
								p {
									font-size: 1rem;
									margin-bottom: 0;
								}

								.buy {
									font-size: 0.8rem;
									padding: 0 0.5rem 0.1rem;
								}
							}
						}
					}
				}

				.column:nth-child(odd) {
					padding-right: 0.375rem;
				}

				.column:nth-child(even) {
					padding-left: 0.375rem;
				}
			}
		}
	}
</style>
