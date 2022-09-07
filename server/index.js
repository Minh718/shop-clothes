import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import cors from "cors";
import authRouter from "./routes/auth.js";
import categoryRouter from "./routes/category.js";
import productRouter from "./routes/product.js";
import path from "path";
const __dirname = path.resolve();
const app = express();

app.use("/images", express.static(path.join(__dirname + "/images")));

app.use(helmet());
app.use(cors());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());
app.use(morgan("common"));

// app.use("/images", express.static(path.join(__dirname + "/images")));
app.use("/api/products", productRouter);

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);

app.listen(8800, () => {
  console.log("đã kết nối cỗng 8800");
});
//sssdfs
