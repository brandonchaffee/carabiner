<template>
  <transition name="modal">
     <div class="modal-mask">
       <div class="modal-wrapper">
         <div class="modal-container">

           <div class="modal-header">
             <strong>{{passwordSet._url}}</strong>
           </div>

           <div class="modal-body">
             <div class="item-set">
               <div class="name">URL</div>
               <div class="value-set">
                 <div class="value"> {{ passwordSet._url }} </div>
                 <div class="end-tag action">Copy</div>
               </div>
             </div>
             <div class="item-set">
               <div class="name">Username</div>
               <div class="value-set">
                 <div class="value"> {{ passwordSet._username }} </div>
                 <div class="end-tag action">Copy</div>
               </div>
             </div>
             <div class="item-set">
               <div class="name">Password</div>
               <div class="value-set">
                 <div v-if="hiddenPass" class="value"></div>
                 <div v-else class="value">{{ passwordSet._password }}</div>
                 <div @click="hiddenPass = false" v-if="hiddenPass" class=" end-tag action">Show</div>
                 <div @click="hiddenPass = true" v-else  class="action">Hide</div>
                 <div v-if="!hiddenPass" class="end-tag action">Copy</div>
               </div>
             </div>
           </div>

           <div class="modal-footer">
             <div id="edit" class="button-type">Edit</div>
             <div @click="setPassSetStatus(null)" id="close" class="button-type">Close</div>
           </div>
         </div>
       </div>
     </div>
   </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PasswordModal',
  data () {
    return {
      hiddenPass: true,
      passwordSet: this.$store.state.decryptedSet[this.$store.state.passSetStatus]
    }
  },
  methods: mapActions([
    'setPassSetStatus'
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
  width: 600px;
  margin: 0px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}
.modal-header {
  background: #6368e1;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #785ee2, #6368e1);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #785ee2, #6368e1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 10px;
  margin: 0px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

strong {
  font-size: 1.25em;
  color: #ffffff;
  padding-left: 15px;
}

.modal-body {
  background: #ffffff;
  height: 200px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

#modal-title {
  font-size: 1.5em;
  font-weight: 400;
  padding: 10px;
  flex-grow: 2;
}

input {
  width: 400px;
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
  width: 80px;
  padding: 15px 0px;
  margin: 5px;
  border-radius: 5px;
  color: #ffffff;
  transition: all 500ms ease;
  cursor: pointer;
}
.button-type:hover {
  width: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

#close {
  background: #c6ccd3;
}
#close:hover {
  background: #9ea7b2;
}

#edit {
  background: #ff7a97;
}
#edit:hover {
  background: #f22653;
}

.item-set {
  display: flex;
}

.value-set {
  display: flex;
  width: 400px;
}

.name {
  background: #e1e3e8;
  width: 100px;
  padding: 10px 0px;
  border-radius: 7px 0px 0px 7px;
  border-right: 2px solid #ffffff;
}

.value {
  padding: 10px 10px;
  flex-grow: 3;
  background: #eff2f7;
  border-right: 2px solid #ffffff;
  text-align: left;
}

.action {
  background: #96beff;
  padding: 10px 10px;
  transition: background 500ms ease, padding 500ms ease, border-radius 300ms ease;
  color: white;
  border-right: 2px solid #ffffff;
  cursor: pointer;
}

.action:hover {
  background: #66a0ff;
  padding: 10px 14px;
}

.end-tag {
  border-radius: 0px 7px 7px 0px;
  border-right: none !important;
}

</style>
