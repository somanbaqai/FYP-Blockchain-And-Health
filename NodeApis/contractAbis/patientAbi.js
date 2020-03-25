var Web3 = require('web3');

var patinet_contract_address = "0xe1715514371731B315F3E82ba316aB6E0083208f";

var patinet_contractABI = 
[
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PatientsAccts",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"name": "getPatient",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_cnic",
				"type": "string"
			}
		],
		"name": "getPatientAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_fname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pat_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_country",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_weight",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_height",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_DoB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

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
    console.log(accounts[0]);
    console.log(accounts);
    web3.eth.defaultAccount =  accounts[0];
});

web3.eth.defaultAccount = web3.eth.accounts[0];
console.log(web3.eth.defaultAccount);
console.log(web3.eth.accounts[0])
var PatientContract = new web3.eth.Contract( patinet_contractABI,patinet_contract_address);

module.exports = PatientContract;