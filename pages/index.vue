<template>
  <div>
    <welcome ref="welcome" :toStart="toStart" />
    <div id="start" class="body">
      <navbar ref="navbar" :bottom="navbarBottom" :toStart="toStart" :toPlay="toPlay" :toProduct="toProduct" :toContact="toContact" :inStart="inStart" :inPlay="inPlay" :inProduct="inProduct" :inContact="inContact" />
      <start ref="start" :toProduct="toProduct" :inStart="inStart" />
      <play id="howto" ref="play" :inPlay="inPlay" />
      <product id="product" ref="product" :inProduct="inProduct" />
      <contact id="contact" ref="contact" />
    </div>
  </div>
</template>

<script>
  import Welcome from '~/components/Welcome.vue'
  import Navbar from '~/components/Navbar.vue'
  import Start from '~/components/Start.vue'
  import Play from '~/components/Play.vue'
  import Product from '~/components/Product.vue'
  import Contact from '~/components/Contact.vue'
  import jump from 'jump.js'

  export default {
  	data() {
  		return {
  			navbarBottom: false,
  			inStart: false,
  			inPlay: false,
  			inProduct: false,
  			inContact: false
  		}
  	},
  	components: {
  		Welcome,
  		Navbar,
  		Start,
  		Play,
  		Product,
  		Contact
  	},
  	created() {
  		this.$store.dispatch('initProduct')
  	},
  	beforeMount() {
  		window.addEventListener('scroll', this.handleScroll)
  	},
  	methods: {
  		handleScroll() {
  			if (this.$refs.welcome && this.$refs.navbar) {
  				const welcome = this.$refs.welcome.$el.clientHeight
  				const navbar = this.$refs.navbar.$el.clientHeight
  				this.navbarBottom = window.scrollY > welcome + navbar ? true : false

  				this.checkNavbar()
  			}
  		},
  		checkNavbar() {
  			const offset = 500

  			const startTop = this.$refs.welcome.$el.clientHeight

  			const startBottom = startTop + this.$refs.start.$el.clientHeight
  			const howtoBottom = startBottom + this.$refs.play.$el.clientHeight
  			const productBottom = howtoBottom + this.$refs.product.$el.clientHeight
  			const contactBottom = contactBottom + this.$refs.contact.$el.clientHeight

  			this.inStart =
  				window.scrollY + offset > startTop &&
  				window.scrollY + offset < startBottom
  					? true
  					: false
  			this.inPlay =
  				window.scrollY + offset > startBottom &&
  				window.scrollY + offset < howtoBottom
  					? true
  					: false
  			this.inProduct =
  				window.scrollY + offset > howtoBottom &&
  				window.scrollY + offset < productBottom
  					? true
  					: false
  			this.inContact =
  				window.scrollY + offset > productBottom &&
  				window.scrollY + offset < contactBottom
  					? true
  					: false
  		},
  		toStart() {
  			jump('#start', {
  				duration: 1000
  			})
  		},
  		toPlay() {
  			jump('#howto', {
  				duration: 1000
  			})
  		},
  		toProduct() {
  			jump('#product', {
  				duration: 1000
  			})
  		},
  		toContact() {
  			jump('#contact', {
  				duration: 1000
  			})
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .body {
  	position: relative;
  	top: 100vh;
  	min-height: 100vh;
  	background: #ffffff;
  	border-top-left-radius: $radius;
  	border-top-right-radius: $radius;
  }
</style>
