import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { MySnackbar } from "../components/Snackbar";
import { BodyRight, ContainerBody } from "../styles";

export const AddCategory = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [category, setCategory] = useState("");
  const handleAddCategory = async () => {
    try {
      await axios.post("http://localhost:8800/api/categories/add", {
        category,
      });
      setCategory("");
      setSnackbar({
        open: true,
        message: "Đã thêm thành công",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "Đã thêm thành công",
  });

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
            Thêm danh mục
          </Typography>
          <TextField
            size="small"
            label="Loại sản phẩm"
            sx={{ width: "250px" }}
            margin="normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            onKeyDown={(e) => "Enter" === e.key && handleAddCategory()}
          />
          <Box>
            <Button variant="contained" onClick={handleAddCategory}>
              thêm danh mục
            </Button>
          </Box>
        </BodyRight>
      </ContainerBody>
    </>
  );
};
