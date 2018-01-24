<template>
  <section class="article">
    <navbar :other="true" />
    <div class="content">
      <div class="container">
        <div class="head">
          <nuxt-link to="/" class="item back pixel">
            &lt;</nuxt-link>
          <h1 class="item title">[UNBOX] 8Bitdo FC Pro Edition จอยสติ๊กรุ่นต่อยอดความสำเร็จแห่ง Famicom
          </h1>
        </div>
        <div class="body">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;แกะกล่องจอยสติ๊กรุ่น 8Bitdo FC Pro Edition รุ่นที่เพียบพร้อม ทั้งฟังก์ชั่นการใช้งานที่ครบครัน ดีไซน์ที่สวยงามคลาสสิคสวยหรู จะเป็นอย่างไร ไปติดตามชมได้คลิปด้านล่างนี้เลยครับ</p>
          <div class="videoWrapper">
            <iframe src="https://www.youtube.com/embed/rDBzUe8xgZ0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <p>สำหรับใครที่สนใจจอยสติ๊กรุ่นนี้ สามารถดูรายละเอียดได้ที่
            <nuxt-link to="/item/5">8Bitdo FC Pro Edition</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'

  export default {
  	components: {
  		Navbar
  	}
  }
</script>

<style lang="scss" scoped>
  $item-radius: 5px;

  .article {
  	.content {
  		min-height: 100vh;
  		background: $primary;
  		padding-top: $gap;
  		padding-bottom: $gap;

  		.container {
  			max-width: $tablet;
  			background: #ffffff;
  			color: #000000;
  			border-radius: $item-radius;

  			.head {
  				display: flex;
  				flex-direction: row;
  				min-height: 40px;

  				.item {
  					border-bottom: 1px solid $gray;
  				}

  				.item:first-child {
  					border-top-left-radius: $item-radius;
  				}

  				.item:last-child {
  					border-top-right-radius: $item-radius;
  				}

  				.back {
  					min-width: 40px;
  					width: 40px;
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

  				.title {
  					flex: 1;
  					display: flex;
  					justify-content: center;
  					align-items: center;
  					font-size: 1.2rem;
  					margin: 0;
  					padding: 0.25rem;
  				}
  			}

  			.body {
  				padding: 0.75rem;

  				p {
  					margin: 0.75rem 0;
  				}

  				span {
  					color: $primary;
  				}

  				.videoWrapper {
  					position: relative;
  					padding-bottom: 56.25%; /* 16:9 */
  					padding-top: 25px;
  					height: 0;
  				}

  				.videoWrapper iframe {
  					position: absolute;
  					top: 0;
  					left: 0;
  					width: 100%;
  					height: 100%;
  				}
  			}
  		}
  	}
  }

  @media screen and (max-width: 768px) {
  	.article {
  		.content {
  			padding-top: 0.75rem;
  			padding-bottom: 0.75rem;

  			.container {
  				margin: 0.75rem;
  			}
  		}
  	}
  }
</style>
