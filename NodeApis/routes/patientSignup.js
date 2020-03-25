
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var PatientContract = require('../contractAbis/patientAbi');


router.get('/', (request, response, next) => {

	// console.log("in the middleware # add-product");
	let fname = request.query.fname;
	let pat_address = request.query.pat_address;
	let city = request.query.city;
	let country = request.query.country;
	let weight = request.query.weight;
	let height = request.query.height;
	let cnic = request.query.cnic;
	let dob = request.query.dob;
	let email = request.query.email;
	let password = request.query.password;
	let acct_address = '0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71';


	  
    //   ,  string memory _cnic,string memory _DoB,string memory _email,string memory _password,address _address) public{

	PatientContract.methods.setPatient(fname, pat_address, city, country, weight, height, cnic, dob, email, password, acct_address)
	.send({ from: web3.eth.defaultAccount, gas: 3000000})
	.then(function(res) { 
		response.send({ server_response: 'Signup successful!' });
	  
	});     


});
module.exports = router;

