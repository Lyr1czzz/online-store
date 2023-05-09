import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {createTake} from "../http/petAPI";

function MyVerticallyCenteredModal(props) {

    const [name, setName] = useState('')
    const click = () => {
        try{
            createTake({userName: name}).then(data => {
                setName('')
                props.onHide()
            })
            alert("Запрос отправлен")
        }
        catch (e){
            alert(e.response.data.message)
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Введите свои данные
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Имя пользователя</h4>
                <Form.Control
                    className="mt-4"
                    placeholder="Введите ваше имя roblox"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={click}>Отправить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal