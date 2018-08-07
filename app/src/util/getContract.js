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
    return new Promise(function (resolve, reject) {
      var hexSets = []
      for (var i = 0; i < result.setCount; i++) {
        result.contractInstance().methods.getHexSetAt(i).call({
          gas: 300000
        }, function (error, password) {
          if (error) {
            console.log('Error in retrieving password set ' + error)
          } else {
            hexSets.push(password)
          }
        })
      }
      result = Object.assign({}, result, { hexSets })
      resolve(result)
    })
  })
  // .then(async function (result) {
  //   var hexSets = []
  //   for (let i = 0; i < result.setCount; i++) {
  //     await new Promise(function (resolve, reject) {
  //       result.contractInstance().methods.getHexSetAt(i).call({
  //         gas: 300000
  //       }, function (error, set) {
  //         if (error) {
  //           console.log('Error in retrieving password set ' + error)
  //         } else {
  //           hexSets.push(set)
  //         }
  //       })
  //     })
  //     console.log(hexSets)
  //     return hexSets
  //   }
  // })
  // return new Promise(function (resolve, reject) {
  //   for (var i = 0; i < result.setCount; i++) {
  //     this.$store.state.contract.instance().methods.getHexSetAt(i).call({
  //       gas: 300000,
  //       from: this.$store.state.web3.coinbase
  //     }, function (error, password) {
  //       if (error) {
  //         console.log('Error in retrieving password set ' + error)
  //       } else {
  //         result = Object.assign({}, result, { setCount })
  //         resolve(result)
  //         this.$store.state.contract.passwordSets.push(result)
  //       }
  //     })
  //   }
  // })

export default getContract
