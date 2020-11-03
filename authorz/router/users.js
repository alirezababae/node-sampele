const Routers = require('express').Router()

const {userRejestr , userLogin , userAuth , serialuser , checkRole} = require('../utlis/auth')

// Rejestry Or create Users

Routers.post("/rejestry-user" , async (req , res) => {

await userRejestr(req.body , "user" , res)

})

Routers.post("/rejestry-admin" , async (req , res) => {

    await userRejestr(req.body , "admin" , res)


})

Routers.post("/rejestry-super-admin" , async (req , res) => {

    await userRejestr(req.body , "superadmin" , res)


})




// Login USers


Routers.post("/login-user" , async (req , res) => {

console.log(req.body);

    await userLogin(req.body , "user" , res)
})

Routers.post("/login-admin" , async (req , res) => {
    console.log(req.body);

    await userLogin(req.body , "admin" , res)


})

Routers.post("/login-super-admin" , async (req , res) => {

    await userLogin(req.body , "superadmin" , res)


})


// Profile Router



Routers.get("/profile", userAuth ,async (req , res ) => {

console.log(req);

return res.json(serialuser(req.user))
    // return res.status(200).json({
    //     msg:req.user
    // })


})


// Profile Users


Routers.get("/user-protectd" , userAuth , checkRole(['users']) , async (req , res) => {

    return res.status(200).json({
        msg:"Hi user"
    })

})

Routers.get("/admin-protectd" ,  userAuth , checkRole(['admin']) , async (req , res) => {

    
    return res.status(200).json({
        msg:"Hi admin"
    })

})

Routers.get("/super-admin-protectd" ,  userAuth , checkRole(['superadmin']) , async (req , res) => {

    return res.status(200).json({
        msg:"Hi super admin"
    })


})

Routers.get("/super-admin-admin-protectd" ,  userAuth , checkRole(['superadmin' , 'admin']) , async (req , res) => {

    return res.status(200).json({
        msg:"Hi super or admin"
    })

})


module.exports = Routers