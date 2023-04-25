require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors());


// This is for the Routes
app.use(require('./routes/blog'));
app.use(require('./routes/consultation'));
app.use(require('./routes/enquiry'));
app.use(require('./routes/bookAppointment'));


// This is for the Database
require('./Database/database');
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});