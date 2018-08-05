import Web3 from 'web3'
import carabiner from './generated/carabiner.json'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let contract = new web3.eth.Contract(carabiner.abi, carabiner.address)

  resolve({
    acct: web3.eth.accounts[0],
    contractInstance () {
      return contract
    }
  })
})
// .then(result => {
//   return new Promise(function (resolve, reject) {
//     result.contractInstance().balanceOf(result.acct, (err, tokenBalance) => {
//       if (err) {
//         reject(new Error('Unable to retrieve token balance'))
//       } else {
//         result = Object.assign({}, result, { tokenBalance })
//         resolve(result)
//       }
//     })
//   })
// })

export default getContract
