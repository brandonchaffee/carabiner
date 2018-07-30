<template>
  <div id="vault">
    <h1 v-if="isUnlocked">Hi!</h1>
    <Locker v-else>No</Locker>
    <!-- <div class="passwordSet"
      v-for="item in passwordSet"
      v-bind:key="item.id"
    > -->
  </div>
</template>

<script>
import Locker from '@/components/Locker'

export default {
  name: 'Vault',
  components: {
    Locker
  },
  data () {
    return {
      isUnlocked: false
    }
  }
}
</script>

<style scoped>
#vault {
}
</style>
