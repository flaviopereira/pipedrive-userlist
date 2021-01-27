<template>
  <puPersonList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import puPersonList from './components/pu-person-list/pu-person-list.vue'

export default defineComponent({
  name: 'App',
  components: {
    puPersonList
  }
})
</script>

<style lang="scss" src="@/assets/scss/_global.scss"></style>
