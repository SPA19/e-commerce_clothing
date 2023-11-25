import jwt from "jsonwebtoken";
import { TOKEN_ADMIN, TOKEN_SECRET } from "../config.js";


export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "Not token, authorization denied" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token" });
    req.user = user
    next();
  });
};

export const authRequiredAdm = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "Not token Admin, authorization denied" });

  jwt.verify(token, TOKEN_ADMIN, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token admin" });
    req.user = user;
    next();
  });
};
