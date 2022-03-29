import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function PanelButton(props){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.route);
    }

    return(
        <>
            <Button variant={props.style} size="lg" onClick={handleClick}>
                {props.name}{props.icon}
            </Button>
        </>
    );
}  