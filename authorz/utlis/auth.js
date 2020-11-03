const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { SECRET } = require('../config')
const passport = require('passport')



const userRejestr = async (userDets , role , res) => {
try{

    let usernameNotToken = await validdateusername(userDets.username)
if(!usernameNotToken){

    return res.status(400).json({

        msg:'Username is araldy Token',
        sucsses:false

    })
}
let emailNotRegisted = await validdateEmail(userDets.email)
if(!emailNotRegisted){

    return res.status(400).json({

        msg:'emailRegisted is araldy Token',
        sucsses:false

    })

}


// get hash passwords

const hashedpassword = await bcrypt.hash(userDets.password , 12)


// insert Data 

const newUser = new User({

...userDets,

password:hashedpassword,
role

})

await newUser.save()
return res.status(201).json({
    msg:"Happy SuccesessFull",
    sucsses:true
})


}
catch(err){

    return res.status(500).json({

        msg:"no accunt? create!",
        sucsses:false
    })

}


}


const userLogin = async (userCards , role , res) => {
    console.log(role);
let {username , password } = userCards

const user = await User.findOne({username})

if(!user){
    return res.status(404).json({
        msg:'Not Found user',
        sucsses:false
        
    })
}

if(user.role !== role){

    return res.status(404).json({
        msg:'Not Found user or role',
        sucsses:false
    })

}


let isMatch  = await bcrypt.compare(password , user.password)
if(isMatch){

    let token = jwt.sign({

        user_id:user._id,
        role:user.role,
        username:user.username,
        email:user.email
    },SECRET , {expiresIn:"7 days"})

    let result = {
        role:user.role,
        username:user.username,
        email:user.email,
        token:`Bearer  ${token}`,
        expiresIn: 168

    }

    res.json({
       ...result,
        msg:"hapyy you logged %% login",
        sucsses:true
    })
    // return res.status(200).json({
    //     ...result,
    //     msg:"hapyy you logged %% login",
    //     sucsses:true
    // })

}else {


    return res.status(403).json({
        msg:"incraments password",
        sucsses:false
    })

}

}


const validdateusername = async username => {

let user = await User.findOne({username})

return user ? false : true

}


// const userAuth = passport.authenticate("jwt" , {session:false} )
const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = roles => (req , res , next) => !roles.includes(req.user.role) ? res.status(401).json('invalid') : next() 


const validdateEmail = async email => {

let user = await User.findOne({email})

return user ? false : true

}


const serialuser = user => {

    return {

        username:user.username,
        email:user.email,
        _id:user._id,
        name:user.name,
        createdAt: user.createdAt,
        updatedA:user.updatedA
    }
}

module.exports = {
    userAuth,
    userRejestr,
    userLogin,
    serialuser,
    checkRole
}


// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const User = require("../models/User");
// const { SECRET } = require("../config");

// /**
//  * @DESC To register the user (ADMIN, SUPER_ADMIN, USER)
//  */
// const userRegister = async (userDets, role, res) => {
//   try {
//     // Validate the username
//     let usernameNotTaken = await validateUsername(userDets.username);
//     if (!usernameNotTaken) {
//       return res.status(400).json({
//         message: `Username is already taken.`,
//         success: false
//       });
//     }

//     // validate the email
//     let emailNotRegistered = await validateEmail(userDets.email);
//     if (!emailNotRegistered) {
//       return res.status(400).json({
//         message: `Email is already registered.`,
//         success: false
//       });
//     }

//     // Get the hashed password
//     const password = await bcrypt.hash(userDets.password, 12);
//     // create a new user
//     const newUser = new User({
//       ...userDets,
//       password,
//       role
//     });

//     await newUser.save();
//     return res.status(201).json({
//       message: "Hurry! now you are successfully registred. Please nor login.",
//       success: true
//     });
//   } catch (err) {
//     // Implement logger function (winston)
//     return res.status(500).json({
//       message: "Unable to create your account.",
//       success: false
//     });
//   }
// };

// /**
//  * @DESC To Login the user (ADMIN, SUPER_ADMIN, USER)
//  */
// const userLogin = async (userCreds, role, res) => {
//   let { username, password } = userCreds;
//   // First Check if the username is in the database
//   const user = await User.findOne({ username });
//   if (!user) {
//     return res.status(404).json({
//       message: "Username is not found. Invalid login credentials.",
//       success: false
//     });
//   }
//   // We will check the role
//   if (user.role !== role) {
//     return res.status(403).json({
//       message: "Please make sure you are logging in from the right portal.",
//       success: false
//     });
//   }
//   // That means user is existing and trying to signin fro the right portal
//   // Now check for the password
//   let isMatch = await bcrypt.compare(password, user.password);
//   if (isMatch) {
//     // Sign in the token and issue it to the user
//     let token = jwt.sign(
//       {
//         user_id: user._id,
//         role: user.role,
//         username: user.username,
//         email: user.email
//       },
//       SECRET,
//       { expiresIn: "7 days" }
//     );

//     let result = {
//       username: user.username,
//       role: user.role,
//       email: user.email,
//       token: `Bearer ${token}`,
//       expiresIn: 168
//     };

//     return res.status(200).json({
//       ...result,
//       message: "Hurray! You are now logged in.",
//       success: true
//     });
//   } else {
//     return res.status(403).json({
//       message: "Incorrect password.",
//       success: false
//     });
//   }
// };

// const validateUsername = async username => {
//   let user = await User.findOne({ username });
//   return user ? false : true;
// };

// /**
//  * @DESC Passport middleware
//  */
// const userAuth = passport.authenticate("jwt", { session: false });

// /**
//  * @DESC Check Role Middleware
//  */
// const checkRole = roles => (req, res, next) =>
//   !roles.includes(req.user.role)
//     ? res.status(401).json("Unauthorized")
//     : next();

// const validateEmail = async email => {
//   let user = await User.findOne({ email });
//   return user ? false : true;
// };

// const serializeUser = user => {
//   return {
//     username: user.username,
//     email: user.email,
//     name: user.name,
//     _id: user._id,
//     updatedAt: user.updatedAt,
//     createdAt: user.createdAt
//   };
// };

// module.exports = {
//   userAuth,
//   checkRole,
//   userLogin,
//   userRegister,
//   serializeUser
// };