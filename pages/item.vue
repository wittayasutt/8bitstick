<template>
  <div>
    <navbar :other="true" />
    <item />
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
  	}
  }
</script>
