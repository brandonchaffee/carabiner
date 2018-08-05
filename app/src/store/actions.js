import getWeb3 from '../util/getWeb3'
import getContract from '../util/getContract'

export default {
  registerWeb3: ({commit}) => getWeb3.then(result => {
    commit('registerWeb3Instance', result)
  }).catch(e => console.log(e)),

  getContractInstance: ({commit}) => getContract.then(result => {
    commit('registerContractInstance', result)
  }).catch(e => console.log(e)),

  setSwitchStatus: ({ commit }, payload) => commit('setSwitchStatus', payload),
  setLockStatus: ({ commit }, payload) => commit('setLockStatus', payload),
  setLockModal: ({ commit }, payload) => commit('setLockModal', payload),
  setPassSetStatus: ({ commit }, payload) => commit('setPassSetStatus', payload)
}
