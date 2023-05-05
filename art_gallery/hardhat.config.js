require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

const {
  API_URL,
  API_URL_SEPOLIA,
  API_URL_GOERLI,
  API_URL_MUMBAI,
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mainnet: {
      chainId: 1,
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },

    sepolia: {
      chainId: 11155111,
      url: API_URL_SEPOLIA,
      accounts: [PRIVATE_KEY],
    },

    goerli: {
      chainId: 5,
      url: API_URL_GOERLI,
      accounts: [PRIVATE_KEY],
    },

    mumbai: {
      chainId: 80001,
      url: API_URL_MUMBAI,
      accounts: [PRIVATE_KEY],
    },

    // bsc: {
    //   chainId: 56,
    //   url: API_URL_MUMBAI,
    //   accounts: [PRIVATE_KEY],
    // },

    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY],
      allowUnlimitedContractSize: true,
    },

    bscmainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // apiKey: POLYGONSCAN_API_KEY,
  },
};
