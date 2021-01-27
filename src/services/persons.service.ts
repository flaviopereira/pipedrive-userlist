import { BaseService } from './base.service'
import { PersonsFilterModel } from '../models/filters/persons.filter.model'

import { PersonsModel } from '@/models/persons.model'
import { PersonModel } from '@/models/person.model'

export class PersonsService extends BaseService<PersonsFilterModel> {
  private readonly API_GET_ALL_PERSONS = '/persons'
  private readonly API_DELETE_PERSON = (personId: number) => `/persons/${personId}`

  public async getAllPersons (filterParameters: PersonsFilterModel): Promise<PersonsModel> {
    return await this.get(this.API_GET_ALL_PERSONS, filterParameters).then(
      res => {
        return res.data
      }
    ).catch(
      error => {
        throw error.error
      }
    )
  }

  public async addPerson (person: PersonModel): Promise<PersonsModel> {
    if (!person) {
      console.error('addPerson :: missing param \'person\'')
    }

    return await this.post(this.API_GET_ALL_PERSONS, person).then(
      res => res.data
    ).catch(
      error => {
        throw error.error
      }
    )
  }

  public async deletePerson (personId: number): Promise<PersonsModel> {
    if (!personId) {
      console.error('deletePerson :: missing param \'personId\'')
    }

    return await this.delete(this.API_DELETE_PERSON(personId)).then(
      res => res.data
    ).catch(
      error => {
        throw error.error
      }
    )
  }
}
