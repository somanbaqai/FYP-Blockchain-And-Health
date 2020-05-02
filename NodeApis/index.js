const express = require('express');
const patientLogin = require('./routes/patientLogin');
const patientSignup = require('./routes/patientSignup');

const providerLogin = require('./routes/providerLogin');
const providerSignup = require('./routes/providerSignup');
const getAllProviders = require('./routes/getAllProviders');

const addEncounter = require('./routes/addEncounter');
const getEncounter = require('./routes/getEncounter');

const addPrescription = require('./routes/addPrescription');
const getPrescription = require('./routes/getPrescription');

const addReport = require('./routes/addReport');
const getReport = require('./routes/getReport');

const updatePatientPermissionsList = require('./routes/updatePatientPermissionsList');
const updateProviderPermissionsList = require('./routes/updateProviderPermissionsList');
const getPatientPermissionsList = require('./routes/getPatientPermissionsList');
const getProviderPermissionsList = require('./routes/getProviderPermissionsList');

const updatePatientPermissionRequestsList = require('./routes/updatePatientPermissionRequestsList');
const updateProviderPermissionRequestsList = require('./routes/updateProviderPermissionRequestsList');
const getPatientPermissionRequestsList = require('./routes/getPatientPermissionRequestsList');
const getProviderPermissionRequestsList = require('./routes/getProviderPermissionRequestsList');






const express_app = express();
// const express_router = express.Router();

express_app.use('/patient/login',patientLogin);
express_app.use('/patient/signup',patientSignup);

express_app.use('/provider/login',providerLogin);
express_app.use('/provider/signup',providerSignup);
express_app.use('/provider/getAll',getAllProviders);getAllProviders


express_app.use('/encounter/add',addEncounter);
express_app.use('/encounter/get',getEncounter);

express_app.use('/prescription/add',addPrescription);
express_app.use('/prescription/get',getPrescription);


express_app.use('/report/add',addReport);
express_app.use('/report/get',getReport);

express_app.use('/patient_permissions_list/update',updatePatientPermissionsList);
express_app.use('/provider_permissions_list/update',updateProviderPermissionsList);
express_app.use('/patient_permissions_list/get',getPatientPermissionsList);
express_app.use('/provider_permissions_list/get',getProviderPermissionsList);

express_app.use('/patient_permission_requests_list/update',updatePatientPermissionRequestsList);
express_app.use('/provider_permission__requests_list/update',updateProviderPermissionRequestsList);
express_app.use('/patient_permission_requests_list/get',getPatientPermissionRequestsList);
express_app.use('/provider_permission_requests_list/get',getProviderPermissionRequestsList);

express_app.listen(3639)
