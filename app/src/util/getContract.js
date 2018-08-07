import Web3 from 'web3'
import carabiner from './generated/carabiner.json'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let contract = new web3.eth.Contract(carabiner.abi, carabiner.address)

  resolve({
    contractInstance () {
      return contract
    }
  })
})
  .then(result => {
    return new Promise(function (resolve, reject) {
      result.contractInstance().methods.getHexSetCount().call({}, (err, setCount) => {
        if (err) {
          reject(new Error('Unable to retrieve set count'))
        } else {
          result = Object.assign({}, result, { setCount })
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(async function (resolve, reject) {
      var hexSets = []
      for (var i = 0; i < result.setCount; i++) {
        await result.contractInstance().methods.getHexSetAt(i).call({
          gas: 300000
        }, function (error, password) {
          if (error) {
            reject(new Error('Unable to retrieve password set'))
          } else {
            hexSets.push(password)
          }
        })
      }
      result = Object.assign({}, result, { hexSets })
      resolve(result)
    })
  })

export default getContract
