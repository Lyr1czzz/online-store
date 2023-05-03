import React from 'react';
import {useNavigate} from "react-router-dom";
import {Card, Col} from "react-bootstrap";
import {BASKET_ROUTE} from "../utils/consts";
import Image from "react-bootstrap/Image";

const InventoryItem = () => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() =>  navigate(BASKET_ROUTE)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150}/>
                <div>name: fsafsd</div>
                <div>price: 0.43</div>
            </Card>
        </Col>
    );
};

export default InventoryItem;