import Web3 from 'web3'

let getWeb3 = new Promise(function (resolve, reject) {
  var web3js = window.web3
  if (typeof web3js !== 'undefined') {
    var web3 = new Web3(web3js.currentProvider)
    resolve({
      // injectedWeb3: await web3.eth.net.isListening(),
      web3 () {
        return web3
      }
    })
  } else {
    reject(new Error('Unable to connect to Metamask'))
  }
})
  .then(result => {
    return new Promise(function (resolve, reject) {
      result.web3().eth.net.getId((err, networkId) => {
        if (err) {
          reject(new Error('Unable to retrieve network ID'))
        } else {
          result = Object.assign({}, result, {networkId})
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      result.web3().eth.getCoinbase((err, coinbase) => {
        if (err) {
          reject(new Error('Unable to retrieve coinbase'))
        } else {
          result = Object.assign({}, result, { coinbase })
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      result.web3().eth.getBalance(result.coinbase, (err, balance) => {
        if (err) {
          reject(new Error('Unable to retrieve balance for address: ' + result.coinbase))
        } else {
          result = Object.assign({}, result, { balance })
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      result.web3().eth.net.isListening((err, isInjected) => {
        if (err) {
          reject(new Error('Web3 is not listening to peers'))
        } else {
          result = Object.assign({}, result, { isInjected })
          resolve(result)
        }
      })
    })
  })

export default getWeb3
