const Permission = artifacts.require("Permission");

const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(Permission)
  .then(() => {
    let rawdata = fs.readFileSync(__dirname + '/ContractAddress.json');
    let ContractAddress = JSON.parse(rawdata);
    ContractAddress.permission = Permission.address
    console.log(ContractAddress.permission);
    let data = JSON.stringify(ContractAddress);
    fs.writeFileSync(__dirname + '/ContractAddress.json', data);

  })
};

