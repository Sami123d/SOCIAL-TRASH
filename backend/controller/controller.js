import Users from "../model/user.js"

export const signupController  = (req,  res)=>{
    const user = new Users({
        userName : req.body.userName,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
       .then((savedUser)=>{
        res.status(200).json(savedUser);
        
       }).catch((error)=>{
        res.status(400).json(error);

       });
       
}
export const loginController  = ()=>{}