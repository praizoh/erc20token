require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */

const STAGING_ALCHEMY_URL = process.env.STAGING_ALCHEMY_URL;
const STAGING_PRIVATE_KEY = process.env.STAGING_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: STAGING_ALCHEMY_URL,
      accounts: [`0x${STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
