import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/login" element={<h1>Login Admin</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage/>} />
        </Routes>
      </AuthProvider>
      <Routes>
        <Route path="/admin/register" element={<h1>Register Admin</h1>} />
        <Route path="/add-product" element={<h1>Create Product</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
