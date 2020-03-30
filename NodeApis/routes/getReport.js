
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
// var PrescriptionContract = require('../contractAbis/prescriptionAbi');
var LabReportContract = require('../contractAbis/labReportAbi');


router.get('/', (request, response, next) => {
	console.log("in get encounter");
    let enc_id = request.query.enc_id;

    LabReportContract.methods.getLabReportData(enc_id).call().then(function(result) { 
        try{
            console.log(result[0])
            var obj = {}
            result[0] = JSON.parse(result[0])
            result[1] = JSON.parse(result[1])
            result[2] = JSON.parse(result[2])

            
            // console.log(result);
            response.send({ server_response: result }); 

            // if(result.length > 0){
            
           
            // }else {
            //     response.send({ server_response: 'No data for given encounder id' }); 

            // }
         
        }catch (err){
            response.send({ server_response: 'API failed: ' + err.toString()}); 
        }
        
    }); 
	
});
module.exports = router;

