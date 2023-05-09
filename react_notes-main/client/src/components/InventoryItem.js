import React from 'react';
import {useNavigate} from "react-router-dom";
import {Card, Col} from "react-bootstrap";
import {BASKET_ROUTE} from "../utils/consts";
import Image from "react-bootstrap/Image";
import plus from "./plus.png"

const InventoryItem = () => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() =>  navigate(BASKET_ROUTE)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={plus}/>
                <div>Add pets</div>
            </Card>
        </Col>
    );
};

export default InventoryItem;