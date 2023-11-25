import { Router } from "express";
import {
  resgister,
  login,
  logout,
  profile,
  resgisterAdm,
  loginAdm,
  profileAdm,
} from "../controllers/auth.controller.js";
import { authRequired, authRequiredAdm } from "../middlewares/validateToken.js";

const router = Router();

router.post("/register", resgister);

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.post("/admin/login", loginAdm);

router.post("/admin/register", authRequiredAdm, resgisterAdm);

router.post("/admin/logout", authRequiredAdm, logout);

router.get("/admin/profile", authRequiredAdm, profileAdm);

export default router;
