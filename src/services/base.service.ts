import axios from 'axios'

import { API_TOKEN, API_URL } from '@/config'

import { BaseFilterModel } from '@/models/base/base-filter.model'

export abstract class BaseService <F extends BaseFilterModel> {
  private readonly apiUrl: string = API_URL
  private readonly token: string = API_TOKEN
  private readonly requestParams = {
    api_token: this.token
  }

  public get (endpoint: string, parameters: F) {
    Object.assign(parameters, this.requestParams)

    return axios.get(`${this.apiUrl}${endpoint}`, {
      params: parameters
    }).catch(error => {
      throw error.response.data
    })
  }

  public post (endpoint: string, data: object) {
    return axios.post(`${this.apiUrl}${endpoint}`, data, {
      params: this.requestParams
    }).catch(error => {
      throw error.response.data
    })
  }

  public delete (endpoint: string) {
    return axios.delete(`${this.apiUrl}${endpoint}`, {
      params: this.requestParams
    }).catch(error => {
      throw error.response.data
    })
  }
}
