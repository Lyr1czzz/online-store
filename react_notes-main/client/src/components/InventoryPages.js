import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const InventoryPages = observer(() => {
    const {pet} = useContext(Context)
    const pageCount = Math.ceil(pet.totalCount / inventoryPages.limit)
    const inventoryPages = []

    for (let i = 0; i < pageCount; i++) {
        inventoryPages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {inventoryPages.map(inventoryPages =>
                <Pagination.Item
                    key={inventoryPages}
                    active={pet.inventoryPages === inventoryPages}
                    onClick={() => pet.setPage(inventoryPages)}
                >
                    {inventoryPages}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default InventoryPages;