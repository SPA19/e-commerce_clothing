import { Router } from "express";
import { authRequiredAdm } from "../middlewares/validateToken.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  createCategory,
  getCategories,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", authRequiredAdm, createProduct);
router.delete("/products/:id", authRequiredAdm, deleteProduct);
router.put("/products/:id", authRequiredAdm, updateProduct);

router.get("/categories", getCategories);
router.post("/categories", authRequiredAdm, createCategory);

export default router;
