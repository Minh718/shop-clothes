import e from "express";
import express from "express";
import db from "../config/db.js";
const categoryRouter = express.Router();
categoryRouter.post("/add", (req, res) => {
  const category = req.body.category;
  console.log(category);
  db.query(
    "INSERT INTO tb_categories (category) VALUES (?)",
    category,
    (err, result) => {
      if (err) {
        res.status(500).json("err");
      } else {
        res.status(200).json("inserted");
      }
    }
  );
});

categoryRouter.get("/", (req, res) => {
  db.query("SELECT * FROM tb_categories", (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json("err");
    } else {
      res.status(200).json(result);
    }
  });
});
categoryRouter.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM tb_categories WHERE id = ?", id, (err, result) => {
    if (err) {
      res.status(500).json("error");
    } else {
      res.status(200).json("deleted");
    }
  });
});
categoryRouter.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const category = req.body.category;
  console.log(category, id);
  db.query(
    "UPDATE tb_categories SET category = ? WHERE id = ?",
    [category, id],
    (err, result) => {
      if (err) {
        res.status(500).json("err");
      } else {
        res.status(200).json("updated");
      }
    }
  );
});
export default categoryRouter;
