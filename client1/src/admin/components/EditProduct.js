import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import {
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MyLabel } from "../styles";

export const EditProduct = ({
  open,
  onClose,
  setSnackbar,
  element,
  products,
  setProducts,
  setImages,
  images,
}) => {
  const [name, setName] = useState(element.name);
  const [price, setPrice] = useState(element.price);
  const [size, setSize] = useState(element.size);
  const [color, setColor] = useState(element.color);
  const [gender, setGender] = useState(element.gender);
  const [category, setCategory] = useState(element.category);
  const [isNewImg, setIsNewImg] = useState(false);
  const [multiFiles, setMultiFiles] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleUpdateProduct = async () => {
    if (isNewImg) {
      const formData = new FormData();
      formData.append("id", element.id);

      formData.append("name", name);
      formData.append("price", price);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("gender", gender);
      formData.append("category", category);
      multiFiles.forEach((file) => formData.append("files", file));
      try {
        await axios.delete(
          `http://localhost:8800/api/products/delete/${element.id}/images`
        );
        await axios.put(
          `http://localhost:8800/api/products/update/images/product`,
          formData
        );
        const res = axios.get(
          `http://localhost:8800/api/products/image/${element.id}`
        );
        const imgUpdate = res.data[0];
        setImages(
          images.map((image) => {
            return imgUpdate.productId === image.productId ? imgUpdate : image;
          })
        );
      } catch (err) {
        console.log("err");
      }
    } else {
    }
    setProducts(
      products.map((product) => {
        if (product.id === element.id) {
          return {
            id: element.id,
            name,
            price,
            size,
            color,
            gender,
            category,
          };
        } else return product;
      })
    );
    onClose();
    setSnackbar({
      open: true,
      message: "???? s???a s???n ph???m th??nh c??ng",
      mode: "success",
    });
    // try {
    //   await axios.put(`http://localhost:8800/api/product/update/${id}`, {
    //     name,
    //     price,
    //     size,
    //     color,
    //     gender,
    //     multiFiles,
    //     categories
    //   });
    //   setProducts(
    //     products.map((product) => {
    //       if (product.id === id) {
    //         return {
    //           id,
    //           name,
    //           phone,
    //           username,
    //           password,
    //           isAdmin,
    //         };
    //       } else return product;
    //     })
    //   );
    //   onClose();
    //   setSnackbar({
    //     open: true,
    //     message: "???? s???a th??nh c??ng",
    //     mode: "success",
    //   });
    // } catch (err) {
    //   console.log("l???i", err.response.data);
    // }
  };
  const handleUpload = (e) => {
    const files = e.target.files;
    let filesArray = [];
    for (let i = 0; i < files.length; i++) {
      filesArray.push(files[i]);
    }
    setMultiFiles(filesArray);
    setIsNewImg(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/products/images/${element.id}`
        );
        const res2 = await axios.get(`http://localhost:8800/api/categories`);
        setMultiFiles(res.data);
        setCategories(res2.data);
      } catch (err) {
        console.log("l???i r???i");
      }
    };
    fetchData();
  }, []);
  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>Ch???nh s???a ng?????i d??ng</DialogTitle>
      <DialogContent>
        <Stack spacing={2} minWidth="500px">
          <TextField
            size="small"
            fullWidth
            label="Name s???n ph???m"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            size="small"
            fullWidth
            label="Gi?? s???n ph???m"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Size s???n ph???m"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="M??u s???n ph???m"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Gi???i t??nh"
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
            label="Lo???i s???n ph???m"
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
            ???nh s???n ph???m
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
                        height="200px"
                        image={
                          isNewImg
                            ? URL.createObjectURL(file)
                            : `http://localhost:8800/images/${file.filename}`
                        }
                      />
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleUpdateProduct(element.id);
          }}
        >
          C???p nh???t s???n ph???m
        </Button>
        <Button variant="outlined" onClick={() => onClose()}>
          H???y
        </Button>
      </DialogActions>
    </Dialog>
  );
};
