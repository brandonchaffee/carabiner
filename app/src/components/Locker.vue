<template>
  <div id="locker">
    <!-- <PasswordCreator/> -->
    <LockSwitchModal v-if="showModal"/>
    <div v-if="isLocked" id="lock-holder">
      <Lock/>
      <h1>Unlock</h1>
    </div>
    <div v-else>
      <Passwords/>
    </div>
  </div>
</template>

<script>
import Lock from '@/components/Lock'
import LockSwitchModal from '@/components/LockSwitchModal'
import Passwords from '@/components/Passwords'
import PasswordCreator from '@/components/PasswordCreator'

export default {
  name: 'Locker',
  components: { Lock, LockSwitchModal, Passwords, PasswordCreator },
  computed: {
    showModal: function () {
      return this.$store.state.inLockModal
    },
    isLocked: function () {
      return this.$store.state.isLocked
    }
  }
}
</script>

<style scoped>
#lock-holder {
  height: 25vh;
  width: 25vh;
  position: absolute;
  margin: auto;
  padding-bottom: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 500ms ease;
}
#lock-holder:hover h1{
  opacity: 1;
}
h1 {
  opacity: 0;
  transition: opacity 500ms ease;
}

</style>
