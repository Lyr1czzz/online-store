import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Form} from "react-bootstrap";

const RarityBar = observer(() => {
    const {pet} = useContext(Context)

    return (
        <Form className="d-flex">
            {pet.rarities.map(rarity =>
                <Card
                    style={{cursor:'pointer'}}
                    key={rarity.id}
                    className="p-3"
                    onClick={() => pet.setSelectedRarity(rarity)}
                    border={rarity.id === pet.selectedRarity.id ? 'danger' : 'light'}
                >
                    {rarity.name}
                </Card>
            )}
        </Form>
    );
});

export default RarityBar;
