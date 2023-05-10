require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


// cors configuration
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// This is for the Routes
app.use(require('./routes/blog'));
app.use(require('./routes/consultation'));
app.use(require('./routes/enquiry'));
app.use(require('./routes/bookAppointment'));
app.use(require('./routes/login'));


// This is for the Database
require('./Database/database');
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});