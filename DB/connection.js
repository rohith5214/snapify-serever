const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb atlas successfuly connected with snapServer");
}).catch((err)=>{
    console.log(`mongodb connection failed!!! Error:${err}`);
})