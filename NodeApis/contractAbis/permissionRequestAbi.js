var Web3 = require('web3');
var permission_request_contract_address = require("../migrations/ContractAddress.json").permissionRequest;

var permission_request_contractABI = require("../build/contracts/PermissionRequests.json").abi;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    
}
//console.log( web3.eth.getAccounts().then(function(response) { accounts = response; console.log(accounts[0]; })));


web3.eth.getAccounts().then(function(response) { 
    accounts = response;
    // console.log(accounts[0]);
    // console.log(accounts);
    web3.eth.defaultAccount =  accounts[0];
});

web3.eth.defaultAccount = web3.eth.accounts[0];
// console.log(web3.eth.defaultAccount);
// console.log(web3.eth.accounts[0])
var PermissionRequestContract = new web3.eth.Contract( permission_request_contractABI,permission_request_contract_address);


//PermissionContract.createProposal("ADHD", "Foo", 2, {from: web3.eth.defaultAccount, gas:3000000})
module.exports = PermissionRequestContract;
