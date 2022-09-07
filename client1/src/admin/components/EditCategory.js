import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const EditCategory = ({
  open,
  onClose,
  setSnackbar,
  element,
  categories,
  setCategories,
}) => {
  const [category, setCategory] = useState(element.category);
  const handleUpdateCategory = async (id) => {
    console.log("??");
    try {
      // console.log("dd");

      await axios.put(`http://localhost:8800/api/categories/update/${id}`, {
        category,
      });
      console.log("dd");
      setCategories(
        categories.map((categoryMap) => {
          if (categoryMap.id === id) {
            return {
              id,
              category,
            };
          } else return categoryMap;
        })
      );
      onClose();
      setSnackbar({
        open: true,
        message: "Đã sửa thành công",
        mode: "success",
      });
    } catch (err) {
      console.log("lỗi", err.response.data);
    }
  };
  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
      <DialogContent>
        <TextField
          label="Loại sản phẩm"
          type="text"
          variant="outlined"
          size="small"
          value={category}
          autoFocus
          onChange={(e) => setCategory(e.target.value)}
          margin={"normal"}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleUpdateCategory(element.id);
          }}
        >
          Cập nhật
        </Button>
        <Button variant="outlined" onClick={() => onClose()}>
          Hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
};
