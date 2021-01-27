<template src="./pu-person-detail.html"></template>

<script lang="ts">
import { defineComponent } from 'vue'

import puPersonPicture from '@/components/pu-person-picture/pu-person-picture.vue'

export default defineComponent({
  name: 'puPersonDetail',
  components: {
    puPersonPicture
  },
  props: {
    person: Object
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./pu-person-detail.scss"></style>
