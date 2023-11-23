import { Router } from "express";
import { resgister, login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", resgister);

router.post("/login", login);

export default router;
