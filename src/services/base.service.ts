import axios from 'axios'

import { BaseFilterModel } from '@/models/base/base-filter.model'

export abstract class BaseService <F extends BaseFilterModel> {
  private readonly apiUrl: string = 'https://api.pipedrive.com/v1'
  private readonly token: string = 'c4fd9cbd8465a838292d49db713118e8a18ed93f'
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
