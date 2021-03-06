var Web3 = require('web3');

var patinet_contract_address = require("../migrations/ContractAddress.json").patient;

var patinet_contractABI = require("../build/contracts/Patient.json").abi;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    
}
//console.log( web3.eth.getAccounts().then(function(response) { accounts = response; console.log(accounts[0]; })));
var accounts;
var account_count;

web3.eth.getAccounts().then(function(response) { 
    accounts = response;
    // console.log(accounts[0]);
    // console.log(accounts);
    web3.eth.defaultAccount =  accounts[0];
});

web3.eth.defaultAccount = web3.eth.accounts[0];
// console.log(web3.eth.defaultAccount);
// console.log(web3.eth.accounts[0])
var PatientContract = new web3.eth.Contract( patinet_contractABI,patinet_contract_address);

module.exports = PatientContract;
