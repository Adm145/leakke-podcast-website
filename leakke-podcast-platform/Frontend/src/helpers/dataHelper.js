import { api } from 'Api'

export const usersApi = {

  get: async () => {
    return api.send('get', '/users')
  },

  getUser: async () => {
    return api.send('get', `/users/user`)
  },

  getUserById: async (itemId) => {
    return api.send('get', `/users/${itemId}`)
  },

  add: async (payload) => {
    return api.send('post', '/users', payload)
  },

  remove: async (itemId) => {
    return api.send('delete', `/users/${itemId}`)
  },

  login: async (payload) => {
    return api.send('post', '/auth/login', payload)
  },

  updateUser: async (itemId, payload) => {
    return api.send('put', `/auth/profile/update/${itemId}`, payload)
  },

  savePet: async (itemId, payload) => {
    return api.send('put', `/users/pet/${itemId}/save`, payload)
  },

  fosterPet: async (itemId, payload) => {
    return api.send('put', `/users/pet/${itemId}/foster`, payload)
  },

  adoptPet: async (itemId, payload) => {
    return api.send('put', `/users/pet/${itemId}/adopt`, payload)
  },

  returnPet: async (itemId, payload) => {
    return api.send('put', `/users/pet/${itemId}/return`, payload)
  },
}