import express from "express";
import attendanceController from "../controllers/attendance.controller.js";

const router = express.Router();

router.post("/createAt", attendanceController.createAttendance);
router.get("/getAt", attendanceController.getAttendance);
router.get("/getOne/:id",attendanceController.getSingleAttendance);
router.put("/updateAt", attendanceController.updateAttendance);
router.delete("/deleteAt/:id", attendanceController.deleteAttendance);


export default router;




