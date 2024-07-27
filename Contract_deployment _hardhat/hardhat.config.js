require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "10635fdec58953243481126dd9fa9aa33e3e21cfb495dbda5b3d79f7bf7520bc";
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${10635fdec58953243481126dd9fa9aa33e3e21cfb495dbda5b3d79f7bf7520bc}`],
    },
  },
};
