const express = require('express');
const patientLogin = require('./routes/patientLogin');
const patientSignup = require('./routes/patientSignup');

const providerLogin = require('./routes/providerLogin');
const providerSignup = require('./routes/providerSignup');

const addEncounter = require('./routes/addEncounter');
const getEncounter = require('./routes/getEncounter');

const addPrescription = require('./routes/addPrescription');
const getPrescription = require('./routes/getPrescription');

const addReport = require('./routes/addReport');
const getReport = require('./routes/getReport');




const express_app = express();
// const express_router = express.Router();

express_app.use('/patient/login',patientLogin);
express_app.use('/patient/signup',patientSignup);

express_app.use('/provider/login',providerLogin);
express_app.use('/provider/signup',providerSignup);


express_app.use('/encounter/add',addEncounter);
express_app.use('/encounter/get',getEncounter);

express_app.use('/prescription/add',addPrescription);
express_app.use('/prescription/get',getPrescription);

express_app.use('/report/add',addReport);
express_app.use('/report/get',getReport);




express_app.listen(3639)
