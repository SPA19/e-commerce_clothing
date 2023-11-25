import jwt from "jsonwebtoken"
import { TOKEN_ADMIN, TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

export function createAccessTokenAdmin(payload){
  return new Promise((resolve, reject)=>{
    jwt.sign(
      payload,
      TOKEN_ADMIN,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}