#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

# Executes cleanup function at script exit.
trap cleanup EXIT

cleanup() {
  # Kill the ganache instance that we started (if we started one and if it's still running).
  if [ -n "$ganache_pid" ] && ps -p $ganache_pid > /dev/null; then
    kill -9 $ganache_pid
  fi
}

getMetaMaskInput() {
    unset privateKey
    unset charCount

    echo -n "Enter MetaMask account private key [hidden]: "

    stty -echo

    charCount=0
    while IFS= read -p "$PROMPT" -r -s -n 1 char
    do
        # Enter - accept private key
        if [[ $char == $'\0' ]] ; then
            break
        fi
        # Backspace
        if [[ $char == $'\177' ]] ; then
            if [ $charCount -gt 0 ] ; then
                charCount=$((charCount-1))
                PROMPT=$'\b \b'
                privateKey="${privateKey%?}"
            else
                PROMPT=''
            fi
        else
            charCount=$((charCount+1))
            PROMPT='*'
            privateKey+="$char"
        fi
    done

    stty echo
    privateKey="0x"${privateKey}
    echo " "
}

getMetaMaskInput

accounts=(
  --account=$privateKey",1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501200,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501201,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501202,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501203,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501204,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501205,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501206,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501207,1000000000000000000000000"
  --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501208,1000000000000000000000000"
)

ganache-cli --gasLimit 0xfffffffffff "${accounts[@]}"
