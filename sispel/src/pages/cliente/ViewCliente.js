import React from "react";
import { Container } from 'react-bootstrap';
import FormTemplate from "../shared/FormTemplate";

export default function ViewCliente(){

    return(
        <>
            <Container>
                <FormTemplate 
                title="Ver Cliente" 
                propiedades={[  ["nombre","Nombre","text","Ingrese el nombre"], 
                                ["apellido","Apellido","text","Ingrese el apellido"],
                                ["direccion","Dirección","text","Ingrese la dirección"],
                                ["telefono","Teléfono","text","Ingrese el teléfono"],
                                ["nacimiento","Fecha de nacimiento","date","Ingrese la fecha de nacimiento"]
                            ]} 
                boton={false}
                />
            </Container>
        </>
    );
}