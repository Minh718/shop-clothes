import express from "express";
import db from "../config/db.js";
const userRouter = express.Router();

userRouter.get("/client", (req, res) => {
  db.query("SELECT * FROM tb_users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
});
userRouter.put("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM tb_users WHERE id = ?", id, (err, result) => {
    if (err) {
      res.status(500).json("error");
    } else {
      res.status(200).json(result);
    }
  });
});

userRouter.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const phone = req.body.phone;
  const username = req.body.username;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;

  db.query(
    "UPDATE tb_users SET name = ?, phone = ? , username = ? , password = ?, isAdmin= ? WHERE id = ?",
    [name, phone, username, password, isAdmin, id],
    (err, result) => {
      if (err) res.status(500).json("error");
      else res.status(200).json(result);
    }
  );
});
export default userRouter;
