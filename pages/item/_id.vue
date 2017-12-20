<template>
  <section class="item">
    <div class="detail">
      <div class="imgWrapper">
        <img :src="item.picture" :alt="item.title">
      </div>
      <div class="title-and-desc">
        <div class="text">
          <h1 class="title-8">{{item.title}}</h1>
          <h2 class="brand-and-code">Brand: {{item.brand}}</h2>
          <div class="brand-and-code">Codename: {{item.codename}}</div>
          <div class="brand-and-code">Support:
            <a href="http://support.8bitdo.com/" target="_blank">8bitdo.com</a>
          </div>
          <article class="description">&nbsp;&nbsp;&nbsp;&nbsp;{{item.desc}}</article>
        </div>
        <a class="button is-primary is-rounded" @click="toBuy">ซื้อเลย!</a>
      </div>
    </div>

    <div v-if="item.support > 0" class="compatibility">
      <h2 class="whatplay">เล่นอะไรได้บ้าง?</h2>
      <div v-for="(platform, index) in compatible" class="platform" :key="index">
        <div class="imgWrapper">
          <img :src="platform.picture" :alt="platform.name">
        </div>
        <div class="name-and-detail">
          <div class="platform-name">{{ platform.name }}</div>
          <div class="platform-detail">{{ platform.detail }}</div>
        </div>
      </div>
      <p></p>
      <div v-if="item.support > 4" class="asterisk">*เครื่องเล่นที่เป็นสีเทา จำเป็นต้องติดตั้งเฟิร์มแวร์จากทาง
        <a href="http://support.8bitdo.com/" target="_blank">8bitdo.com</a> ก่อน</div>
      <div v-if="item.support > 4" class="asterisk">*เครื่องเล่น Switch จะไม่รองรับ HD rumble, s-axis motion control และ amiibo scanning</div>
    </div>

    <div id="buy">FORM</div>

    <img v-for="(screenshot, index) in item.screenshot" :src="screenshot" :alt="item.title" :key="index">
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import jump from 'jump.js'

  export default {
  	validate({ params }) {
  		return !isNaN(+params.id)
  	},
  	fetch({ store, params }) {
  		store.commit('setItem', params.id)
  	},
  	created() {
  		if (this.$store.getters.getProduct.length === 0) {
  			this.$store.dispatch('initProduct')
  		}

  		if (this.$store.getters.getPlatform.length === 0) {
  			this.$store.dispatch('initPlatform')
  		}
  	},
  	methods: {
  		toBuy() {
  			jump('#buy', {
  				duration: 1000,
  				offset: -100
  			})
  		}
  	},
  	computed: {
  		...mapGetters({
  			item: 'getSelectedItem',
  			compatible: 'getCompatible'
  		})
  	}
  }
</script>
<style lang="scss" scoped>
  .item {
  	.detail {
  		display: flex;
  		flex-flow: row wrap;
  		justify-content: center;
  		padding: 0.75rem;

  		.imgWrapper {
  			width: 40%;

  			img {
  				display: flex;
  			}
  		}

  		.title-and-desc {
  			max-width: 60%;
  			display: flex;
  			flex-direction: column;
  			justify-content: center;
  			align-items: center;
  			padding: 0 0.75rem;

  			.text {
  				flex: 1;

  				.title-8 {
  					font-size: 1.4rem;
  				}

  				.brand-and-code {
  					font-size: 0.9rem;
  					font-weight: 200;
  					color: $grey;

  					a {
  						color: $grey;

  						&:hover {
  							color: $primary;
  							text-decoration: underline;
  						}
  					}
  				}

  				.description {
  					font-size: 0.9rem;
  					margin-top: 0.75rem;
  				}
  			}

  			.button {
  				width: 80%;
  			}
  		}
  	}

  	.compatibility {
  		margin: $gap 0;
  		padding: 1.5rem 0.75rem 0.75rem;
  		display: flex;
  		flex-flow: row wrap;
  		align-items: center;
  		background: $gray;

  		.whatplay {
  			width: 100%;
  			margin-bottom: 0.75rem;
  			font-size: 0.9rem;
  			font-weight: 200;
  			text-align: center;
  		}

  		.platform {
  			width: 25%;
  			display: flex;
  			flex-direction: row;
  			margin: 0.25rem 0;
  			padding: 0.75rem;

  			.imgWrapper {
  				width: 20%;
  				display: flex;
  				align-items: center;
  			}

  			.name-and-detail {
  				margin-left: 1rem;
  				font-weight: 200;

  				.platform-name {
  					font-size: 0.9rem;
  				}

  				.platform-detail {
  					color: $grey;
  					font-size: 0.5rem;
  				}
  			}
  		}

  		p {
  			height: 0.75rem;
  			width: 100%;
  		}

  		.asterisk {
  			width: 100%;
  			font-size: 0.3rem;
  			font-weight: 200;
  			text-align: center;
  			color: $grey-light;

  			a {
  				color: $grey-light;

  				&:hover {
  					color: $primary;
  					text-decoration: underline;
  				}
  			}
  		}
  	}
  }

  @media screen and (max-width: 1023px) {
  	.item {
  		.detail {
  			.imgWrapper {
  				width: 100%;
  				margin-bottom: 0.75rem;
  			}

  			.title-and-desc {
  				max-width: 100%;
  				padding: 0;

  				.button {
  					margin: $gap 0;
  				}
  			}
  		}

  		.compatibility {
  			margin: 0;

  			.platform {
  				width: 50%;
  			}
  		}
  	}
  }
</style>
