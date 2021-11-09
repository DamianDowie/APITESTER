require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import Routes
const skeletor = require('./route/skeletor.js');
//Routes Middlewares

app.use('/v1/skeletor',skeletor);

app.listen(process.env.PORT || 3008, ()=> console.log('listening on port '+ process.env.PORT || 3008));
