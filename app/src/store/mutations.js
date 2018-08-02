export default {
  setSwitchStatus (state, payload) {
    state.switchStatus = payload
  },
  setLockStatus (state, payload) {
    state.isLocked = payload
  },
  setModalStatus (state, payload) {
    state.inModal = payload
  }
}
