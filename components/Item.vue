<template>
  <section class="items">
    <div id="items" class="container">
      <div class="head">
        <nuxt-link :to="'/item/'+prev" class="item pixel">
          &lt;</nuxt-link>
        <div class="item pixel">{{getSelectedID || 0}} / {{length || 0}}</div>
        <nuxt-link :to="'/item/'+next" class="item pixel" @click="next">&gt;</nuxt-link>
      </div>
      <div class="body">
        <nuxt-child :key="$route.params.id" />
      </div>
      <div class="foot">
        <nuxt-link :to="'/item/'+prev" class="item pixel">
          &lt;</nuxt-link>
        <div class="item pixel">{{getSelectedID || 0}} / {{length || 0}}</div>
        <nuxt-link :to="'/item/'+next" class="item pixel" @click="next">&gt;</nuxt-link>
      </div>
    </div>

    <div class="toTop" :class="{ hide: !showToTop }" @click="toTop">
      <i class="fa fa-chevron-up"></i>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { parseInt } from 'lodash'
  import jump from 'jump.js'

  export default {
  	methods: {
  		toTop() {
  			jump('#items', {
  				duration: 1000,
  				offset: -60
  			})
  		}
  	},
  	props: ['showToTop'],
  	computed: {
  		...mapGetters({
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
  }
</style>
