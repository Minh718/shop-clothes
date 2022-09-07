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
import { EditCategory } from "../components/EditCategory";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { MySnackbar } from "../components/Snackbar";
import { MyModal } from "../modal";
import { BodyRight, ContainerBody } from "../styles";
export const Category = () => {
  const [openModal, setOpenModal] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState({});
  const [categories, setCategories] = useState([]);
  const [idDelete, setIdDelete] = useState("0");
  const [openSidebar, setOpenSidebar] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    mode: "success",
  });
  const [openModalEdit, setOpenModalEdit] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);
  const handleDeleteCategory = async () => {
    try {
      await axios.delete(
        `http://localhost:8800/api/categories/delete/${idDelete}`
      );
      setCategories(categories.filter((category) => category.id !== idDelete));
      setSnackbar({ open: true, message: "Đã xóa thành công", mode: "error" });
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
        <EditCategory
          open={openModalEdit}
          onClose={() => setOpenModalEdit()}
          element={categoryEdit}
          categories={categories}
          setCategories={setCategories}
          setSnackbar={setSnackbar}
        />
      )}
      <MyModal
        handleDeleteById={handleDeleteCategory}
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
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) => {
                  return (
                    <TableRow
                      key={category.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{category.id}</TableCell>
                      <TableCell>{category.category}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setOpenModalEdit(true);
                            setCategoryEdit(category);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setIdDelete(category.id);
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
