import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Css from './../css/App.css';

function Panel() {
    return (
      <>
      <br />
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                             Empleados
                             <Icon.PeopleFill className="bootstrap-icon" color="white" size={40} />
                        </Button>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <Button variant="secondary" size="lg">
                            Clientes
                            <Icon.People className="bootstrap-icon" color="white" size={40} />
                        </Button>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Productos
                            <Icon.Box className="bootstrap-icon" color="white" size={40} />
                        </Button>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Turnos
                            <Icon.Calendar2Check className="bootstrap-icon" color="white" size={40} />
                        </Button>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <Button variant="secondary" size="lg">
                            Servicios
                            <Icon.Search className="bootstrap-icon" color="white" size={40} />
                        </Button>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Promociones
                            <Icon.Percent className="bootstrap-icon" color="white" size={40} />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>   
      </>
    );
  }

export default Panel;