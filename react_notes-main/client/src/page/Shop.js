import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchPets, fetchRarities, fetchTypes} from "../http/petAPI";
import TypeBar from "../components/TypeBar";
import RarityBar from "../components/RarityBar";
import PetList from "../components/PetList";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {pet} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => pet.setTypes(data))
        fetchRarities().then(data => pet.setRarities(data))
        fetchPets(null, null, 1, 2).then(data => {
            pet.setPets(data.rows)
            pet.setTotalCount(data.count)
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        fetchPets(pet.selectedType.id, pet.selectedRarity.id, pet.page, 4).then(data => {
            pet.setPets(data.rows)
            pet.setTotalCount(data.count)
        })
        // eslint-disable-next-line
    }, [pet.page, pet.selectedType, pet.selectedRarity,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <RarityBar/>
                    <PetList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;