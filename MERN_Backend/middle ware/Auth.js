const jwt = require("jsonwebtoken")
const userCollection = require("../db/registers")

const auth = async (req, res, next) => {
  try{
    const token = req.cookies.jwt;
    const user = jwt.verify(token, process.env.SECRET_KEY)
    // console.log(user);
    const userData = await userCollection.findById(user._id);
    // console.log(userData);

    req.token = token;
    req.user = userData;

    // console.log(req.token);
    // console.log(req.user);
    next();
  }
  catch(err){
    // console.log(err);
    res.redirect('/login')
  }
  
}

module.exports = auth ;