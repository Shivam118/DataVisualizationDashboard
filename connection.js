const mongoose = require("mongoose");
const dotenv = require("dotenv");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err);
    console.log("Unsuccessful Connection")
});
