import api from './api'

export default{
    async getLocations(){
        try {
            const res = await api.get('/locations')
            return res
        } catch (error) {
            return error
        }
    }
} 