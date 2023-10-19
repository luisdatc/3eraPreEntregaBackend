import { generateToken, authToken } from "../utils/jwt.js";

export const postLogin = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send({ mensaje: "Usuario invalido" });
    }

    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      age: req.user.age,
      email: req.user.email,
    };

    const token = generateToken(req.user);

    res.cookie("jwtCookie", token, {
      maxAge: 43200000, //12horas en ms
    });

    res.status(200).send({ payload: req.user });
  } catch (error) {
    res.status(500).send({ mensaje: `Error al iniciar sesion ${error}` });
  }
};

export const postRegister = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(400).send({ mensaje: "Usuario ya existente" });
    }

    res.status(200).send({ mensaje: "Usuario registrado" });
  } catch (error) {
    res.status(500).send({ mensaje: `Error al registrar usuario ${error}` });
  }
};

export const getGithub = async (req, res) => {
  res.status(200).send({ mensaje: "Usuario registrado" });
};

export const getGihubCallback = async (req, res) => {
  req.session.user = req.user;
  res.status(200).send({ mensaje: "Usuario logueado" });
};

export const getLogout = async (req, res) => {
  if (req.session.login) {
    req.session.destroy();
  }
  res.clearCookie("jwtCookie");
  res.status(200).send({ resultado: "Usuario deslogueado" });
};

export const getTestJWT = async (req, res) => {
  /*   console.log(req); */
  res.send(req.user);
};

export const getCurrent = async (req, res) => {
  res.send(req.user);
};
