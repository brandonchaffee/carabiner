export default {
  registerWeb3Instance (state, payload) {
    let result = payload
    state.web3.coinbase = result.coinbase
    state.web3.networkId = result.networkId
    state.web3.balance = result.balance
    state.web3.isInjected = result.injectedWeb3
    state.web3.instance = result.web3
  },
  registerContractInstance (state, payload) {
    let result = payload
    state.contract.instance = result.contractInstance
    state.contract.setCount = result.setCount
    state.contract.passwordSets = result.hexSets
  },
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
