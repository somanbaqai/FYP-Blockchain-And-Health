const MedicalEncounter = artifacts.require("MedicalEncounter");
const fs = require('fs');
module.exports = function(deployer) {
  
  deployer.deploy(MedicalEncounter)
  .then(() => {
    let rawdata = fs.readFileSync(__dirname + '/ContractAddress.json');
    let ContractAddress = JSON.parse(rawdata);
    ContractAddress.encounter = MedicalEncounter.address
    console.log(ContractAddress.encounter);
    let data = JSON.stringify(ContractAddress);
    fs.writeFileSync(__dirname + '/ContractAddress.json', data);

  })

};
