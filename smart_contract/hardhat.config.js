//https://eth-ropsten.alchemyapi.io/v2/FOnYoLF7tcftW_71sCxQt0p0hBJiFZRs

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FOnYoLF7tcftW_71sCxQt0p0hBJiFZRs',
      accounts: ['cea6f2b094c67c0d64e6b0bdebfbc67950fd01b79e7dc452ccb81f43420687ab']
    }
  }
}

//send contract

//npx hardhat run scripts/deploy.js --network ropsten
//console result
// Transactions address:  0x5Ff04E1868A42aa49d11A358B547a428BF552305
// New meta account address: 0x2872E57F667F1A885899886679606bBd13FBDf40