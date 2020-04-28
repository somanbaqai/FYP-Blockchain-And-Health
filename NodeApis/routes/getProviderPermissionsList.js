
const express = require('express');
const router = express.Router();
// var Web3 = require('web3');
var PermissionContract = require('../contractAbis/permissionAbi');


router.get('/', (request, response, next) => {
	console.log("in login");
	let provider_id = request.query.provider_id;
    PermissionContract.methods.getProviderPermissionsList(provider_id).call().then(function(result) { 
        // console.log(result)
        result = {patient_list : JSON.parse(result[0]) , provided_access_level : JSON.parse(result[1])};
        // console.log(result)

        try{
            // console.log(result)
            // result = JSON.stringify(result)
            // console.log(result);
            response.send({ server_response: result }); 
            // if(result.length > 0){
            // response.send({ server_response: result }); 
           
            // }else {
            //     response.send({ server_response: 'No data for given cnic' }); 

            // }
         
        }catch (err){
            response.send({ server_response: 'API failed: ' + err.toString()}); 
        }
        
    }).catch(function(err) { 
        // console.log(result)
        // result = {patient_list : JSON.parse(result[0]) , provided_access_level : JSON.parse(result[1])};
        // console.log(result)
        response.send({ server_response: 'API failed: ' + err.toString()})

        
    });

});
module.exports = router;

