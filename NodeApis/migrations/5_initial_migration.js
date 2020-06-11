
const LabReport = artifacts.require("LabReport");
const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(LabReport)
  .then(() => {
    let rawdata = fs.readFileSync(__dirname + '/ContractAddress.json');
    let ContractAddress = JSON.parse(rawdata);
    ContractAddress.lab_report = LabReport.address
    console.log(ContractAddress.lab_report);
    let data = JSON.stringify(ContractAddress);
    fs.writeFileSync(__dirname + '/ContractAddress.json', data);
    
  })

};
