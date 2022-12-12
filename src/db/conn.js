const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Todo-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
}).then(()=>{
    console.log("connection is auccesful")
}).catch((e)=>{
    console.log(e)
})
   