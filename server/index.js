import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("common"));

app.use("/", async (req, res) => {
  res.send("oke chưa");
});
app.listen(8800, () => {
  console.log("đã kết nối cỗng 8800");
});
//ss
