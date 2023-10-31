import { userModel } from "../models/users.models.js";

export const getUsers = async (req, res) => {
  try {
    const user = await userModel.find();

    if (user) {
      return res.status(200).send(usuario);
    }
    res.status(400).send({ error: "Usuario no encontrado" });
  } catch (error) {
    res.status(500).send({ error: `Error en consultar el usuario ${error}` });
  }
};

export const getUserbyId = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = await userModel.findById(id);

    if (userId) {
      return res.status(200).send(usuarioId);
    }
    res.status(404).send({ error: "Usuario no encontrado" });
  } catch (error) {
    res.status(500).send({ error: `Error en consultar usuario ${error}` });
  }
};

/* ESTA ME PARECE QUE NO VA YA QUE SE MANEJA EN EL PASSPORT */
/* export const postUser = async (req, res) => {
  const { first_name, last_name, age, email, password } = req.body;

  try {
    const newUser = await userModel.create({
      first_name,
      last_name,
      age,
      email,
      password,
    });

    if (newUser) {
      return res.status(200).send(usuarioNuevo);
    }
    res.status(400).send({ error: `Error en crear usuario nuevo` });
  } catch (error) {
    if (error.email == 11000) {
      return res
        .status(404)
        .send({ error: "El email ya se encuentra asignado a un usuario" });
    }
    res.status(500).send({ error: `Error en consultar usuario ${error}` });
  }
}; */

export const putUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, age, email, password } = req.body;

  try {
    const actUser = await userModel.findByIdAndUpdate(id, {
      first_name,
      last_name,
      age,
      email,
      password,
    });

    if (actUser) {
      return res.status(200).send(usuarioActualizado);
    }
    res.status(404).send({ error: "Usuario no encontrado" });
  } catch (error) {
    res.status(500).send({ error: `Error en actualizar el usuario ${error}` });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (user) {
      res.status(200).send({ user });
    } else {
      res.status(404).send({ error: "Error en eliminar usuario" });
    }
  } catch (error) {
    res.status(400).send({ error: "Error en eliminar usuario" });
  }
};
