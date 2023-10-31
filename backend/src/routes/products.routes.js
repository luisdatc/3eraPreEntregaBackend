import { Router } from "express";
import {
  getProducts,
  getProduct,
  deleteroduct,
  putProduct,
  postProduct,
} from "../controllers/products.controllers.js";
import { authorization, passportError } from "../utils/messageError.js";

const productosRouter = Router();

productosRouter.get("/", getProducts);

productosRouter.get("/:id", getProduct);

productosRouter.put(
  "/:id",
  passportError("jwt"),
  authorization("admin"),
  putProduct
);

productosRouter.delete(
  "/:id",
  passportError("jwt"),
  authorization("admin"),
  deleteroduct
);

productosRouter.post(
  "/",
  passportError("jwt"),
  authorization("admin"),
  postProduct
);

export default productosRouter;
