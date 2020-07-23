
const PermissionRequest = artifacts.require("PermissionRequests");
const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(PermissionRequest)
  .then(() => {
    let rawdata = fs.readFileSync(__dirname + '/ContractAddress.json');
    let ContractAddress = JSON.parse(rawdata);
    ContractAddress.permissionRequest = PermissionRequest.address
    console.log(ContractAddress.permissionRequest);
    let data = JSON.stringify(ContractAddress);
    fs.writeFileSync(__dirname + '/ContractAddress.json', data);

  })
};
