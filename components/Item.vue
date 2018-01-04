<template>
  <section class="items">
    <div id="items" class="container">
      <div class="head">
        <nuxt-link :to="'/item/'+prev" class="item pixel">
          &lt;</nuxt-link>
        <div class="item pixel" @click="showAllItems">{{getSelectedID || 0}} / {{length || 0}}</div>
        <nuxt-link :to="'/item/'+next" class="item pixel" @click="next">&gt;</nuxt-link>
      </div>
      <div class="body">
        <nuxt-child :key="$route.params.id" />
      </div>
      <div class="foot">
        <nuxt-link :to="'/item/'+prev" class="item pixel">
          &lt;</nuxt-link>
        <div class="item pixel" @click="showAllItems">{{getSelectedID || 0}} / {{length || 0}}</div>
        <nuxt-link :to="'/item/'+next" class="item pixel" @click="next">&gt;</nuxt-link>
      </div>
    </div>

    <div class="toTop" :class="{ hide: !showToTop }" @click="toTop">
      <i class="fa fa-chevron-up"></i>
    </div>

    <div class="modal" :class="{'is-active': show}">
      <div class="modal-background" @click="hideAllItems"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">CHOOSE YOUR WEAPON</p>
          <button class="delete" aria-label="close" @click="hideAllItems"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns is-multiline">
            <div class="column is-one-quarter is-half-mobile" v-for="(item, index) in product" :key="index">
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
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { parseInt } from 'lodash'
  import jump from 'jump.js'
  import commaNumber from 'comma-number'

  export default {
  	data() {
  		return {
  			show: false
  		}
  	},
  	created() {
  		this.$router.afterEach(r => {
  			this.show = false
  		})
  	},
  	methods: {
  		toTop() {
  			jump('#items', {
  				duration: 1000,
  				offset: -60
  			})
  		},
  		showAllItems() {
  			this.show = true
  		},
  		hideAllItems() {
  			this.show = false
  		},
  		commaNumber(number) {
  			return commaNumber(number)
  		}
  	},
  	props: ['showToTop'],
  	computed: {
  		...mapGetters({
  			product: 'getProduct',
  			length: 'getProductLength',
  			getSelectedID: 'getSelectedID'
  		}),
  		prev: function() {
  			const length = parseInt(this.length)
  			const getSelectedID = parseInt(this.getSelectedID)

  			return getSelectedID === 1 ? length : getSelectedID - 1
  		},
  		next: function() {
  			const length = parseInt(this.length)
  			const getSelectedID = parseInt(this.getSelectedID)

  			return getSelectedID === length ? 1 : getSelectedID + 1
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  $item-radius: 5px;

  .items {
  	background: $primary;
  	padding-top: $gap;
  	padding-bottom: $gap;

  	.container {
  		display: flex;
  		flex-direction: column;
  		min-height: 100vh;
  		background: #ffffff;
  		color: #000000;
  		border-radius: $item-radius;
  		max-width: $tablet;

  		.head,
  		.foot {
  			display: flex;
  			flex-direction: row;
  			height: 40px;

  			.item {
  				flex: 1;
  				display: flex;
  				justify-content: center;
  				align-items: center;
  				cursor: pointer;
  				transition: 0.1s;

  				&:hover {
  					background: #f5f5f5;
  					color: $primary;
  				}
  			}
  		}

  		.head {
  			.item {
  				border-bottom: 1px solid $gray;
  			}

  			.item:first-child {
  				border-top-left-radius: $item-radius;
  			}

  			.item:last-child {
  				border-top-right-radius: $item-radius;
  			}
  		}

  		.foot {
  			.item {
  				border-top: 1px solid $gray;
  			}

  			.item:first-child {
  				border-bottom-left-radius: $item-radius;
  			}

  			.item:last-child {
  				border-bottom-right-radius: $item-radius;
  			}
  		}

  		.body {
  			flex: 1;
  		}
  	}

  	.toTop {
  		position: fixed;
  		bottom: $gap;
  		right: $gap;
  		height: 2.5rem;
  		width: 2.5rem;
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		padding-bottom: 5px;
  		background: rgba($gray, 0.6);
  		border-radius: 5px;
  		cursor: pointer;
  		transition: 0.2s;

  		&:hover {
  			background: rgba($gray, 0.5);
  		}
  	}

  	.toTop.hide {
  		visibility: hidden;
  		background: rgba($gray, 0);
  		color: rgba(#000000, 0);
  	}
  }

  .modal {
  	.modal-card-head {
  		border-radius: $radius $radius 0 0;

  		.modal-card-title {
  			font-size: 1.2rem;
  			font-family: 'lilliput-steps', 'Athiti';
  			color: $primary;
  			text-align: center;
  		}
  	}

  	.modal-card-body {
  		border-radius: 0 0 $radius $radius;

  		.columns {
  			display: flex;

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
  								font-size: 0.5rem;
  							}

  							h2 {
  								font-size: 0.7rem;
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
  								font-size: 1rem;
  								margin-bottom: 0.25rem;
  							}
  						}

  						&:hover {
  							border: 3px solid $primary;
  							box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
  						}
  					}
  				}
  			}
  		}
  	}
  }

  @media screen and (max-width: 768px) {
  	.items {
  		padding-top: 0.75rem;
  		padding-bottom: 0.75rem;

  		.container {
  			margin: 0.75rem;
  		}

  		.toTop {
  			bottom: 0.25rem;
  			right: 1rem;
  			background: rgba($grey, 0.2);
  			color: $grey;

  			&:hover {
  				background: rgba($grey, 0.2);
  			}
  		}
  	}

  	.modal {
  		.modal-card-head {
  			margin-top: calc(52px + 0.75rem);
  		}

  		.modal-card-body {
  			.columns {
  				.column {
  					padding-bottom: 0;

  					.item {
  						.overlay {
  							.bottom {
  								p {
  									margin-bottom: 0;
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
