const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("connection established"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);

app.listen("80", () => {
    console.log("I am running");
});