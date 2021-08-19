require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "KEY";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "";

module.exports = {
  solidity: "0.5.0",
  networks: {
    ropsten: {
      url: `https://http-testnet.hecochain.com`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};