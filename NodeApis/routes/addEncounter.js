
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var PatientContract = require('../contractAbis/patientAbi');
var MedicalEncounterContract = require('../contractAbis/encounterAbi');


router.get('/', (request, response, next) => {
	console.log("in add encounter");
    let cnic = request.query.cnic;
    let apt_time = request.query.apt_time;
    let dr_name = request.query.dr_name;
    let details = request.query.details;
    let provider_id = request.query.provider_id;
    let acct_address = '0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71';
    
	PatientContract.methods.getPatientAddress(cnic).call().then(function(res) { 
    
        console.log("test: " + res);
        
        if(!res.toString().includes("0000000000000000000000000000000000000000")){
            
            // var $items = $('#dr_name, #appt_time,#cnic,#details ')
            
            var obj;
          
            
             MedicalEncounterContract.methods.getIndex().call().then(function(resultIndex) { 
                console.log(resultIndex);
                obj = {'dr_name': dr_name,'apt_time': apt_time,'details': details,"uid": resultIndex,'provider_id': provider_id}
                json =JSON.stringify(obj, null, ' ');
                console.log(json);
                MedicalEncounterContract.methods.setEncounterData(dr_name,apt_time,cnic,details,acct_address,json,provider_id).send({ from: web3.eth.defaultAccount, gas: 3000000}).then(function(result) { 
                    console.log(result);
                   
                    response.send({ server_response: 'Successfully added patient record.' }); 
    
                });
                // response.send({ server_response: 'Successfully added patient record.' }); 

            }); 
        }else {
            response.send({ server_response: 'Please enter valid/registered patient CNIC number' }); 
        }
    

    });

});
module.exports = router;

