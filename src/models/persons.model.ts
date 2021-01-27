import { BaseResponseModel } from './base/base-response.model'
import { AdditionalDataModel } from './additional-data.model'
import { PersonsDataModel } from './persons-data.model'

export class PersonsModel extends BaseResponseModel<PersonsDataModel[]> {
    additional_data: AdditionalDataModel = new AdditionalDataModel();
}
