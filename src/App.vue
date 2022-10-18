<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <my-wavesurfer :audio-src="'./assets/test.mp3'" :down-url="'./assets/test.mp3'" style="margin: 10px 0 20px;" /> -->
    <Shop :num="num"></Shop>
    <Gouwu></Gouwu>    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyWavesurfer from './package/MyWavesurfer/index.vue'
import Shop from './components/shop.vue'
import Gouwu from './components/gouwu.vue'

export default {
  name: 'App',
  components: {
    Shop,
    Gouwu
  },
  data() {
    return {
      num: ''
    }
  }
}
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
