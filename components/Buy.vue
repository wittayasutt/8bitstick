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
            <input class="input" type="text" placeholder="แปดบิท สติ๊ก">
          </div>
        </div>
        <div class="field">
          <label class="label">ที่อยู่</label>
          <div class="control">
            <textarea class="textarea"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">โทรศัพท์</label>
          <div class="control">
            <input class="input" type="text" placeholder="080-000-0000">
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
                <td class="center">{{itemPrice}}</td>
              </tr>
              <tr v-if="addons !== '-'">
                <td>{{item.addons[0].title}}</td>
                <td class="center">1</td>
                <td class="center">{{item.addons[0].price}}</td>
              </tr>
              <tr>
                <td>ค่าจัดส่ง {{post}}</td>
                <td class="center"></td>
                <td class="center">{{postPrice}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th class="center">
                  {{totalPrice}}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <a class="button is-primary is-rounded" @click="buy">
          <div class="fb-login">
            <i class="fa fa-facebook"></i>
          </div>
          ชำระสินค้า
        </a>
        <div class="asterisk">ในการซื้อสินค้าต้องยืนยันตัวตนผ่าน facebook ทางเว็บไซต์จะไม่มีการดึงข้อมูลส่วนตัวต่างๆจากลูกค้ามาใช้งาน และไม่แชร์โพสต์อัตโนมัติ</div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { parseInt } from 'lodash'

  export default {
  	data() {
  		return {
  			number: 1,
  			type: this.item.type[0],
  			addons: '-',
  			post: 'ลงทะเบียน'
  		}
  	},
  	props: ['item'],
  	methods: {
  		buy() {
  			FB.login(function(response) {
  				if (response.authResponse) {
  					FB.api(
  						`/164476634167002?fields=access_token`,
  						{ accessToken: response.authResponse.accessToken },
  						response => {
  							console.log('response', response)
  						}
  					)
  				}
  			})
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
  	}
  }
</style>
