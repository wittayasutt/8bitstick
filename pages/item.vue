<template>
  <div>
    <navbar :other="true" />
    <item :showToTop="showToTop" />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Item from '~/components/Item.vue'
  import { mapGetters } from 'vuex'

  export default {
  	scrollToTop: true,
  	components: {
  		Navbar,
  		Item
  	},
  	data() {
  		return {
  			showToTop: false
  		}
  	},
  	beforeMount() {
  		window.addEventListener('scroll', this.handleScroll)
  	},
  	mounted() {
  		var _this = this

  		window.fbAsyncInit = function() {
  			FB.init({
  				appId: _this.fbAppID,
  				autoLogAppEvents: true,
  				xfbml: true,
  				version: 'v2.11'
  			})
  		}
  		;(function(d, s, id) {
  			var js,
  				fjs = d.getElementsByTagName(s)[0]
  			if (d.getElementById(id)) {
  				return
  			}
  			js = d.createElement(s)
  			js.id = id
  			js.src = 'https://connect.facebook.net/en_US/sdk.js'
  			fjs.parentNode.insertBefore(js, fjs)
  		})(document, 'script', 'facebook-jssdk')
  	},
  	methods: {
  		handleScroll() {
  			this.showToTop = window.scrollY > 400 ? true : false
  		}
  	},
  	computed: {
  		...mapGetters({
  			fbAppID: 'getFbAppID'
  		})
  	}
  }
</script>
