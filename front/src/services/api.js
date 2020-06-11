import axios from 'axios'

const api = axios.create({
  baseURL: 'https://secure-mountain-42065.herokuapp.com/'
})

export default api