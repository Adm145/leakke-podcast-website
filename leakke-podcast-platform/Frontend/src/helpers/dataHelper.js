import {api} from '../api/api'

export const dataApi = {

  get: async (lng) => {
    return api.send('get', `/${lng}`, null, lng)
  },

  add: async (lng, payload) => {
    return api.send('post', `/${lng}`, payload)
  },

  update: async (lng, payload) => {
    return api.send('put', `/${lng}`, payload)
  },

  remove: async (lng, payload) => {
    return api.send('delete', `/${lng}`, payload)
  }
}