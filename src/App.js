import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import ServicesPage from "./pages/ServicesPage";
import CarrersPage from "./pages/CarrersPage";
import HomePage from "./pages/HomePage";
import AppNavbar from "./components/partial/AppNavbar";
import AppFooter from "./components/partial/AppFooter";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/careers" element={<CarrersPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
