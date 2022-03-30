import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import PanelButton from "./../panel/PanelButton";

export default function ABMPanel(props){

    return(
        <>
            <Container>
                <h2>{props.title}</h2>
                <Row>
                    <Col xs={6} md={3}>
                        <div className="d-grid gap-2">
                            <PanelButton name="Agregar" style="primary" route={"/"+ props.route + "/add"} icon={<Icon.Box className="bootstrap-icon" color="white" size={40} />}></PanelButton>              
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="d-grid gap-2">
                            <PanelButton name="Editar" style="primary" route={"/"+ props.route + "/edit"} icon={<Icon.Box className="bootstrap-icon" color="white" size={40} />}></PanelButton>              
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="d-grid gap-2">
                            <PanelButton name="Eliminar" style="primary" route={"/"+ props.route + "/delete"} icon={<Icon.Box className="bootstrap-icon" color="white" size={40} />}></PanelButton>              
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="d-grid gap-2">
                            <PanelButton name="Ver" style="primary" route={"/"+ props.route + "/view"} icon={<Icon.Box className="bootstrap-icon" color="white" size={40} />}></PanelButton>              
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}  