import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  Backdrop,
  CircularProgress,
  IconButton,
  Paper,
  Snackbar,
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
import { EditClient } from "../components/EditClient";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { MySnackbar } from "../components/Snackbar";
import { MyModal } from "../modal";
import { BodyRight, ContainerBody } from "../styles";
export const Client = () => {
  const [openModal, setOpenModal] = useState(false);
  const [clientEdit, setClientEdit] = useState({});
  const [clients, setClients] = useState([]);
  const [idDelete, setIdDelete] = useState("0");
  const [openSidebar, setOpenSidebar] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    mode: "success",
  });
  const [openModalEdit, setOpenModalEdit] = useState(false);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/users/client");
        setClients(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchClients();
  }, []);
  const handleDeleteClient = async () => {
    try {
      await axios.put(`http://localhost:8800/api/users/delete/${idDelete}`);
      setClients(clients.filter((client) => client.id !== idDelete));
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
        <EditClient
          open={openModalEdit}
          onClose={() => setOpenModalEdit()}
          element={clientEdit}
          clients={clients}
          setClients={setClients}
          setSnackbar={setSnackbar}
        />
      )}
      <MyModal
        handleDeleteById={handleDeleteClient}
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
                  <TableCell>Username</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>IsAdmin</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.map((client) => {
                  return (
                    <TableRow
                      key={client.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{client.id}</TableCell>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.username}</TableCell>
                      <TableCell>{client.password}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>{client.isAdmin}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            // openMoDalEdit();
                            setOpenModalEdit(true);
                            setClientEdit(client);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setIdDelete(client.id);
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
