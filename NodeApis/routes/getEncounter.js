
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var MedicalEncounterContract = require('../contractAbis/encounterAbi');


router.get('/', (request, response, next) => {
	console.log("in get encounter");
    let cnic = request.query.cnic;

    MedicalEncounterContract.methods.getEncounterData(cnic).call().then(function(result) { 
        try{
            console.log(result)
            result = JSON.parse(result)
            console.log(result);
            if(result.length > 0){
            response.send({ server_response: result }); 
           
            }else {
                response.send({ server_response: 'No data for given cnic' }); 

            }
         
        }catch (err){
            response.send({ server_response: 'API failed: ' + err.toString()}); 
        }
        
    }); 
	
});
module.exports = router;

