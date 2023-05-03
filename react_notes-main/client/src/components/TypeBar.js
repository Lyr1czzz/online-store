import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {pet} = useContext(Context)
    return (
        <ListGroup>
            {pet.types.map(type =>
                <ListGroup.Item
                    active={type.id === pet.selectedType.id}
                    onClick={() => pet.setSelectedType(type)}
                    style={{cursor: 'pointer'}}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
