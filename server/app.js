require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cors configuration
app.use(cors({
  origin: [process.env.FRONTEND_URI],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Just want to send the cookies to the front-end
}));


// This is for the Routes
app.use(require('./routes/blog'));
app.use(require('./routes/consultation'));
app.use(require('./routes/enquiry'));
app.use(require('./routes/bookAppointment'));
app.use(require('./routes/login'));
app.use(require('./routes/admin'));

// This is for the Payment
app.use(require('./routes/payment'));


// This is for the Database
require('./Database/database');
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});