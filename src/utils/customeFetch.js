import axios from 'axios'

const customeFetch = axios.create({
  baseURL: 'https://jocestech-backend-fullstack.onrender.com/api/v1',
})

export default customeFetch
