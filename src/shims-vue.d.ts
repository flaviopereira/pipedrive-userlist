/* eslint-disable */
declare module '@vuelidate/core';
declare module '@vuelidate/validators';
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
