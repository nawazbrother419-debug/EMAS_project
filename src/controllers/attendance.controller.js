import attendanceServices from "../services/attendance.services.js";

class AttendanceControllers{

    createAttendance = async (req,res)=>{
        try {
            const createAt = await attendanceServices.add(req.body);
            return res.status(201).json({msg:"Attendance created"});
        } catch (error) {
            res.status(500).json({message:"Error in opration"});
        }
    }
    getAttendance = async (req,res)=>{
        try {
            const getAt = await attendanceServices.get();
            return res.status(201).json({msg:"Attendance Render"});
        } catch (error) {
            res.status(500).json({message:"Error in opration"});
        }
    }
    getByFilter = async (req,res)=>{
        try {
            const filter = await attendanceServices.getFilter(req.query);
            return res.status(200).json(filter);
        } catch (error) {
             res.status(500).json({message:"Error in opration"});
        }
    }
    getSingleAttendance = async(req,res)=>{
        try {
            const data = await attendanceServices.getSingle(req.params.id);
            return res.status(201).json({msg:"Render single record"});
        } catch (error) {
             res.status(500).json({message:"Error in opration"});
        }
    }
    updateAttendance = async (req,res)=>{
        try {
            const updatedAt = await attendanceServices.update(req.params.id, req.body);
            if(!updatedAt) res.status(400).json({msg:"updation failed"});
             return res.status(201).json({msg:"Attendance updated"});
        } catch (error) {
            res.status(500).json({message:"Error in opration"});
        }
    }
    deleteAttendance = async (req,res)=>{
        try {
            const deletedAt = await attendanceServices.delete(req.params.id);
            if(!deletedAt) res.status(401).json({msg:"Deletion failed"});
            return res.status(201).json({msg:"Attendance deleted"});
        } catch (error) {
            res.status(500).json({message:"Error in opration"});
        }
    }
}

export default new AttendanceControllers();

