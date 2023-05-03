import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import InventoryItem from "./InventoryItem";

const InventoryList = () => {
    const {pet} = useContext(Context)

    return (
        <Row className="d-flex">
            <InventoryItem/>
        </Row>
    );
};

export default InventoryList;