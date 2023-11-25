import User from "../models/user.model.js";
import admUser from "../models/admin.model.js";
import bcryp from "bcryptjs";
import { createAccessToken, createAccessTokenAdmin } from "../libs/jwt.js";

export const resgister = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const passwordHash = await bcryp.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({
      email,
    });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcryp.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect Password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "user not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
/*//////////////////////////////////////////////////////////////////////*/

export const loginAdm = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminFound = await admUser.findOne({
      email,
      role: "admin",
    });

    if (!adminFound)
      return res.status(400).json({ message: "admin not found" });

    const isMatch = await bcryp.compare(password, adminFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect Password Admin" });

    const token = await createAccessTokenAdmin({ id: adminFound._id });

    res.cookie("token", token);
    res.json({
      id: adminFound._id,
      username: adminFound.username,
      email: adminFound.email,
      createdAt: adminFound.createdAt,
      updatedAt: adminFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resgisterAdm = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const passwordHash = await bcryp.hash(password, 10);

    const newAdminUser = new admUser({
      username,
      email,
      password: passwordHash,
      role: "admin",
    });

    const adminSaved = await newAdminUser.save();

    res.json({
      id: adminSaved._id,
      username: adminSaved.username,
      email: adminSaved.email,
      role: adminSaved.role,
      createdAt: adminSaved.createdAt,
      updatedAt: adminSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const profileAdm = async (req, res) => {
  const userAdminFound = await admUser.findById(req.user.id);
  if (!userAdminFound)
    return res.status(400).json({ message: "user not found" });

  return res.json({
    id: userAdminFound._id,
    username: userAdminFound.username,
    email: userAdminFound.email,
    role: userAdminFound.role,
    createdAt: userAdminFound.createdAt,
    updatedAt: userAdminFound.updatedAt,
  });
};
