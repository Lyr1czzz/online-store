import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const InventoryItem = ({pet}) => {

    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + pet.img}/>
                <div>name: {pet.name}</div>
                <div>price: {pet.price}</div>
                <Button>
                    Продать
                </Button>
            </Card>
        </Col>
    );
};

export default InventoryItem;