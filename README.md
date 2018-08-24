# bet-dapp

> Decentralizer Application for betting

## Requirements

* Node 8+
* Ganache
* Metamask

## Install

**Ganache**

Run Ganache client or CMD. If using CMD you have to change the port in `truffle.js` and `src/plugins/web3.js` to `8545`.

**MetaMask**
```
1. Open MetaMask
2. Click "Restore from seed phrase"
3. Copy "MNEMONIC" from Ganache
4. Paste in MetaMask "Wallet Seed"
5. Enter password
6. Click icon next to logo => click "Custom RPC"
7. Add "HTTP://127.0.0.1:7545"(CMD with port 8545)
8. Click User icon => click "Create Account"
9. Select Account you want to use the app with
```

**MainAccount**

The application needs to have a mainAccount. This can be set in `config/index.js` => `MAIN_ACCOUNT_ADDRESS`

Paste the hash address of one of your Ganache accounts. For example: `0xc3B6D205D3d43A61072D58da76c8ab036dD9E4E4`

**Node modules**
```bash
# install dependencies
$ yarn install # npm install
```

**Truffle**
```bash
# migrate contracts
$ truffle migrate
```

## Run

```bash
# serve with hot reload at localhost:3000
$ yarn dev # npm run dev

# build for production and launch server
$ yarn build # npm run build
$ yarn start # npm start
```

## Test
```bash
# test contracts
$ truffle test
```
