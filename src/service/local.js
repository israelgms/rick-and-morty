import api from './api'

export default{
    async getLocais(){
        try {
            const res = await api.get('/location')
            return res
        } catch (error) {
            return error
        }
    }
} 