<template>
  <nav class="navbar" :class="{ 'is-primary': bottom, 'no-radius': other }" role="navigation" aria-label="main navigation" v-click-outside="hideNav">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item pixel" href="/">
          8BITSTICK
        </a>

        <a v-if="other" class="navbar-item pixel black" href="/#product">
          BACK-TO-PRODUCT
        </a>

        <button class="button navbar-burger" :class="{ 'no-radius': other }" @click="toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div v-if="!other" class="navbar-end" :class="{ 'is-hidden-touch': hide }">
        <a class="navbar-item pixel" :class="{ 'active': inStart }" @click="toStart">
          START
        </a>
        <a class="navbar-item pixel" :class="{ 'active': inPlay }" @click="toPlay">
          HOW-TO
        </a>
        <a class="navbar-item pixel" :class="{ 'active': inProduct }" @click="toProduct">
          PRODUCT
        </a>
        <a class="navbar-item pixel" :class="{ 'active': inContact }" @click="toContact">
          CONTACT
        </a>
      </div>
      <div v-else class="navbar-end" :class="{ 'is-hidden-touch': hide }">
        <a class="navbar-item pixel" href="/#start">
          START
        </a>
        <a class="navbar-item pixel" href="/#howto">
          HOW-TO
        </a>
        <a class="navbar-item pixel" href="/#product">
          PRODUCT
        </a>
        <a class="navbar-item pixel" href="/#contact">
          CONTACT
        </a>
      </div>
    </div>

    <a class="navbar-item pixel facebook is-hidden-touch" href="/" target="_blank">
      <span class="icon has-text-info">
        <i class="fa fa-facebook-square"></i>
      </span>
    </a>
  </nav>
</template>

<script>
  import ClickOutside from 'vue-click-outside'

  export default {
  	data() {
  		return {
  			hide: true
  		}
  	},
  	props: [
  		'bottom',
  		'toStart',
  		'toPlay',
  		'toProduct',
  		'toContact',
  		'inStart',
  		'inPlay',
  		'inProduct',
  		'inContact',
  		'other'
  	],
  	methods: {
  		toggle(bool) {
  			this.hide = !this.hide
  		},
  		hideNav() {
  			this.hide = true
  		}
  	},
  	directives: {
  		ClickOutside
  	}
  }
</script>

<style lang="scss" scoped>
  $nav-transition: 0.4s;

  .navbar {
  	border-bottom: 1px solid $gray;
  	position: sticky;
  	top: 0vh;
  	z-index: 100;
  	border-top-left-radius: $radius;
  	border-top-right-radius: $radius;
  	transition: $nav-transition;

  	.container {
  		.navbar-brand {
  			a {
  				color: $primary;
  			}

  			.button {
  				border: none;
  				border-top-left-radius: 0;
  				border-bottom-left-radius: 0;
  				border-bottom-right-radius: 0;
  				transition: $nav-transition;
  			}

  			.no-radius {
  				border-top-right-radius: 0;
  			}

  			.black {
  				color: #000000;
  			}

  			&:hover {
  				.black {
  					color: $primary;
  				}
  			}
  		}

  		.navbar-end {
  			a:hover {
  				color: $primary;
  			}
  		}
  	}
  }

  .is-primary {
  	border-bottom: none;
  	border-top-left-radius: 0;
  	border-top-right-radius: 0;
  	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

  	.container {
  		.navbar-brand {
  			a {
  				color: #ffffff;
  			}

  			.button {
  				background: $primary;
  				color: #ffffff;
  				border-top-right-radius: 0;
  			}
  		}

  		.navbar-end {
  			a {
  				color: #ffffff;
  			}

  			a:hover {
  				color: #ffffff;
  			}

  			.active {
  				background: #e60043;
  			}
  		}
  	}

  	.facebook {
  		span > i {
  			color: #ffffff;
  		}

  		&:hover {
  			background: none;

  			span > i {
  				color: #3273dc;
  			}
  		}
  	}
  }

  .no-radius {
  	border-top-left-radius: 0;
  	border-top-right-radius: 0;
  }

  @media screen and (max-width: 1023px) {
  	.is-primary {
  		.container {
  			.navbar-end {
  				a:hover {
  					color: $primary;
  				}

  				.active {
  					background: #ffffff;
  					color: $primary;
  				}
  			}
  		}
  	}
  }
</style>
