require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config( );

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    swisstronik: {
      url: process.env.SWISSTRONIK_TEST_URL,
      accounts: [process.env.TEST_PRIVATE_KEY],
    },
  },
};
