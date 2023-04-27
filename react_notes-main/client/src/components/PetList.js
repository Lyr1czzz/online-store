import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PetItem from "./PetItem";

const PetList = observer(() => {
    const {pet} = useContext(Context)

    return (
        <Row className="d-flex">
            {pet.pets.map(pet =>
                <PetItem key={pet.id} pet={pet}/>
            )}
        </Row>
    );
});

export default PetList;

