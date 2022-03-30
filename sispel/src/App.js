import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/shared/NavBar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Panel from "./pages/panel/Panel";
import Turno from "./pages/turno/Turno";
import Servicio from "./pages/servicio/Servicio";
import Promocion from "./pages/promocion/Promocion";
import Producto from "./pages/producto/Producto";
import AddProducto from "./pages/producto/AddProducto";
import EditProducto from "./pages/producto/EditProducto";
import DeleteProducto from "./pages/producto/DeleteProducto";
import ViewProducto from "./pages/producto/ViewProducto";
import Cliente from "./pages/cliente/Cliente";
import AddCliente from "./pages/cliente/AddCliente";
import EditCliente from "./pages/cliente/EditCliente";
import DeleteCliente from "./pages/cliente/DeleteCliente";
import ViewCliente from "./pages/cliente/ViewCliente";
import Usuario from "./pages/usuario/Usuario";

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
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/cliente/add" element={<AddCliente />} />
        <Route path="/cliente/edit" element={<EditCliente />} />
        <Route path="/cliente/delete" element={<DeleteCliente />} />
        <Route path="/cliente/view" element={<ViewCliente />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/turno" element={<Turno />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/promocion" element={<Promocion />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;