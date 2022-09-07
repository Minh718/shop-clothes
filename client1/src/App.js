import { Home } from "./pages/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { AppDrawer } from "./components/drawer";
import { Login } from "./pages/login";
import { useGlobalContext } from "./context";
import { Admin } from "./admin/page/Main";
import { Client } from "./admin/page/Client";
import { AddProduct } from "./admin/page/AddProduct";
import { Category } from "./admin/page/Category";
import { AddCategory } from "./admin/page/AddCategory";
import { Product } from "./admin/page/Product";
function App() {
  const { user } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/admin"
            element={
              user && Boolean(user.isAdmin) ? (
                <Admin />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/admin/client"
            element={
              user && Boolean(user.isAdmin) ? (
                <Client />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/admin/addProduct"
            element={
              user && Boolean(user.isAdmin) ? (
                <AddProduct />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/admin/category"
            element={
              user && Boolean(user.isAdmin) ? (
                <Category />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/admin/addCategory"
            element={
              user && Boolean(user.isAdmin) ? (
                <AddCategory />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/admin/product"
            element={
              user && Boolean(user.isAdmin) ? (
                <Product />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
