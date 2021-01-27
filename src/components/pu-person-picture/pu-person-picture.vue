<template src="./pu-person-picture.html"></template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'puPersonPicture',
  props: {
    person: Object,
    size: {
      type: String,
      default: 'S'
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./pu-person-picture.scss"></style>
