import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
);
  
}

export default App;
