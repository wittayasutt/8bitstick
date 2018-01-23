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
		<div id="fb-root"></div>
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
	import { mapGetters } from 'vuex'

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
		head() {
			return {
				title:
					'8bitstick ศูนย์รวมจอยสติ๊ก | Joystick, Gamepad, Controller, Mobile, PC, Android, iPhone, Steam',
				meta: [
					{
						name: 'description',
						content:
							'8bitstick ศูนย์รวมจอยสติ๊กสำหรับ Mobile, PC, Android, iPhone, Steam คุณภาพสูง | Joystick, Gamepad, Controller, Bluetooth, Wireless'
					},
					{
						name: 'keywords',
						content:
							'8bitstick,จอย,จอยสติ๊ก,Joystick,Gamepad,Controller,Mobile,PC,Android,iPhone,Steam,8bitdo'
					},
					{
						'http-equiv': 'content-language',
						content: 'th'
					},
					{
						'http-equiv': 'content-type',
						content: 'text/html; charset=UTF-8'
					},
					{
						name: 'robots',
						content: 'index, follow'
					},
					{
						property: 'og:url',
						content: 'http://www.8bitstick.com/'
					},
					{
						property: 'og:type',
						content: 'website'
					},
					{
						property: 'og:title',
						content: '8bitstick ศูนย์รวมจอยสติ๊ก | Joystick, Gamepad, Controller, Mobile, PC, Android, iPhone, Steam'
					},
					{
						property: 'og:description',
						content: '8bitstick ศูนย์รวมจอยสติ๊กสำหรับ Mobile, PC, Android, iPhone, Steam คุณภาพสูง | Joystick, Gamepad, Controller, Bluetooth, Wireless'
					},
					{
						property: 'og:image',
						content: 'http://www.8bitstick.com/welcome/thumbnail.jpg'
					}
				]
			}
		},
		created() {
			this.$store.dispatch('initProduct')
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
				const contactBottom = productBottom + this.$refs.contact.$el.clientHeight

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
		},
		computed: {
			...mapGetters({
				fbAppID: 'getFbAppID'
			})
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
