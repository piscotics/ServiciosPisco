import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-servicios-e3d3.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 👉 Interceptor request (ej: token)
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['x-token'] = token
  }
  return config
})

// 👉 Interceptor response (errores globales)
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Error API:', error.response)
    return Promise.reject(error)
  }
)

export default api