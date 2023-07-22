require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000
    }
  },
  networks: {
    HyperLedger: {
      url:"http://localhost:8545/",
      chainId: 1337,
      accounts: ["c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"]
    }
  }
};
