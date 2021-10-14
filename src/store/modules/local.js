import ServiceApi from '../../service/local'

export default {
    namespaced: true,
    state: {
        locais: []
    },
    mutation: {
        SET_LISTA(state, payload) {
            state.locais = payload
        }
    },
    action: {
        async getLocais(context) {
            const res = ServiceApi.getLocations()
            context.commit('SET_LISTA', res.data.results)
        }
    },
    getters: {
        listLocais(state) {
            return state.locais
        }
    }
}