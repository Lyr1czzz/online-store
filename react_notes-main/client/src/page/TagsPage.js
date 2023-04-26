import React, {useContext, useEffect} from 'react';
import {Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTagsInfo} from "../http/filterAPI";

const TagsPage = observer(() => {
    const { notes } = useContext(Context)

    useEffect(() => {
        fetchTagsInfo().then(data => notes.setFilter(data))
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <Row>
                <div className="mt-5 d-flex justify-content-center">
                    <h2>Тут могла быть ваша реклама :)</h2>
                </div>
            </Row>
        </Container>
    );
});

export default TagsPage;