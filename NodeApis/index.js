const express = require('express');
const patientLogin = require('./routes/patientLogin');
const patientSignup = require('./routes/patientSignup');

const providerLogin = require('./routes/providerLogin');
const providerSignup = require('./routes/providerSignup');


const express_app = express();
const express_router = express.Router();

express_app.use('/patient/login',patientLogin);
express_app.use('/patient/signup',patientSignup);

express_app.use('/provider/login',providerLogin);
express_app.use('/provider/signup',providerSignup);


express_app.listen(3639)
