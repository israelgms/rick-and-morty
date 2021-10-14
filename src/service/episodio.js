import api from './api'

export default{
    async getEpisodes(){
        try {
            const res = await api.get('/episodes')
            return res
        } catch (error) {
            return error
        }
    }
}