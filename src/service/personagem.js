import api from './api'

export default{
    async getPersonagens(){
        try {
            const res = await api.get('/character') 
            return res           
        } catch (error) {
            console.log(error.message)            
        }
    }
}