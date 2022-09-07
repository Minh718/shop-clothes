import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditProduct } from "../components/EditProduct";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { MySnackbar } from "../components/Snackbar";
import { MyModal } from "../modal";
import { BodyRight, ContainerBody, MyImg } from "../styles";
export const Product = () => {
  const [openModal, setOpenModal] = useState(false);
  const [productEdit, setProductEdit] = useState({});
  const [products, setProducts] = useState([]);
  const [idDelete, setIdDelete] = useState("0");
  const [openSidebar, setOpenSidebar] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    mode: "success",
  });
  const [images, setImages] = useState([]);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/products");
        const res2 = await axios.get(
          "http://localhost:8800/api/products/image/products"
        );
        setImages(res2.data);
        setProducts(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log("err", err.response.data);
      }
    };
    fetchProducts();
  }, []);
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:8800/api/products/image/products"
  //       );
  //       // setImages(res2.data);
  //       setImages(res.data);
  //     } catch (err) {
  //       console.log("err", err.response.data);
  //     }
  //   };
  //   fetchImages();
  // }, [products]);
  const handleDeleteProduct = async () => {
    try {
      await axios.put(`http://localhost:8800/api/users/delete/${idDelete}`);
      setProducts(products.filter((product) => product.id !== idDelete));
      setSnackbar({
        open: true,
        message: "Đã xóa sản phẩm thành công",
        mode: "error",
      });
    } catch (err) {
      console.log("err");
    }
  };
  return (
    <>
      <MySnackbar
        open={snackbar.open}
        setSnackbar={setSnackbar}
        message={snackbar.message}
        mode={snackbar.mode}
      />

      {openModalEdit && (
        <EditProduct
          open={openModalEdit}
          onClose={() => setOpenModalEdit()}
          element={productEdit}
          products={products}
          setProducts={setProducts}
          setSnackbar={setSnackbar}
          setImages={setImages}
          images={images}
        />
      )}
      <MyModal
        handleDeleteById={handleDeleteProduct}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      <ContainerBody>
        <Sidebar openSidebar={openSidebar} />
        <BodyRight>
          <Typography variant="h3" mb="20px">
            Quản lý khách hàng
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "750px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>price</TableCell>
                  <TableCell>size</TableCell>
                  <TableCell>color</TableCell>
                  <TableCell>gender</TableCell>
                  <TableCell>category</TableCell>
                  <TableCell>Ảnh sản phẩm</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => {
                  return (
                    <TableRow
                      key={product.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.size}</TableCell>
                      <TableCell>{product.color}</TableCell>
                      <TableCell>{product.gender}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell sx={{ padding: "8px 0px" }}>
                        <MyImg
                          src={`http://localhost:8800/images/${images[index].filename}`}
                        />
                      </TableCell>

                      <TableCell>
                        <IconButton
                          onClick={() => {
                            // openMoDalEdit();
                            setOpenModalEdit(true);
                            setProductEdit(product);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setIdDelete(product.id);
                            setOpenModal(true);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </BodyRight>
      </ContainerBody>
    </>
  );
};
