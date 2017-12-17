<template>
  <div class="items">
    <div class="container">
      <div class="head">
        <div class="item pixel">
          &lt;</div>
        <div class="item pixel">1/12</div>
        <div class="item pixel">&gt;</div>
      </div>
      <div class="body">
        test
        <nuxt-child :key="$route.params.id" /> test
      </div>
      <div class="foot">
        <div class="item pixel">
          &lt;</div>
        <div class="item pixel">1/12</div>
        <div class="item pixel">&gt;</div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }

  @media screen and (max-width: 768px) {
  	.items {
  		padding-top: 0.75rem;
  		padding-bottom: 0.75rem;

  		.container {
  			margin: 0.75rem;
  		}
  	}
  }
</style>
