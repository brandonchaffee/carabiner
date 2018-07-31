<template>
  <div id="locker">
    <div  @click="showModal = true" id="lock-holder">
      <Lock/>
      <LockSwitchModal v-if="showModal"/>
      <h1>Unlock</h1>
    </div>
  </div>
</template>

<script>
import Lock from '@/components/Lock'
import LockSwitchModal from '@/components/LockSwitchModal'

export default {
  name: 'Locker',
  components: { Lock, LockSwitchModal },
  data () {
    return {
      showModal: false
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
  /* cursor: pointer; */
}
#lock-holder:hover h1{
  opacity: 1;
}
h1 {
  opacity: 0;
  transition: opacity 500ms ease;
}

</style>
