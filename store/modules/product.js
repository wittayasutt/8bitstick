import product from '../../data/product'
import platform from '../../data/platform'
import { find, take, parseInt } from 'lodash'

const state = {
  product: [],
  selectedID: -1,
  platform: []
}

const getters = {
  getProduct: state => {
    return state.product
  },
  getProductLength: state => {
    return state.product.length
  },
  getSelectedID: state => {
    return state.selectedID
  },
  getSelectedItem: state => {
    const product = state.product
    const selectedID = parseInt(state.selectedID)

    return find(product, item => item.id === selectedID)
  },
  getPlatform: state => {
    return state.platform
  },
  getCompatible: state => {
    const product = state.product
    const platform = state.platform
    const selectedID = parseInt(state.selectedID)

    const selectedItem = find(product, item => item.id === selectedID)
    return take(platform, selectedItem.support)
  }
}

const mutations = {
  setProduct(state, product) {
    state.product = product
  },
  setItem(state, id) {
    state.selectedID = id
  },
  setPlatform(state, platform) {
    state.platform = platform
  }
}

const actions = {
  initProduct: ({ commit }) => {
    commit('setProduct', product)
  },
  initPlatform: ({ commit }) => {
    commit('setPlatform', platform)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
