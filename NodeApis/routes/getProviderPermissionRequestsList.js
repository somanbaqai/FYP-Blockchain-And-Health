const express = require('express');
const router = express.Router();
// var Web3 = require('web3');
var PermissionContract = require('../contractAbis/permissionRequestAbi');
var PatientContract = require('../contractAbis/patientAbi');

router.get('/', (request, response, next) => {
    console.log("in login");
    let provider_id = request.query.provider_id;
    PermissionContract.methods.getProviderPermissionRequestsList(provider_id).call().then(function (result) {
        console.log(result)
        result = {
            patient_list: JSON.parse(result[0]),
            patient_access_level: JSON.parse(result[1])
        };
        PatientContract.methods.getAllPatients().call().then(function (res) {
            let ResulaltantArray = {
                patient_list: []
            };

            for (var j = 0; j < res.length; j++) {
                var obj = {
                    uid: res[j].uid,
                    acc_address: res[j].acc_address,
                    fname: res[j].fname,
                    password: res[j].password,
                    email: res[j].email,
                    pat_address: res[j].pat_address,
                    city: res[j].city,
                    country: res[j].country,
                    signup_time: res[j].signup_time,
                    weight: res[j].weight,
                    height: res[j].height,
                    cnic: res[j].cnic,
                    DoB: res[j].DoB,
                    access_level: '0'
                }
                // console.log("uid: " + result.patient_list.length);
                for (var x = 0; x < result.patient_list.length; x++) {
                    console.log("res: " + res[j].uid)
                    console.log("uid: " + result.patient_list[x].patient_cnic + '\n');
                    if (result.patient_list[x].patient_cnic == res[j].cnic) {
                        obj.access_level = result.patient_access_level[x].requested_access;
                    }
                }
                ResulaltantArray.patient_list.push(obj);
            }

            if (res[1] != 0) {
                // console.log(ResulaltantArray)
                response.send({
                    server_response: JSON.parse(JSON.stringify(ResulaltantArray))
                });

            } else {
                // response.send({server_response: "Login failed!"});
            }


        });

    }).catch(function (err) {
        // console.log(result)
        // result = {patient_list : JSON.parse(result[0]) , provided_access_level : JSON.parse(result[1])};
        // console.log(result)
        //        response.send({ server_response: 'API failed: ' + err.toString()})

        PatientContract.methods.getAllPatients().call().then(function (res) {

            let ResulaltantArray = {
                patient_list: []
            };

            //console.log(result)

            for (var j = 0; j < res.length; j++) {

                var obj = {
                    uid: res[j].uid,
                    acc_address: res[j].acc_address,
                    fname: res[j].fname,
                    password: res[j].password,
                    email: res[j].email,
                    pat_address: res[j].pat_address,
                    city: res[j].city,
                    country: res[j].country,
                    signup_time: res[j].signup_time,
                    weight: res[j].weight,
                    height: res[j].height,
                    cnic: res[j].cnic,
                    DoB: res[j].DoB,
                    access_level: '0'

                }



                ResulaltantArray.patient_list.push(obj);
            }
            response.send({
                server_response: ResulaltantArray
            })


        });


    });

});
module.exports = router;
