//https://eth-ropsten.alchemyapi.io/v2/FOnYoLF7tcftW_71sCxQt0p0hBJiFZRs

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FOnYoLF7tcftW_71sCxQt0p0hBJiFZRs',
      accounts: ['64bf17517c22a71938628efb416e4173a202d99011a59272c0b87a6f42bb7d57']
    }
  }
}

//send contract

//npx hardhat run scripts/deploy.js --network ropsten
//console result
// Transactions address:  0x491b2A2EEf5A603f57A6B8b3Fdd9C17eD756992D