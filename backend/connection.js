const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://faaiqua:faaiquathunnayyira@cluster0.x3e5hev.mongodb.net/db1?appName=Cluster0")
  .then(() => {
    console.log('Connected!')
   })
   .catch((err)=>{
      console.log("err")
   })