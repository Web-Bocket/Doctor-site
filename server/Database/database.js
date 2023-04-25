require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.URL;

mongoose.set("strictQuery", false);

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database is connected successfully");
}).catch((err) => {
    console.log("Error in Database " + err);
});