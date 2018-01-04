<template>
  <section class="product">
    <div class="container">
      <h2 class="title-pixel title-product"></h2>
      <div class="columns is-multiline">
        <div class="column is-one-quarter is-half-mobile" v-for="(item, index) in product" :key="index">
          <a :href="'/item/'+item.id" class="item" :class="{ fade: fade }">
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
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Typed from 'typed.js'
  import commaNumber from 'comma-number'

  export default {
  	data() {
  		return {
  			fade: false
  		}
  	},
  	props: ['inProduct'],
  	computed: {
  		...mapGetters({
  			product: 'getProduct'
  		})
  	},
  	methods: {
  		commaNumber(number) {
  			return commaNumber(number)
  		}
  	},
  	watch: {
  		inProduct: function(val) {
  			if (val && !this.fade) {
  				const options = {
  					strings: ['CHOOSE YOUR WEAPON'],
  					typeSpeed: 100,
  					fadeOut: true,
  					showCursor: false
  				}

  				const typed = new Typed('.title-product', options)
  				this.fade = true
  			}
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .product {
  	.container {
  		display: flex;
  		justify-content: center;
  		flex-direction: column;
  		padding: $container-padding;

  		.columns {
  			display: flex;

  			.column {
  				.item {
  					display: flex;
  					align-items: center;
  					position: relative;
  					cursor: pointer;
  					opacity: 0;

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

  				.item.fade {
  					animation: fade 1s ease-out forwards;
  				}

  				@keyframes fade {
  					0% {
  						opacity: 0;
  						transform: translateY(50px);
  					}
  					100% {
  						opacity: 1;
  						transform: translateY(0px);
  					}
  				}
  			}
  		}
  	}
  }

  @media screen and (max-width: 768px) {
  	.product {
  		.container {
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
  }
</style>
