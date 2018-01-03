<template>
  <section class="review">
    <div class="container">
      <div class="item">
        <!-- <div class="eng-text">
          8Bitdo's small, portable control pads are perfect for those times when...look, let’s be real, for when you’re playing emulated Nintendo games on a mobile device.
        </div> -->
        <div class="thai-text">
          " เล็ก เหมาะแก่การพกพา สมบูรณ์แบบเหมาะมองมัน ดูสมจริงเมื่อคุณเล่นเกมของ Nintendo ในโทรศัพท์มือถือ "
        </div>
        <img src="/review/kotaku.png" alt="8bitdo_kotaku_review">
      </div>
      <div class="item">
        <!-- <div class="eng-text">
          If You Love Retro Gaming, the SN30 Pro Is the Only Gamepad You'll Ever Need
        </div> -->
        <div class="thai-text">
          " หากคุณรักในเกมคลาสสิค จอยสติ๊ก 8Bitdo SN30Pro คือหนึ่งเดียวที่คุณจำเป็นต้องมี "
        </div>
        <img src="/review/gizmodo.png" alt="8bitdo_gizmodo_review">
      </div>
      <div class="item">
        <!-- <div class="eng-text">
          8Bitdo's SFC30 Pro And SN30 Pro Game Pads Are Gloriously Nostalgic Yet Very Practical
        </div> -->
        <div class="thai-text">
          " 8Bitdo SF30Pro และ SN30Pro เจิดจรัสและยอดเยี่ยมในการใช้งาน "
        </div>
        <img src="/review/forbes.png" alt="8bitdo_forbes_review">
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
  	props: ['inReview'],
  	watch: {
  		inReview: function(val) {
  			if (val && !this.fade) {
  				this.fade = true
  			}
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .review {
  	.container {
  		max-width: $tablet;
  		display: flex;
  		flex-direction: column;
  		justify-content: center;
  		align-items: center;
  		padding: $container-padding;

  		.item {
  			display: flex;
  			flex-direction: column;
  			justify-content: center;
  			align-items: center;
  			margin-bottom: $gap;

  			.eng-text {
  				font-size: 1rem;
  				color: rgba($grey, 0.6);
  				text-align: center;
  			}

  			.thai-text {
  				font-size: 1.2rem;
  				// color: $primary;
  				text-align: center;
  				text-align: center;
  			}

  			img {
  				width: 20%;
  			}
  		}
  	}
  }
</style>
