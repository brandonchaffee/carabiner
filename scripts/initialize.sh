#!/usr/bin/env bash

set_and_deploy() {
    #Compile contracts for access to build/ABI
    echo "Compiling Carabiner Contract"
    truffle compile
    #Initialize
    echo "Deploying Carabiner Contract"
    truffle exec scripts/mockVault.js
}

set_and_deploy
