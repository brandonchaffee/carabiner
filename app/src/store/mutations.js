export default {
  setSwitchStatus (state, payload) {
    state.switchStatus = payload
  },
  setLockStatus (state, payload) {
    state.isLocked = payload
  },
  setLockModal (state, payload) {
    state.inLockModal = payload
  },
  setPassSetStatus (state, payload) {
    state.passSetStatus = payload
  }
}
