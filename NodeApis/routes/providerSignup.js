
const express = require('express');
const router = express.Router();
var Web3 = require('web3');
var ProviderContract = require('../contractAbis/providerAbi');


router.get('/', (request, response, next) => {
    //  string memory _fname, string memory _email,string memory _password, string memory _prov_type, string memory _prov_address,  string memory _city, string memory _country, string memory _signup_time, address _address) public{
    // console.log("in the middleware # add-product");
    let fname = request.query.fname;
    let prov_address = request.query.prov_address;
    let city = request.query.city;
    let country = request.query.country;
    let prov_type = request.query.prov_type;
    var date = new Date();
    let signup_time = date.getTime().toString();
    let email = request.query.email;
    let password = request.query.password;
    let acct_address = '0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71';



    //   ,  string memory _cnic,string memory _DoB,string memory _email,string memory _password,address _address) public{

    ProviderContract.methods.setProvider(fname, email, password, prov_type, prov_address, city, country, signup_time, acct_address)
        .send({ from: web3.eth.defaultAccount, gas: 3000000 })
        .then(function (res) {
            response.send({ server_response: 'Provider signup successful!' });

        });


});
module.exports = router;

