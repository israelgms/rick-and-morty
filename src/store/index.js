import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import episodio from './modules/episodio'
import local from './modules/local'
import personagem from './modules/personagem'

export default new Vuex.Store({
  modules:{
    episodio,
    local,
    personagem
  }
})
