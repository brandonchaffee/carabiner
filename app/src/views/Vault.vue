<template>
  <div id="vault">
    <button @click="getProjects">Click Me</button>
    <Locker></Locker>
  </div>
</template>

<script>
import Locker from '@/components/Locker'

export default {
  name: 'Vault',
  components: {
    Locker
  },
  methods: {
    getProjects () {
      this.$store.state.contract.instance().methods.getHexSetCount().call({
        gas: 300000,
        from: this.$store.state.web3.coinbase
      }, function(error, result) {
        if (error) {
          console.log('Error in project event handler: ' + error)
        } else {
          console.log(result)
        }
      })
    }
  }
}
</script>

<style scoped>
#vault {
}
</style>
