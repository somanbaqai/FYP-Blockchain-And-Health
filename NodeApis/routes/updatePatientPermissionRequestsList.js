
const express = require('express');
const router = express.Router();
// var Web3 = require('web3');
var PermissionContract = require('../contractAbis/permissionRequestAbi');


router.get('/', (request, response, next) => {
	console.log("in request permission list");
	let pat_cnic = request.query.pat_cnic;
    let prov_id = request.query.prov_id;
    let access_level = request.query.access_level;
	PermissionContract.methods.updatePatientPermissionRequestsList(pat_cnic,prov_id,access_level).send({from: web3.eth.defaultAccount, gas :3000000 }).then(function(result) { 
       
          console.log(result);
        // alert("successfully given permission.");
		response.send({ server_response: 'successfully updated patient permission requests list.'});

    }).catch((err)=> {console.log(er)});

});
module.exports = router;

