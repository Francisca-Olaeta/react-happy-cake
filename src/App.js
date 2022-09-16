import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import Tortas from "./Views/Tortas";
import Tartas from "./Views/Tartas";
import Dulces from "./Views/Dulces";
import Contacto from "./Views/Contacto";
import "../src/Assets/sass/App.scss";
import "../src/Assets/sass/styles.js";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tortas" element={<Tortas />} />
          <Route path="/tartas_y_pies" element={<Tartas />} />
          <Route path="/dulces" element={<Dulces />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
