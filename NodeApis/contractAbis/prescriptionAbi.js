var Web3 = require('web3');

var prescription_contract_address = "0xE9976363B6A95427aB205e55cb68Eff2f5586610";

var prescription_contractABI = 
[
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_prec_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "enc_id",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "provider",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_json",
				"type": "string"
			}
		],
		"name": "setPrescriptionrData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
				"internalType": "string",
				"name": "enc_id",
				"type": "string"
			}
		],
		"name": "getPrescriptionData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
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


web3.eth.getAccounts().then(function(response) { 
    accounts = response;
    console.log(accounts[0]);
    console.log(accounts);
    web3.eth.defaultAccount =  accounts[0];
});

web3.eth.defaultAccount = web3.eth.accounts[0];
console.log(web3.eth.defaultAccount);
console.log(web3.eth.accounts[0])
var PrescriptionEncounterContract = new web3.eth.Contract( prescription_contractABI,prescription_contract_address);


module.exports = PrescriptionEncounterContract;