require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Use session middleware
app.use(
    session({
        secret: 'Our little secret.',
        resave: false,
        saveUninitialized: false,
    })
);

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