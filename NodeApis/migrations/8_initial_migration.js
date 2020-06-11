
const Prescription = artifacts.require("Prescription");
const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(Prescription)
  .then(() => {
    
    let rawdata = fs.readFileSync(__dirname + '/ContractAddress.json');
    let ContractAddress = JSON.parse(rawdata);
    ContractAddress.prescription = Prescription.address
    console.log(ContractAddress.prescription);
    let data = JSON.stringify(ContractAddress);
    fs.writeFileSync(__dirname + '/ContractAddress.json', data);
  })
};
