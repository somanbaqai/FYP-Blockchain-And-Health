
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var PermissionContract = require('../contractAbis/permissionRequestAbi');


router.get('/', (request, response, next) => {
	console.log("in login");
	let pat_cnic = request.query.pat_cnic;
	let prov_email = request.query.prov_email;
	let access_level = request.query.access_level;
	PermissionContract.methods.updatePatientPermissionRequestsList(pat_cnic,prov_email, access_level).send({ from: web3.eth.defaultAccount, gas: 3000000}).then(function(result) { 
        console.log(result);
        alert("successfully sent permission request.");
		response.send({ server_response: 'successfully sent permission request.'});

    });

});
module.exports = router;

