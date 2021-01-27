import { BaseFilterModel } from '../base/base-filter.model'

export class PersonsFilterModel extends BaseFilterModel {
    user_id?: number;
    filter_id?: number;
    first_char?: string;
}
