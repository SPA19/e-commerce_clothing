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
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProductSchema } from "../schemas/product.schema.js";

const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post(
  "/products",
  authRequiredAdm,
  validateSchema(createProductSchema),
  createProduct
);

router.delete("/products/:id", authRequiredAdm, deleteProduct);

router.put("/products/:id", authRequiredAdm, updateProduct);

router.get("/categories", getCategories);

router.post("/categories", authRequiredAdm, createCategory);

export default router;
