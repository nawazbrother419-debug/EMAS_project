import Auth from "../models/auth.model.js";
import BaseServices from "./base.services.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthServices extends BaseServices{
    constructor(){
        super(Auth);
    }

    register = async (data)=>{
        const {email, password, role} = data;

        const existedEmail = await this.service.findOne({email});
        if(existedEmail) throw new Error("Email already exist");

        const hashPassword = await bcrypt.hash(password,10);

        const user = await this.add({
            email,
            password:hashPassword,
            role
        });
        return user;
        
    }
    login = async (data)=>{
        const {email , password } = data;
        const user = await this.service.findOne({email});
        if(!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) throw new Error("Invalid password");

        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.SECRET_KEY,
            {expiresIn:"7d"}
        );
        return {token, user};
    }
    profile = async (id)=>{
        const user = await this.service.findById(id).select("-password");
        return user;
    }
        
}

export default new AuthServices();


    