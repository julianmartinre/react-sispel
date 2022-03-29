import React from "react";
import { Container, Form } from 'react-bootstrap';

export default function ViewProducto(){

    return(
        <>
            <Container>
                <h1>Ver Producto</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre del producto" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese la descripción del producto" />
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}