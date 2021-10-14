import ServiceApi from '../../service/local'

export default {
    namespaced: true,
    state: {
        locais: []
    },
    mutations: {
        SET_LISTA(state, payload) {
            state.locais = payload
        }
    },
    actions: {
        async getLocais(context) {
            const res = await ServiceApi.getLocais()
            context.commit('SET_LISTA', res.data.results)
        }
    },
    getters: {
        listLocais(state) {
            return state.locais
        }
    }
}