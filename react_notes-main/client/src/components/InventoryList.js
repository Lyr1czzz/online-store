import React from 'react';
import {Button, Row} from "react-bootstrap";
import InventoryItem from "./InventoryItem";
import Modal from "./Modal";

const InventoryList = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Row className="d-flex">
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Пополнить петов
            </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Row>
    );
};

export default InventoryList;