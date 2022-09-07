import express from "express";
import db from "../config/db.js";
import { upload } from "../helpers/uploadImg.js";
const productRouter = express();

productRouter.post("/", upload.array("files"), (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const size = req.body.size;
  const color = req.body.color;
  const category = req.body.category;
  const gender = req.body.gender;
  db.query(
    "INSERT INTO tb_products (name, price,color,category,gender,size) VALUES (?,?,?,?,?,?)",
    [name, price, color, category, gender, size],
    (err, result) => {
      if (err) {
        res.status(500).json("??");
      } else {
        db.query(
          "SELECT id FROM tb_products ORDER BY id DESC LIMIT 1",
          (err, result) => {
            if (err) {
              res.status(500).json("??");
            } else {
              const length = req.files.length;
              req.files.forEach((file, index) => {
                db.query(
                  "INSERT INTO tb_img_product (idProduct,filename) VALUES (?,?)",
                  [result[0].id, file.filename],
                  (err, result) => {
                    if (err) {
                      res.status(500).json("??");
                    } else {
                      length - 1 === index && res.status(200).json("Quá oke");
                    }
                  }
                );
              });
            }
          }
        );
      }
    }
  );
});
productRouter.get("/", (req, res) => {
  db.query("SELECT * FROM tb_products ORDER BY id DESC", (err, result) => {
    if (err) res.status(500).json("HHH");
    else res.status(200).json(result);
  });
});
productRouter.get("/image/products", (req, res) => {
  db.query(
    "SELECT * FROM tb_img_product GROUP BY idProduct ORDER BY idProduct DESC",
    (err, result) => {
      if (err) res.status(500).json("HHH");
      else res.status(200).json(result);
    }
  );
});

productRouter.get("/images/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM tb_img_product WHERE idProduct = ?",
    id,
    (err, result) => {
      if (err) res.status(500).json("err");
      else res.status(200).json(result);
    }
  );
});
productRouter.get("/image/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM tb_img_product WHERE idProduct = ? LIMIT 1",
    id,
    (err, result) => {
      if (err) res.status(500).json("err");
      else res.status(200).json(result);
    }
  );
});
productRouter.delete("/delete/:id/images", (req, res) => {
  const idProduct = req.params.id;
  db.query(
    "DELETE FROM tb_img_product WHERE idProduct = ?",
    idProduct,
    (err, resutl) => {
      if (err) res.status(500).json("lỗi rồi");
      else res.status(200).json("deleted");
    }
  );
});
productRouter.put(
  "/update/images/product",
  upload.array("files"),
  (req, res) => {
    const id = res.body.id;
    const name = res.body.name;
    const price = res.body.price;
    const size = res.body.size;
    const color = res.body.color;
    const gender = res.body.gender;
    const category = res.body.category;
    db.query(
      "UPDATE tb_products SET name = ?, price = ?, size = ?, color = ?, gender = ?, category=? WHERE id = ?",
      [name, price, size, color, gender, category, id],
      (err, result) => {
        if (err) res.status(500).json("Error");
        else {
          const length = req.files.length;
          req.files.forEach((file, index) => {
            db.query(
              "INSERT INTO tb_img_product (productId, filename) VALUES (?,?)",
              [id, file.filename],
              (err, resutl) => {
                if (err) res.status(500).json("Error");
                else {
                  index === length - 1 && res.status(200).json("Quá oke");
                }
              }
            );
          });
        }
      }
    );
  }
);
export default productRouter;
