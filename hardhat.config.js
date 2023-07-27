require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy-ethers");

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL ||
    "https://eth-sepolia.g.alchemy.com/v2/vYWsYzooVBZRIyCH62pNQNrzASDdqgzb"

    const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "b2c2ad8203767e7c12563608287a3362ba0699745337bbcf7b6c927ae023c1a8"
    const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
      sepolia: {
          url: SEPOLIA_RPC_URL,
          accounts: [PRIVATE_KEY],
          chainId: 11155111,
          blockConfirmations: 6,
      },
      hardhat: {
        chainId: 31337,
        // gasPrice: 130000000000,
    },
  },
  solidity: {
      compilers: [
          {
              version: "0.8.8",
          },
          {
              version: "0.6.6",
          },
      ],
  },
  etherscan: {
      apiKey: ETHERSCAN_API_KEY,
      // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
  },
  gasReporter: {
      enabled: true,
      currency: "USD",
      outputFile: "gas-report.txt",
      noColors: true,
      // coinmarketcap: COINMARKETCAP_API_KEY,
      Token:"MATIC"
  },
  namedAccounts: {
      deployer: {
          default: 0, // here this will by default take the first account as deployer
          1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      },
      user : {
        default : 1,
      },
  },
  mocha: {
      timeout: 500000,
  },
}
