import employeeController from "../controllers/employee.controller.js";
import express from "express";

const router = express.Router();


router.post("/addEmp", employeeController.addEmployee);
router.get("/getEmp", employeeController.getEmployee);
router.put("/edit/:id", employeeController.updateEmployee);
router.delete("/delEmp/:id", employeeController.deleteEmployee);


export default router;

