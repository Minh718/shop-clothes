import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ContainerBody, BodyLeft, BodyRight, MyLink, MyLabel } from "../styles";
import { Sidebar } from "../components/Sidebar";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

import {
  CardContent,
  Grid,
  Typography,
  Card,
  CardActions,
  Button,
  TextField,
  MenuItem,
  IconButton,
  CardMedia,
} from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { MySnackbar } from "../components/Snackbar";
export const AddProduct = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [multiFiles, setMultiFiles] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "Đã thêm sản phẩm thành công",
  });
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/categories/");
        setCategories(res.data);
      } catch (err) {
        console.log("err");
      }
    };
    fetchCategories();
  }, []);
  const handleUpload = (e) => {
    const files = e.target.files;
    let filesArray = [];
    for (let i = 0; i < files.length; i++) {
      filesArray.push(files[i]);
    }
    setMultiFiles(filesArray);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("category", category);
    formData.append("gender", gender);
    for (let i = 0; i < multiFiles.length; i++) {
      formData.append("files", multiFiles[i]);
    }
    try {
      await axios.post("http://localhost:8800/api/products", formData);
      setName("");
      setCategory("");
      setSize("");
      setPrice("");
      setColor("");
      setGender("");
      setMultiFiles([]);
      setSnackbar({ open: true, message: "Đã thêm sản phẩm thành công" });
    } catch (err) {
      console.log("quá lỗi", err.response.data);
    }
  };
  return (
    <>
      {snackbar.open && (
        <MySnackbar
          open={snackbar.open}
          setSnackbar={setSnackbar}
          message={snackbar.message}
        />
      )}
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <ContainerBody>
        <Sidebar openSidebar={openSidebar} />
        <BodyRight>
          <Typography variant="h4" sx={{ mb: "12px" }}>
            Thêm sản phẩm
          </Typography>
          <Stack spacing={2} maxWidth="350px">
            <TextField
              size="small"
              fullWidth
              label="Name sản phẩm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Giá sản phẩm"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Size sản phẩm"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Màu sản phẩm"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Giới tính"
              select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="unisex">unisex</MenuItem>
            </TextField>
            <TextField
              size="small"
              fullWidth
              select
              label="Loại sản phẩm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((categoryMap) => (
                <MenuItem value={categoryMap.category} key={categoryMap.id}>
                  {categoryMap.category}
                </MenuItem>
              ))}
            </TextField>
            <MyLabel htmlFor="imgsProduct" sx={{ mt: "15px" }}>
              Ảnh sản phẩm
              <PhotoLibraryIcon sx={{ color: "#7FBCD2" }} />
              <input
                style={{ display: "none" }}
                id="imgsProduct"
                type="file"
                multiple
                onChange={handleUpload}
                accept="image/*"
              />
            </MyLabel>
            {multiFiles.length > 0 && (
              <Grid container spacing={1}>
                {multiFiles.map((file, index) => {
                  return (
                    <Grid item xs={6} key={index}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="120px"
                          image={URL.createObjectURL(file)}
                        />
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            )}
            <Button variant="contained" onClick={handleSubmit}>
              Thêm sản phẩm
            </Button>
          </Stack>
        </BodyRight>
      </ContainerBody>
    </>
  );
};
