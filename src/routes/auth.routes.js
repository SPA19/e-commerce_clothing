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
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, LoginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), resgister);

router.post("/login", validateSchema(LoginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.post("/admin/login", validateSchema(LoginSchema), loginAdm);

router.post(
  "/admin/register",
  authRequiredAdm,
  validateSchema(registerSchema),
  resgisterAdm
);

router.post("/admin/logout", authRequiredAdm, logout);

router.get("/admin/profile", authRequiredAdm, profileAdm);

export default router;
