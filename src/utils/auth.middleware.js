import jwt from "jsonwebtoken";

const verifyToken = async(req,res,next)=>{
try {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) res.json({msg:"Token not provided"});

    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    next();
} catch (error) {
    res.status(403).json({msg:"Invalid Token"});
}
}

export default verifyToken;


    

