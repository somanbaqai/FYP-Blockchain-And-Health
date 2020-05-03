
const express = require('express');
const router = express.Router();
// var Web3 = require('web3');
var PermissionContract = require('../contractAbis/permissionRequestAbi');
var ProviderContract = require('../contractAbis/providerAbi');

router.get('/', (request, response, next) => {
    console.log("in login");
    let pat_cnic = request.query.pat_cnic;
    PermissionContract.methods.getPatientPermissionRequestsList(pat_cnic).call().then(function (result) {
        // console.log(result)
        result = { provider_list: JSON.parse(result[0]), provider_access_level: JSON.parse(result[1]) };
        ProviderContract.methods.getAllProvider().call().then(function (res) {
            let ResulaltantArray = { provider_list: [] };
        
            for (var j = 0; j < res.length; j++) {
                var obj = {
                    uid: res[j].uid,
                    patient_address: res[j].patient_address,
                    fname: res[j].fname,
                    password: res[j].password,
                    email: res[j].email,
                    prov_type: res[j].prov_type,
                    prov_address: res[j].prov_address,
                    city: res[j].city,
                    country: res[j].country,
                    signup_time: res[j].signup_time,
                    access_level: '0'
                }
                // console.log("uid: " + result.provider_list.length);
                for(var x = 0;x<result.provider_list.length;x++){
                    console.log( "res: " + res[j].uid)
                    console.log("uid: " + result.provider_list[x].provider_email + '\n');
                    if(result.provider_list[x].provider_email == res[j].uid){
                        obj.access_level = result.provider_access_level[x].provider_access;
                    }
                }
                ResulaltantArray.provider_list.push(obj);
            }

            if (res[1] != 0) {
                // console.log(ResulaltantArray)
                response.send({ server_response: JSON.parse(JSON.stringify(ResulaltantArray)) });

            } else {
                // response.send({server_response: "Login failed!"});
            }


        });



    }).catch(function (err) {
        // console.log(result)
        // result = {patient_list : JSON.parse(result[0]) , provided_access_level : JSON.parse(result[1])};
        // console.log(result)
        response.send({ server_response: 'API failed: ' + err.toString() })


    });;

});
module.exports = router;

