<template src="./pu-person-list-item.html"></template>

<script lang="ts">
import { defineComponent } from 'vue'
import draggable from 'vuedraggable'

import puPersonPicture from '@/components/pu-person-picture/pu-person-picture.vue'

export default defineComponent({
  name: 'puPersonListItem',
  emits: ['openPersonDetailModal'],
  props: {
    persons: Array
  },
  components: {
    puPersonPicture,
    draggable
  },
  data () {
    return {
      enabled: true
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./pu-person-list-item.scss"></style>
