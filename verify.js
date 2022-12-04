const jwt=require('jsonwebtoken');
const cookieParse=require('cookie-parser')


 function verify(req,res,next){
    const header=req.cookies.token
    // console.log(header)
    // console.log(JSON.stringify(header));
    if(!header){
        res.json({message:"You are not a use"});
    }else{
        jwt.verify(header,process.env.SECRET_KEY,(err,regUser)=>
        {
            if(err) res.status(403).json("Token is not found"); 
            req.user=regUser;
            // console.log(req.user)
            // console.log("User is verified");
            next();
        })
    }
}

module.exports=verify;