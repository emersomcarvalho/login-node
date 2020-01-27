const express = require('express');
const routes = require('./router');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

// mongoose
mongoose.connect('mongodb+srv://projecttela:123qwe.@projecttela-jjxo5.mongodb.net/nodedb?retryWrites=true&w=majority',{
useNewUrlParser: true, useUnifiedTopology: true,})

<<<<<<< HEAD
app.use(cors())
=======
app.use(cors({origin: 'http://localhost:3000'}))
>>>>>>> Ajuste local
app.use(express.json());
app.use(routes);

app.listen( process.env.PORT || 2000);
//process.env.PORT || 2000

