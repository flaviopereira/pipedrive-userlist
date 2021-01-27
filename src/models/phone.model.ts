export class PhoneModel {
    label: string | null
    primary: boolean | null
    value: string | null

    constructor (label: string | null, primary: boolean | null, value: string | null) {
      this.label = label
      this.primary = primary
      this.value = value
    }
}
