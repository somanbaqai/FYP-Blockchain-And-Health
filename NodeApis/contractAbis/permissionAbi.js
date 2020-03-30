
var permission_contract_address = "0x213FD1acCa0A3f63C9fe475a88fAe4FB852e0eDf";

var permission_contractABI = 
[
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "patientCnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "prociderID",
				"type": "string"
			}
		],
		"name": "togglePatientPermission",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "patientCnic",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "prociderID",
				"type": "string"
			}
		],
		"name": "toggleProviderPermission",
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
				"name": "PatientCNIC",
				"type": "string"
			}
		],
		"name": "getPatientPermissionList",
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
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "prociderID",
				"type": "string"
			}
		],
		"name": "getProviderPermissionList",
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
var PermissionContract = new web3.eth.Contract( permission_contractABI,permission_contract_address);


//PermissionContract.createProposal("ADHD", "Foo", 2, {from: web3.eth.defaultAccount, gas:3000000})
module.exports = PermissionContract;
