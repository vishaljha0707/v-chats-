import express from "express";
import { getMe, login, logout, signup } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/protectroutes.js";
const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.get('/me', protectRoute, getMe);
export default router;
 
