
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var ProviderContract = require('../contractAbis/providerAbi');


router.get('/', (request, response, next) => {
	console.log("in get providers list");
	// let username = request.query.username;
	// let password = request.query.password;
	ProviderContract.methods.getAllProvider().call().then(function (res) {

		console.log(res);

		if (res[1] != 0) {
			response.send({ server_response: res });
			// alert("successfully login")
			// location = "Patient_home.html"
			// localStorage.setItem("pat_cnic", $('#email').val());
			// localStorage.setItem("pat_add", res[5]);
		} else {
			response.send({server_response: "Login failed!"});
		}


    });
    

});
module.exports = router;

