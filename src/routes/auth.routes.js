import express from "express";
import authController from "../controllers/auth.controller.js";
import verifyToken from "../utils/auth.middleware.js";

const router = express.Router();

router.post("/register", authController.registration);
router.post("/login", authController.login);
router.get("/profile", verifyToken, authController.profile);

export default router;