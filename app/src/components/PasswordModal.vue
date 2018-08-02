<template>
  <transition name="modal">
     <div class="modal-mask">
       <div class="modal-wrapper">
         <div class="modal-container">

           <div class="modal-header">
             <strong>Hello</strong>
           </div>

           <div class="modal-body">
             Hey there
           </div>

           <div class="modal-footer">
             <div id="copy" class="button-type">Copy</div>
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

#copy {
  background: #96beff;
}
#copy:hover {
  background: #66a0ff;
}

#edit {
  background: #ff7a97;
}
#edit:hover {
  background: #f22653;
}

</style>
