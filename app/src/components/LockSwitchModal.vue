<template>
  <transition name="modal">
     <div class="modal-mask">
       <div class="modal-wrapper">
         <div class="modal-container">

           <div class="modal-header"
                v-bind:class="{ toUnlock: isLocked, toLock: !isLocked }">
              <strong v-if="isLocked">Unlock Passwords</strong>
              <strong v-else>Lock Passwords</strong>
           </div>

           <div class="modal-body">
             <div v-if="isLocked">
               <div id="modal-title">Enter Key</div>
               <input type="password">
             </div>
             <div v-else>
               <div id="modal-title">Lock Vault?</div>
             </div>
           </div>

           <div class="modal-footer">
             <div @click="setModalStatus(false); setLockStatus(!isLocked)" id="confirm-button" class="button-type">Confirm</div>
             <div @click="setModalStatus(false)" id="cancel-button" class="button-type">Cancel</div>
           </div>
         </div>
       </div>
     </div>
   </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LockSwitchModal',
  computed: {
    isLocked: function () {
      return this.$store.state.isLocked
    }
  },
  methods: mapActions([
    'setModalStatus',
    'setLockStatus'
  ])
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border-radius: 10px;
  width: 30vw;
  margin: 0px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}
.modal-header {
  background: #4776E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 10px;
  margin: 0px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toUnlock {
  background: #21dd68;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #11998e, #21dd68);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #11998e, #21dd68); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.toLock {
  background: #e73827;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #f85032, #e73827);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #f85032, #e73827); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
strong {
  font-size: 1.25em;
  color: #ffffff;
  padding-left: 15px;
}

.modal-body {
  background: #ffffff;
  height: 20vh;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#modal-title {
  font-size: 1.5em;
  font-weight: 400;
  padding: 10px;
  flex-grow: 2;
}

input {
  width: 15vw;
  height: 25px;
  border-radius: 7px;
  border: 1px solid #dae3e5;
  outline: none;
  padding: 5px 10px;
  font-size: 1.25em;
  text-align: center;
  flex-grow: 2;

}
.modal-footer {
  background: #ffffff;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
}

.button-type {
  padding: 15px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #ffffff;
  transition: all 500ms ease;
  cursor: pointer;
}
.button-type:hover {
  padding: 15px 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

#cancel-button {
  background: #c6ccd3;
}
#cancel-button:hover {
  background: #9ea7b2;
}

#confirm-button {
  background: #96beff;
}
#confirm-button:hover {
  background: #66a0ff;
}

</style>
