const Migrations = artifacts.require("Migrations");
const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(Migrations);

};
