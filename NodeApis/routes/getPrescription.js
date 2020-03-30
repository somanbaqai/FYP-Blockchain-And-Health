
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var PrescriptionContract = require('../contractAbis/prescriptionAbi');


router.get('/', (request, response, next) => {
	console.log("in get encounter");
    let enc_id = request.query.enc_id;

    PrescriptionContract.methods.getPrescriptionData(enc_id).call().then(function(result) { 
        try{
            console.log(result)
            result = JSON.parse(result)
            console.log(result);
            if(result.length > 0){
            response.send({ server_response: result }); 
           
            }else {
                response.send({ server_response: 'No data for given encounder id' }); 

            }
         
        }catch (err){
            response.send({ server_response: 'API failed: ' + err.toString()}); 
        }
        
    }); 
	
});
module.exports = router;

