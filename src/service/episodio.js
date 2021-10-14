import api from './api'

export default{
    async getEpisodios(){
        try {
            const res = await api.get('/episode')
            return res
        } catch (error) {
            return error
        }
    }
}