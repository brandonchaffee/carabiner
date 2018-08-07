<template>
  <div id="app">
    <NavBar/>
    <Vault/>
  </div>
</template>

<script>
import Vault from '@/views/Vault'
import NavBar from '@/views/NavBar'

export default {
  name: 'App',
  components: {
    Vault,
    NavBar
  },
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
  },
  mounted () {
    this.$store.dispatch('getContractInstance')
  }
}

</script>

<style>
#app {
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 !important;
}
</style>
