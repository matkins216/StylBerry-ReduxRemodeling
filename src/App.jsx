import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-RN6Q9X7NG3');
  return (
  
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
);
  
}

export default App;
