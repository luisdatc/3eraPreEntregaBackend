import { Router } from "express";
import {
  postLogin,
  postRegister,
  getGithub,
  getGihubCallback,
  getLogout,
  getTestJWT,
  getCurrent,
} from "../controllers/session.controllers.js";
import passport from "passport";
import { passportError, authorization } from "../utils/messageError.js";
import { generateToken } from "../utils/jwt.js";

const sessionRouter = Router();

sessionRouter.post("/login", passport.authenticate("login"), postLogin);

sessionRouter.post(
  "/register",
  passport.authenticate("register"),
  postRegister
);

sessionRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user: email"] }),
  getGithub
);

sessionRouter.get(
  "/githubCallback",
  passport.authenticate("github"),
  getGihubCallback
);

sessionRouter.get("/logout", getLogout);

//verifica que el token enviado sea valido (misma contraseña)

sessionRouter.get(
  "/testJWT",
  passport.authenticate("jwt", { session: false }),
  getTestJWT
);
sessionRouter.get(
  "/current",
  passportError("jwt"),
  authorization(
    "user"
  ) /* aca puedo cambiar el user por admin si quiero que la ruta sea solo para administradores */,
  getCurrent
);

export default sessionRouter;

//quede en la clase 12 03:52:23
