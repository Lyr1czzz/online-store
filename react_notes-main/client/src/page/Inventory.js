import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import RarityBar from "../components/RarityBar";
import {Context} from "../index";
import {fetchPets, fetchRarities, fetchTypes} from "../http/petAPI";
import {observer} from "mobx-react-lite";
import InventoryList from "../components/InventoryList";
import Pages from "../components/Pages";

const Inventory = observer(() => {
    const {pet} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => pet.setTypes(data))
        fetchRarities().then(data => pet.setRarities(data))
        fetchPets(null, null, 1, 2).then(data => {
            pet.setPets(data.rows)
            pet.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchPets(pet.selectedType.id, pet.selectedRarity.id, pet.page, 2).then(data => {
            pet.setPets(data.rows)
            pet.setTotalCount(data.count)
        })
    }, [pet.page, pet.selectedType, pet.selectedRarity,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <RarityBar/>
                    <InventoryList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Inventory;