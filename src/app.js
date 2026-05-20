import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);

export default app;


