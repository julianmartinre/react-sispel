import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import PanelButton from "./PanelButton";
import Css from './../css/App.css';

function Panel() {

    return (
      <>
      <br />
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <PanelButton name="Usuarios" style="primary" route="/usuario" icon={<Icon.PeopleFill className="bootstrap-icon" color="white" size={40} />}></PanelButton>              
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <PanelButton name="Clientes" style="secondary" route="/cliente" icon={<Icon.People className="bootstrap-icon" color="white" size={40} />}></PanelButton>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                    <PanelButton name="Productos" style="primary" route="/producto" icon={<Icon.Box className="bootstrap-icon" color="white" size={40} />}></PanelButton>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <PanelButton name="Turnos" style="primary" route="/turno" icon={<Icon.Calendar2Check className="bootstrap-icon" color="white" size={40} />}></PanelButton>              
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <PanelButton name="Servicios" style="secondary" route="/servicio" icon={<Icon.Search className="bootstrap-icon" color="white" size={40} />}></PanelButton>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                    <PanelButton name="Promociones" style="primary" route="/promocion" icon={<Icon.Percent className="bootstrap-icon" color="white" size={40} />}></PanelButton>
                    </div>
                </Col>
            </Row>          
        </Container>   
      </>
    );
  }

export default Panel;