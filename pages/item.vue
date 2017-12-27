<template>
  <div>
    <navbar :other="true" />
    <item :showToTop="showToTop" />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Item from '~/components/Item.vue'

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
  	methods: {
  		handleScroll() {
  			this.showToTop = window.scrollY > 400 ? true : false
  		}
  	}
  }
</script>
