import employeeServices from "../services/employee.services.js";


class EmployeeController{


    addEmployee = async (req,res)=>{
        try {
            const employee = await employeeServices.add(req.body);
            return res.status(201).json({msg:"Employee Added"});
        } catch (error) {
            res.status(500).json({message:"Addition failed"});
        }
    }
    getEmployee = async (req,res)=>{
        try {
            const empData = await employeeServices.get();
            return res.status(200).json({msg:"Employee Added", empData});
        } catch (error) {
             res.status(500).json({message:"Addition failed"});
        }
    }
    updateEmployee = async (req,res)=>{
        try {
            const updatedEmp = await employeeServices.update(req.params.id, req.body);
            if(!updatedEmp) res.status(401).json({msg:"updation failed"});
            return res.status(200).json({msg:"update success", updatedEmp});
        } catch (error) {
            res.status(500).json({message:"Addition failed"});
        }
    }
    deleteEmployee = async (req,res)=>{
        try {
            const deletedEmp = await employeeServices.delete(req.params.id);
            if(!deletedEmp) res.status(400).json({msg:"deletion failed"});
            return res.status(200).json({msg:"deletion success"});
        } catch (error) {
            res.status(500).json({message:"Addition failed"});
        }
    }
}

export default new EmployeeController();

