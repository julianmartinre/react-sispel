import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/shared/NavBar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Panel from "./pages/panel/Panel";
import Producto from "./pages/producto/Producto";
import AddProducto from "./pages/producto/AddProducto";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/producto/add" element={<AddProducto />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;