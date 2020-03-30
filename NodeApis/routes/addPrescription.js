
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var PrescriptionContract = require('../contractAbis/prescriptionAbi');
var MedicalEncounterContract = require('../contractAbis/encounterAbi');


router.get('/', (request, response, next) => {
	console.log("in add prescription");
    let enc_id = null;
    var date = new Date();
    let prec_time = date.getTime().toString();
    let medicine = request.query.medicine;
    let cnic = request.query.cnic;
    let apt_time = request.query.apt_time;
    let details = request.query.details;
    let dr_name = request.query.dr_name;
    let acct_address = '0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71';

    // medicine = '{"name": "med_name", "dose": "2 daile"} || {"nam": "med_name", "dose": "3 daile"}'
    medicine = medicine.toString().split("||")
    var obj = []
    medicine.forEach(function(value){
    value = JSON.parse(value.trim())
    obj.push(value)
    });

    json =JSON.stringify(obj, null, ' ');
    console.log(json);
    try{
        MedicalEncounterContract.methods.getDataForPrescription(cnic,apt_time,dr_name,details).call().then(function(res) { 
    
            console.log("test: " + res);
            res = JSON.parse(res)
            enc_id = res[0].uid;
            // string memory _prec_time,string memory enc_id,address provider,string memory _json
            console.log(prec_time + "| " + enc_id + "| " + acct_address + "| " + json)
            PrescriptionContract.methods.setPrescriptionrData(prec_time,enc_id,acct_address,json).send({ from: web3.eth.defaultAccount, gas: 3000000}).then(function(result) { 
                console.log(result);
                response.send({ server_response:  "Prescription added successfully"});
                // response.send({ server_response: 'Successfully added patient record.' }); 
    
            }).catch((error) =>{
                response.send({ server_response:  error});
            });
            
    
        });
    
    }catch (error){
        response.send({ server_response:  error});
    }

});
module.exports = router;

