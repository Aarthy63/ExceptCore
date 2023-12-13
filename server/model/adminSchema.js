const mongoose = require('mongoose');
const Adminschema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      pattern: {
        type: String,
        required: true,
      },
      secret:{
        type:Object,
        default:null

      },
      temp_secret:{
        type:Object,
        default:null
      },
      authVerify:{
        type:Boolean
      },
      image: {
        type: String,
      },
      subject: {
        type: String,
      },
    email: {
        type: String,
      },
   name: {
        type: String,
      },

    },
    
  );
  
  module.exports = LogAdmin = mongoose.model("LoginAdmin", Adminschema);