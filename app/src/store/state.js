let state = {
  switchStatus: null,
  isLocked: true,
  inLockModal: false,
  passSetStatus: null,
  web3: {
    isInjected: false,
    instance: null,
    networkId: null,
    coinbase: null,
    error: null
  },
  contract: {
    instance: null,
    setCount: 0,
    hexSets: null
  },
  decryptedSet: null,
  passwordSet: {
    'A': { 'site': 'Yahoo', 'username': 'buzz', 'password': 'gopherboy' },
    'B': { 'site': 'Github', 'username': 'buzz', 'password': 'gopherboy' },
    'C': { 'site': 'Gmail', 'username': 'buzz', 'password': 'gopherboy' },
    'D': { 'site': 'EDX', 'username': 'buzz', 'password': 'gopherboy' },
    'E': { 'site': 'Jello', 'username': 'buzz', 'password': 'gopherboy' },
    'F': { 'site': 'Yello', 'username': 'andy', 'password': 'gophertoy' },
    'G': { 'site': 'Google', 'username': 'andy', 'password': 'gophertoy' }
  }
}
export default state
