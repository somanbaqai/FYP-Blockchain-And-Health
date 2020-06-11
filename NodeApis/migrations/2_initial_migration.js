const Patient = artifacts.require("Patient");


const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(Patient)
  .then(() => {
    // ContractAddress.patient = Patient.address;

    let rawdata = fs.readFileSync(__dirname + '/ContractAddress.json');

    let ContractAddress = JSON.parse(rawdata);
    ContractAddress.patient = Patient.address
    console.log(ContractAddress.patient);
    let data = JSON.stringify(ContractAddress);
    fs.writeFileSync(__dirname + '/ContractAddress.json', data);
  })
  //console.log(Patient.address);
};
