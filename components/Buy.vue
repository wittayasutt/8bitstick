<template>
  <section class="buy">
    <div class="order">สั่งซื้อสินค้า</div>
    <div class="columns">
      <div class="column is-half">
        <div class="head-label">สินค้า</div>
        <div class="field" v-if="item.type.length > 0">
          <label class="label">เลือกประเภท</label>
          <div class="control">
            <div class="select">
              <select v-model="type">
                <option v-for="(t, index) in item.type" :key="index">{{t}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">จำนวน</label>
          <div class="control">
            <input class="input" type="number" value="1" min="1" v-model="number">
          </div>
        </div>
        <div class="field" v-if="item.addons.length > 0">
          <label class="label">เพิ่มอุปกรณ์</label>
          <div class="control">
            <div class="select">
              <select v-model="addons">
                <option>-</option>
                <option v-for="(addon, index) in item.addons" :key="index">{{addon.title}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="head-label">ข้อมูลการจัดส่ง</div>
        <div class="field">
          <label class="label">ชื่อ</label>
          <div class="control">
            <input class="input" type="text" placeholder="แปดบิท สติ๊ก" v-model="recipient">
          </div>
        </div>
        <div class="field">
          <label class="label">ที่อยู่</label>
          <div class="control">
            <textarea class="textarea" v-model="location"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">โทรศัพท์</label>
          <div class="control">
            <input class="input" type="text" placeholder="080-000-0000" v-model="tel">
          </div>
        </div>
        <div class="field">
          <label class="label">การจัดส่ง</label>
          <div class="control">
            <div class="select">
              <select v-model="post">
                <option>ลงทะเบียน</option>
                <option>EMS</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-half right">
        <div class="head-label">สรุปการสั่งซื้อ</div>
        <div class="tableWrapper">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th class="product">ชื่อสินค้า</th>
                <th class="center">จำนวน</th>
                <th class="center">ราคา</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{item.title}} {{type}}</td>
                <td class="center">{{number}}</td>
                <td class="center">{{commaNumber(itemPrice)}}</td>
              </tr>
              <tr v-if="addons !== '-'">
                <td>{{item.addons[0].title}}</td>
                <td class="center">1</td>
                <td class="center">{{commaNumber(item.addons[0].price)}}</td>
              </tr>
              <tr>
                <td>ค่าจัดส่ง {{post}}</td>
                <td class="center"></td>
                <td class="center">{{commaNumber(postPrice)}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th class="center">
                  {{commaNumber(totalPrice)}}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <a class="button is-primary is-rounded" @click="buyFB">
          <div class="fb-login">
            <i class="fa fa-facebook"></i>
          </div>
          สั่งสินค้าทาง facebook
        </a>
        <!-- <div class="asterisk">* เป็นช่องทางชำระสินค้าที่สะดวกกว่า</div> -->
        <!-- <div class="or">หรือ</div>
        <div class="control email">
          <input class="input" type="text" placeholder="Email ที่ต้องให้ติดต่อกลับ" v-model="email">
        </div>
        <a class="button is-primary is-rounded" @click="buyEmail">
          <div class="fb-login">
            <i class="fa fa-envelope"></i>
          </div>
          ชำระสินค้าทาง Email
        </a> -->
      </div>
    </div>

    <div class="modal" :class="{'is-active': show}">
      <div class="modal-background" @click="hideCheckout"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">ขอบคุณสำหรับการสั่งซื้อ</p>
          <button class="delete" aria-label="close" @click="hideCheckout"></button>
        </header>
        <section class="modal-card-body">
          <p>ระบบได้ทำการส่งข้อความไปยัง Facebook Messenger ของ 8bitstick</p>
          <p>โดยมีข้อความดังต่อไปนี้</p><br>

          <div class="message">
            <p>{{message.name}}</p>
            <p>{{message.product}}</p>
            <p>{{message.addons}}</p>
            <p>{{message.post}}</p>
            <p>{{message.price}}</p><br>

            <p>{{message.recipient}}</p>
            <p>{{message.location}}</p>
            <p>{{message.tel}}</p>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { parseInt } from 'lodash'
  import commaNumber from 'comma-number'

  export default {
  	data() {
  		return {
  			number: 1,
  			type: this.item.type[0],
  			addons: '-',
  			recipient: '',
  			location: '',
  			post: 'ลงทะเบียน',
  			tel: '',
  			email: '',
  			show: false,
  			message: {
  				name: '-',
  				product: '-',
  				addons: '-',
  				post: '-',
  				price: 0,
  				recipient: '-',
  				location: '-',
  				tel: '-'
  			},
  			sendMessage: ''
  		}
  	},
  	props: ['item', 'showBuyFb'],
  	methods: {
  		buyFB() {
  			this.setMessage()

  			// const _this = this
  			// FB.getLoginStatus(function(response) {
  			// 	if (response.status === 'connected') {
  			// 		_this.setMessage()
  			// 	} else {
  			// 		FB.login(function(response) {
  			// 			if (response.authResponse) {
  			// 				_this.setMessage()
  			// 			}
  			// 		})
  			// 	}
  			// })
  		},
  		buyEmail() {
  			this.setMessage()
  			this.show = true
  		},
  		setMessage() {
  			let message = {}

  			message.name = `คุณ ${
  				this.recipient ? this.recipient : '-'
  			} ได้สั่งซื้อสินค้า`
  			message.product = `ชื่อสินค้า ${this.item.brand} ${this.item.title} ${
  				this.type ? this.type : ''
  			} จำนวน ${this.number} ชิ้น ราคา ${commaNumber(this.itemPrice)}`
  			message.addons =
  				this.addons !== '-'
  					? `เพิ่มอุปกรณ์ ${this.item.addons[0].title} ราคา ${commaNumber(
  							this.item.addons[0].price
  						)}`
  					: 'เพิ่มอุปกรณ์ -'
  			message.post = `การจัดส่ง ${this.post} ราคา ${commaNumber(
  				this.postPrice
  			)}`
  			message.price = `รวมราคา ${commaNumber(this.totalPrice)}`
  			message.recipient = `จัดส่ง ${
  				this.recipient ? this.recipient : 'ไม่ระบุชื่อผู้รับ'
  			}`
  			message.location = this.location ? this.location : 'ไม่ระบุที่อยู่จัดส่ง'
  			message.tel = `ติดต่อ ${this.tel ? this.tel : '-'}`

  			this.message = message
  			this.sendMessage = `${message.name}\n${message.product}\n${
  				message.addons
  			}\n${message.post}\n${message.price}\n\n${message.recipient}\n${
  				message.location
  			}\n${message.tel}`

  			this.showBuyFb(this.message, this.sendMessage)
  		},
  		hideCheckout() {
  			this.show = false
  		},
  		commaNumber(number) {
  			return commaNumber(number)
  		}
  	},
  	computed: {
  		...mapGetters({
  			fbAppID: 'getFbAppID'
  		}),
  		itemPrice: function() {
  			return this.item.price * parseInt(this.number)
  		},
  		postPrice: function(param) {
  			if (this.post === 'EMS') return 50
  			else return 30
  		},
  		totalPrice: function() {
  			let total = this.itemPrice

  			total += this.postPrice
  			if (this.addons !== '-') total += this.item.addons[0].price

  			return total
  		}
  	}
  }
</script>

<style lang="scss" scoped>
  .buy {
  	max-width: 768px;
  	padding: 0.75rem;
  	margin-bottom: 0.75rem;

  	.order {
  		margin: $gap 0 0.75rem;
  		text-align: center;
  	}

  	.columns {
  		.column {
  			.head-label {
  				margin: 1.5rem 0 0.75rem 0.75rem;
  				font-size: 0.9rem;
  			}

  			.field {
  				display: flex;
  				align-items: center;

  				.label {
  					width: 80px;
  					margin-bottom: 0;
  					margin-right: 0.75rem;
  					font-size: 0.9rem;
  					font-weight: 200;
  					text-align: right;
  				}

  				.control {
  					width: 260px;

  					input {
  						padding-left: 0.75rem;
  					}

  					.select {
  						width: 100%;

  						select {
  							width: 100%;
  						}
  					}
  				}
  			}
  		}

  		.column.right {
  			display: flex;
  			flex-direction: column;

  			.tableWrapper {
  				flex: 1;
  				padding-left: 0.75rem;

  				table {
  					padding-left: $gap;

  					.product {
  						width: 50%;
  					}

  					.center {
  						text-align: center;
  					}

  					th {
  						font-weight: normal;
  						font-size: 0.9rem;
  					}

  					td {
  						font-weight: 200;
  						font-size: 0.8rem;
  					}
  				}
  			}

  			.button {
  				width: 80%;
  				margin: auto;
  				position: relative;

  				.fb-login {
  					position: absolute;
  					left: 6px;
  					background: #ffffff;
  					height: 24px;
  					width: 24px;
  					border-radius: 50%;

  					i {
  						color: $primary;
  					}
  				}
  			}

  			.asterisk {
  				font-size: 0.7rem;
  				font-weight: 200;
  				margin: 0.75rem auto;
  				text-align: center;
  			}

  			.or {
  				text-align: center;
  				margin: 0.75rem auto;
  			}

  			.email {
  				width: 80%;
  				margin: auto auto 0.75rem;
  			}
  		}
  	}

  	.modal {
  		.modal-card-head {
  			border-radius: $radius $radius 0 0;

  			.modal-card-title {
  				font-size: 1.2rem;
  				text-align: center;
  			}
  		}

  		.modal-card-body {
  			border-radius: 0 0 $radius $radius;

  			.message {
  				padding: 0.75rem;
  			}

  			.button {
  				width: 80%;
  				margin: auto;
  				position: relative;
  				display: flex;

  				.fb-login {
  					position: absolute;
  					left: 6px;
  					background: #ffffff;
  					height: 24px;
  					width: 24px;
  					border-radius: 50%;

  					i {
  						color: $info;
  					}
  				}
  			}
  		}
  	}
  }

  @media screen and (max-width: 768px) {
  	.buy {
  		.columns {
  			.column {
  				.field {
  					.control {
  						width: calc(100% - 80px);
  					}
  				}
  			}
  		}

  		.modal {
  			.modal-card-body {
  				.button {
  					width: 100%;
  				}
  			}
  		}
  	}
  }
</style>
