const express = require('express');

const cors = require('cors');

const app = express();


app.use(cors({ origin:'https://teladelogin.herokuapp.com' }));
app.use(express.json());

require('./src/controllers/authController')(app);
require('./src/controllers/projectController')(app);


app.listen( process.env.PORT || 2000);
//process.env.PORT || 2000

