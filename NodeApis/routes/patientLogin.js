
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var PatientContract = require('../contractAbis/patientAbi');


router.get('/', (request, response, next) => {
	console.log("in login");
	let username = request.query.username;
	let password = request.query.password;
	PatientContract.methods.getPatient(username, password).call().then(function (res) {

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

