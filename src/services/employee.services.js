import Employee from "../models/employee.model.js";
import baseServices from "../services/base.services.js";


class EmployeeServices extends baseServices{
    constructor(){
        super(Employee);
    }

    
};


export default new EmployeeServices();

