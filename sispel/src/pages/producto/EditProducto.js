import React from "react";
import { Container } from 'react-bootstrap';
import FormTemplate from "../shared/FormTemplate";

export default function EditProducto(){

    return(
        <>
            <Container>
                <FormTemplate 
                title="Editar Producto" 
                propiedades={[  ["nombre","Nombre","text","Ingrese el nombre"], 
                                ["descripcion","Descripción","text","Ingrese la descripción"],
                                ["precio","Precio","number","Ingrese el precio"]
                            ]} 
                boton={true}
                descripcionBoton="Editar Producto"
                />
            </Container>
        </>
    );
}