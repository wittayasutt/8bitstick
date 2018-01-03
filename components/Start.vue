<template>
  <section class="start">
    <div class="container">
      <h2 class="title-pixel title-start"></h2>
      <div class="joystick">
        <img :class="{ fade: fade }" src="/play/start.jpg" alt="joystick">
      </div>
      <h1>เปลี่ยนโทรศัพท์ของคุณเป็นเครื่องเล่นเกมคอนโซลแบบพกพา!</h1>
      <div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">8Bitdo</a> จอยสติ๊กบลูทูธคุณภาพสูง จากประเทศ Hong Kong ที่รองรับการใช้งานบนมือถือ/คอมพิวเตอร์ Android, iOS, Windows, macOS หรือแม้กระทั่งเครื่องเล่นเกม Nintendo Switch และอื่นๆ ด้วยการออกแบบคลาสสิคสไตล์ Famicom/Super Famicom อันเป็นที่หลงใหลของเกมเมอร์ยุค 80-90 จึงเป็นที่นิยมยิ่งในต่างประเทศ และล่าสุดกับรางวัล
        <a href="/prize-e3" target="_blank">Best Tech of E3 2017</a> หากคุณเป็นเกมเมอร์มือเก๋า พร้อมเปลี่ยนโทรศัพท์ของคุณเป็นเครื่องเล่นเกมคุณภาพ พลาดไม่ได้กับจอยสติ๊กเหล่านี้ !
      </div>
      <div class="more">
        <nuxt-link to="/item/1" class="button is-primary is-rounded">ซื้อเลย!</nuxt-link>
        <a class="button is-rounded" @click="toProduct">ดูรุ่นต่างๆ</a>
      </div>
    </div>
  </section>
</template>

<script>
  import Typed from 'typed.js'

  export default {
  	data() {
  		return {
  			fade: false
  		}
  	},
  	props: ['toProduct', 'inStart'],
  	watch: {
  		inStart: function(val) {
  			if (val && !this.fade) {
  				const options = {
  					strings: ['START PLAYING'],
  					typeSpeed: 100,
  					fadeOut: true,
  					showCursor: false
  				}

  				const typed = new Typed('.title-start', options)
  				this.fade = true
  			}
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .start {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	padding: $container-padding;

  	.container {
  		.joystick {
  			text-align: center;

  			img {
  				opacity: 0;
  			}

  			.fade {
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

  		.button {
  			max-width: 400px;
  			margin: $gap auto;
  			padding: 0 1.5rem;
  			font-weight: 200;
  		}

  		h1 {
  			max-width: $tablet;
  			margin: auto;
  			text-align: center;
  			color: $primary;
  			font-size: 1.2rem;
  		}

  		.text {
  			max-width: $tablet;
  			margin: 0.75rem auto;
  			font-weight: 200;
  		}

  		.more {
  			text-align: center;

  			.button {
  				margin: $gap 0.25rem;
  			}
  		}
  	}
  }
</style>
