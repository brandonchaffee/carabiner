<template>
  <div id="locker">
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

export default {
  name: 'Locker',
  components: { Lock, LockSwitchModal, Passwords },
  computed: {
    showModal: function () {
      return this.$store.state.inModal
    },
    isLocked: function () {
      return this.$store.state.isLocked
    }
  }
}
</script>

<style scoped>
#lock-holder {
  height: 30vh;
  width: 30vw;
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
