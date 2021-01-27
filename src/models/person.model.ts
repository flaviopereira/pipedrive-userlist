import { EmailModel } from './email.model'
import { PhoneModel } from './phone.model'

export class PersonModel {
    name: string | null
    owner_id: number | null
    org_id: number | null
    email: EmailModel[] | null
    phone: PhoneModel[] | null
    visible_to: number | null

    constructor (name: string | null, owner_id: number | null, org_id: number | null, email: EmailModel[] | null, phone: PhoneModel[] | null, visible_to: number | null) {
      this.name = name
      this.owner_id = owner_id
      this.org_id = org_id
      this.email = email
      this.phone = phone
      this.visible_to = visible_to
    }
}
