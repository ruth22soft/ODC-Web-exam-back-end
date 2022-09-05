const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
 app.use(cors({
    origin: '*'}));
    
    const userRoute = require('./routers/users');


app.use(bodyParser.json());
app.use("/users", userRoute);




module.exports = app