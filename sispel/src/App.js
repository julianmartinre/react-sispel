import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/shared/NavBar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Panel from "./pages/panel/Panel";
import Empleado from "./pages/empleado/Empleado";
import Cliente from "./pages/cliente/Cliente";
import Turno from "./pages/turno/Turno";
import Servicio from "./pages/servicio/Servicio";
import Promocion from "./pages/promocion/Promocion";
import Producto from "./pages/producto/Producto";
import AddProducto from "./pages/producto/AddProducto";
import EditProducto from "./pages/producto/EditProducto";
import DeleteProducto from "./pages/producto/DeleteProducto";
import ViewProducto from "./pages/producto/ViewProducto";

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
        <Route path="/producto/edit" element={<EditProducto />} />
        <Route path="/producto/delete" element={<DeleteProducto />} />
        <Route path="/producto/view" element={<ViewProducto />} />
        <Route path="/empleado" element={<Empleado />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/turno" element={<Turno />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/promocion" element={<Promocion />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;