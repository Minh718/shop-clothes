import express from "express";
const authRouter = express.Router();
import db from "../config/db.js";

authRouter.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    `SELECT * FROM tb_users WHERE username = '${username}'`,
    (err, result) => {
      if (result[0]) {
        result[0].password === password
          ? res.status(200).json(result[0])
          : res.status(404).json({ password: "false" });
      } else {
        console.log("not find");
        res.status(404).json("not find");
      }
    }
  );
});
authRouter.post("/register", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO tb_users (name, phone, username, password) VALUES (?,?,?,?)",
    [name, phone, username, password],
    (err, result) => {
      if (err) {
        res.status(500).json("error");
      } else {
        res.status(200).json("inserted");
      }
    }
  );
});
export default authRouter;
