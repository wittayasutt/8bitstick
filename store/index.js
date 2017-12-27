import Vuex from 'vuex'

import product from './modules/product'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			product
		}
	})
}

export default createStore
