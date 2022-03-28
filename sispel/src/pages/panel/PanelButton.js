import React from "react";
import { Button } from "react-bootstrap";

export default function PanelButton(props){

    return(
        <>
            <Button variant={props.style} size="lg">
                {props.name} {props.icon}
            </Button>
        </>
    );
}