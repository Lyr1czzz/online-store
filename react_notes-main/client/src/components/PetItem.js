import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom"
import {BASKET_ROUTE} from "../utils/consts";

const PetItem = ({pet}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() =>  navigate(BASKET_ROUTE)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + pet.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>...</div>
                </div>
                <div>{pet.name}</div>
            </Card>
        </Col>
    );
};

export default PetItem;
