<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

import { IResolveVal } from './extends/typings'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    ;(this as any)
      .modal('标题', '是否退出？', { textAlign: 'center' }, true)
      .then((res: IResolveVal) => {
        console.log(res.type)
      })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
