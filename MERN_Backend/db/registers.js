require('dotenv').config()

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")    //for hashing
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: {
    type: String,
    minlength: 8
  },
  confirmPassword:{
    type:String,
    minlength: 8
  },
  tokens:[{
    token:{
      type:String,
      require:true
    }
  }]
})


// any function we call with the instance of a document we need to use methodes.
// Generate Auth token middle ware run before saving data
// UserSchema.methods.generateAuthToken = async function(){
//   try{
//     const tokenGen = jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY)
//     this.tokens = this.tokens.concat({token: tokenGen})
//     await this.save();
//     return tokenGen;  
//   }
//   catch(e){
//     console.log(e);
//   }
// }


// using schemaName.pre(event, function)
//it will work before the evnnt
// UserSchema.pre("save", async function(next){

//   //if only password field of 'this' is modified
//   if(this.isModified("password")){
//     // Hasihomg password
//     this.password = await bcrypt.hash(this.password, 10)
//     this.confirmPassword = undefined;
//   }
//   // it is necessary to give next statement elseit will go on loading forever and the rest of code written afer it will not work.
//   next();

// })




const userCollecion = new mongoose.model("User_Data", UserSchema)

module.exports = userCollecion;