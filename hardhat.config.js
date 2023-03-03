require("@nomiclabs/hardhat-waffle");
// require('hardhat-ethernal');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
*/
// const DEFAULT_COMPILER_SETTINGS = {
//   version: "0.7.6",
//   settings: {
//     evmVersion: "istanbul",
//     optimizer: {
//       enabled: true,
//       runs: 1_000_000,
//     },
//     metadata: {
//       bytecodeHash: "none",
//     },
//   },
// };
module.exports = {
  solidity: "0.7.0",
  // solidity: {
  //   compilers: [
  //     {
  //       version: "0.7.5"
  //     },
  //     {
  //       version: "0.8.0"
  //     },
  //     {
  //       version: "0.6.5"
  //     }
  //   ]
  // },
  // soldity:{

  //   compilers: [DEFAULT_COMPILER_SETTINGS],
  // },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/2dCdednERnEU19xc4asghgYfbM8cUnyo",
      },
    },
  },
  settings: {
    optimizer: {
      runs: 200,
      enabled: true,
    },
  },
};

// https://eth-mainnet.g.alchemy.com/v2/2dCdednERnEU19xc4asghgYfbM8cUnyo
