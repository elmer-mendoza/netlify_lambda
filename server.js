const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI,
  ()=>console.log("connected to mongoDB"),
  {useNewUrlParser:true, useUnifiedTopology: true}
 )