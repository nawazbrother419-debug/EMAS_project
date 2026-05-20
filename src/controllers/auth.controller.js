import authServices from "../services/auth.services.js";


class AuthController{

    registration = async (req,res)=>{
        try {
            const user = await authServices.register(req.body);
            return res.status(201).json({msg:"User Registered Successfully"});
        } catch (error) {
            res.status(500).json({msg:"Registration Failed"});
        }
    };

    login = async (req,res)=>{
        try {
            const user = await authServices.login(req.body);
            return res.status(200).json({msg:"Loged in Successfull"});

        } catch (error) {
            res.status(500).json({msg:"Login Fail"});
        }
    }

    profile = async(req,res)=>{
        try {
            const user = await authServices.profile(req.user.id);
            return res.json(user);
        } catch (error) {
            res.status(500).json({msg:"User id not Found"});
        }
    }
}

export default new AuthController();

