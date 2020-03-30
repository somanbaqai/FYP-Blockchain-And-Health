
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var LabReportContract = require('../contractAbis/labReportAbi');
var MedicalEncounterContract = require('../contractAbis/encounterAbi');

function PackJSON(details){
    details = details.toString().split("||")
    var obj = []
    details.forEach(function(value){
        value = JSON.parse(value.trim())
        obj.push(value)
    });

    json =JSON.stringify(obj, null, ' ');
    console.log(json);
    return json;
}

router.get('/', (request, response, next) => {
	console.log("in add prescription");
    let enc_id = null;
    var date = new Date();
    let report_time = request.query.report_time;
    let report_details = request.query.report_details;
    let report_title = request.query.report_title;
    let cnic = request.query.cnic;
    let apt_time = request.query.apt_time;
    let details = request.query.details;
    let dr_name = request.query.dr_name;
    let acct_address = '0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71';

    // report_details = '{"name": "med_name", "dose": "2 daile"} || {"nam": "med_name", "dose": "3 daile"}'
    report_details = PackJSON(report_details);
    report_time = PackJSON(report_time);
    report_title = PackJSON(report_title);
    console.log(report_time + "| " + report_title + "| " + report_details)

    try{
        MedicalEncounterContract.methods.getDataForPrescription(cnic,apt_time,dr_name,details).call().then(function(res) { 
    
            console.log("test: " + res);
            res = JSON.parse(res)
            enc_id = res[0].uid;
            // string memory _report_time,string memory enc_id,address provider,string memory _json
            LabReportContract.methods.setLabReportrData(report_time,enc_id,acct_address,report_title,report_details).send({ from: web3.eth.defaultAccount, gas: 3000000}).then(function(result) { 
                console.log(result);
                response.send({ server_response:  "Lab report added successfully"});
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

