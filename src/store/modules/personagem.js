import serviceApi from '../../service/personagem'

export default {
  namespaced: true,
  state: {
    personagens: []
  },
  mutations: {
    SET_PERSONAGENS(state, payload) {
      state.personagens = payload
      //coloca o payload enviado pela action dentro do state
    }
  },
  actions: {
    async getPersonagens(context) {
      const res = await serviceApi.getPersonagens()
      //Commitando dentro da mutation o payload res.data.results
      context.commit('SET_PERSONAGENS', res.data.results)
    }
  },

  //observa o state e retorna sempre que há alterações
  getters: {
    listPersonagens(state) {
      return state.personagens
    }
  },
}
