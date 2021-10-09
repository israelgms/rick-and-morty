import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import serviceApi from '../service/personagem'

export default new Vuex.Store({
  state: {
    personagens:[]
  },
  mutations: {
    SET_PERSONAGENS(state, res){
      state.personagens = res
    }
  },
  actions: {
    async getPersonagens(context){
      const res = await serviceApi.getPersonagens()
        context.commit('SET_PERSONAGENS', res.data) //reclamando quando coloca o .results 
      }
    },

    getters:{
      listPresonagens(state){
        return state.personagens
      }
    },
  modules: {
  }
})
