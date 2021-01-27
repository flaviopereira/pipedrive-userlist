<template src="./pu-add-person-form.html"></template>

<script lang="ts">
import { reactive, toRef, defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, integer, email } from '@vuelidate/validators'
import { PersonModel } from '@/models/person.model'
import { EmailModel } from '@/models/email.model'
import { PhoneModel } from '@/models/phone.model'

export default defineComponent({
  name: 'puAddPersonForm',
  emits: ['savePersonData'],
  setup () {
    const phoneValidator = (value: any) => value ? /^[+]?\d*$/.test(value) : true

    const formData = reactive({
      name: null,
      owner_id: null,
      org_id: null,
      email: null,
      phone: null,
      visible_to: null
    })

    const rules = {
      name: { required },
      owner_id: { integer },
      org_id: { integer },
      email: { email },
      phone: { phoneValidator },
      visible_to: { integer }
    }

    const validation = useVuelidate(rules, {
      name: toRef(formData, 'name'),
      owner_id: toRef(formData, 'owner_id'),
      org_id: toRef(formData, 'org_id'),
      email: toRef(formData, 'email'),
      phone: toRef(formData, 'phone'),
      visible_to: toRef(formData, 'visible_to')
    })

    return {
      formData,
      validation
    }
  },
  methods: {
    handleSubmit: function () {
      this.validation.$touch()

      if (!this.validation.$invalid) {
        const email = this.formData.email ? [new EmailModel(this.formData.email, true, this.formData.email)] : null
        const phone = this.formData.phone ? [new PhoneModel(this.formData.phone, true, this.formData.phone)] : null
        const person = new PersonModel(
          this.formData.name,
          this.formData.owner_id,
          this.formData.org_id,
          email,
          phone,
          this.formData.visible_to
        )

        this.$emit('savePersonData', person)
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./pu-add-person-form.scss"></style>
