import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
);
  
}

export default App;
