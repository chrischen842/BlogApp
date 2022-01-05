const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();

mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connection established")).catch((err) => console.log(err));

app.listen("80", () => {
    console.log("I am running")
});