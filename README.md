# carabiner
Ethereum Based Password Manager


# Usage
``` bash
# install dependencies
npm install

# set up ganache with metamask account as default
npm run metaGanache

# initialize mock vault
npm run init

# start vue application
cd app
npm run start
```

# Gas Cost
* Gas cost per 256 bit word: 20k gas
* Creation: ~200k gas
* Modification: ~40k gas

# TODO
1. Switch to single byte storage, reference individual bytes by index
2. Assess known-plaintext attack, add verification phrase for key
