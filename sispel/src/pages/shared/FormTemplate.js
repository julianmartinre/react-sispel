import React from "react";
import { Container, Form, Button } from 'react-bootstrap';

export default function FormTemplate(props){

    return(
        <>
            <Container>
                <h1>{props.title}</h1>
                <Form>
                    {
                        props.propiedades.map((propiedad) => (
                            <Form.Group className="mb-3" controlId={propiedad[0]}>
                                <Form.Label>{propiedad[1]}</Form.Label>
                                <Form.Control type={propiedad[2]} placeholder={propiedad[3]} />
                            </Form.Group>
                        ))
                    }

                    {props.boton ? 
                        <Button variant="primary" type="submit">
                            {props.descripcionBoton}
                        </Button>
                    : <span></span>}        
                </Form>
            </Container>
        </>
    );
}