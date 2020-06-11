
const Provider = artifacts.require("Provider");
const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(Provider)
  .then(() => {
    let rawdata = fs.readFileSync(__dirname + '/ContractAddress.json');
    let ContractAddress = JSON.parse(rawdata);
    ContractAddress.provider = Provider.address
    console.log(ContractAddress.provider);
    let data = JSON.stringify(ContractAddress);
    fs.writeFileSync(__dirname + '/ContractAddress.json', data);
  })
  
};
