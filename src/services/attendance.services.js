import Attendance from "../models/attendance.model.js";
import baseServices from "./base.services.js";

class AttendanceServices extends baseServices{

    constructor(){
        super(Attendance);
    }

    getSingle = async (id)=>{
        return await this.service.findById(id);
    }
 
}

export default new AttendanceServices();


