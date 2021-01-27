<template src="./pu-person-list.html"></template>

<script lang="ts">
import { defineComponent } from 'vue'

import { PersonsService } from '@/services/persons.service'
import { PersonsFilterModel } from '@/models/filters/persons.filter.model'
import { PersonsDataModel } from '@/models/persons-data.model'
import { PersonModel } from '@/models/person.model'

import puPersonListItem from './pu-person-list-item/pu-person-list-item.vue'
import puHeader from '@/components/pu-header/pu-header.vue'
import puModal from '@/components/pu-modal/pu-modal.vue'
import puAddPersonForm from '@/components/pu-add-person-form/pu-add-person-form.vue'
import puPersonDetail from '@/components/pu-person-detail/pu-person-detail.vue'

const personsService = new PersonsService()

export default defineComponent({
  name: 'puPersonList',
  data () {
    return {
      personsFilterParams: new PersonsFilterModel(),
      persons: [] as PersonsDataModel[],
      filteredPersons: [] as PersonsDataModel[],
      loadMore: false,
      nextStart: 0,
      showPersonDetailModal: false,
      showAddPersonModal: false,
      activePersonDetail: new PersonsDataModel(),
      searchFilter: ''
    }
  },
  components: {
    puHeader,
    puPersonListItem,
    puModal,
    puAddPersonForm,
    puPersonDetail
  },
  mounted () {
    this.personsFilterParams.limit = 5

    this.loadData()
  },
  methods: {
    loadData: function () {
      personsService.getAllPersons(this.personsFilterParams).then(val => {
        this.nextStart = val.additional_data.pagination?.next_start
        this.loadMore = val.additional_data.pagination?.more_items_in_collection

        this.persons = val.data
        this.filteredPersons = this.persons
      }).catch(error => {
        console.error(error)
      })
    },
    loadMoreData: function () {
      this.personsFilterParams.start = this.nextStart

      personsService.getAllPersons(this.personsFilterParams).then(val => {
        this.nextStart = val.additional_data.pagination?.next_start
        this.loadMore = val.additional_data.pagination?.more_items_in_collection

        this.persons = [...this.persons, ...val.data]
        this.filteredPersons = this.persons
        this.searchFilter = ''
      }).catch(error => {
        console.error(error)
      })
    },
    deletePerson: function () {
      personsService.deletePerson(this.activePersonDetail.id).then(() => {
        this.personsFilterParams.start = 0
        this.closePersonDetailModal()
        this.loadData()
      }).catch(error => {
        console.error(error)
      })
    },
    filterByName: function () {
      this.filteredPersons = this.persons.filter(person => {
        return person.name.toLowerCase().includes(this.searchFilter.toLowerCase())
      })
    },
    openPersonDetailModal: function (data: PersonsDataModel) {
      this.activePersonDetail = data
      this.showPersonDetailModal = true
    },
    closePersonDetailModal: function () {
      this.showPersonDetailModal = false
    },
    oepnAddPersonModal: function () {
      this.showAddPersonModal = true
    },
    closeAddPersonModal: function () {
      this.showAddPersonModal = false
    },
    validateForm: function () {
      const comp: any = this.$refs.personForm
      comp.handleSubmit()
    },
    savePersonData: function (person: PersonModel) {
      personsService.addPerson(person).then(() => {
        this.personsFilterParams.start = 0
        this.closeAddPersonModal()
        this.loadData()
      }).catch(error => {
        console.error(error)
      })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./pu-person-list.scss"></style>
