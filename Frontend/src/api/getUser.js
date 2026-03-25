import api from './axiosInstance'

export const getUser = ()=> api.get('/user')