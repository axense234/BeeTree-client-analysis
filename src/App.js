import React from "react";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./admin/uploading/dashboard.jsx";
import AllProducts from "./components/products/Allproducts.jsx";
import Single from "./components/products/Single.jsx";

import Home from "./home.jsx";
import Login from "./login.jsx";

import Register from "./register.jsx";

function ProtectedRoute({ isAuth, element }) {
  const Navigate = useNavigate();
  return isAuth ? element : <Navigate to="/" />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute
                isAuth={
                  localStorage.getItem("userEmail") === "Waphilo7@gmail.com"
                }
                element={<Dashboard />}
              />
            }
          />

          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/products/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
