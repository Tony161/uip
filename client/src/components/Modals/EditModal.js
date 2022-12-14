import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import {useTasks} from '../../Context/reducer';
import {editTask} from '../../api/editTask';

function EditModal({show, handleClose, editData}) {
    const {state, dispatch} = useTasks();
    const {name = '', url = '', estimationHours} = editData;
    const [estimation, setEstimationHours] = useState(estimationHours);

    const onEstimationHoursChange = ({target: {value}}) => {
        setEstimationHours(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        let newData = {
            ...editData,
            estimationHours: +estimation || estimationHours
        };
        editTask(newData, dispatch);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактировать задачу</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} id={'myForm'}>
                    <Form.Group className="mb-3" controlId="formBasicTask">
                        <Form.Label>Наименование задачи</Form.Label>
                        <Form.Control type="text" disabled defaultValue={name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUrl">
                        <Form.Label>Адрес задачи</Form.Label>
                        <Form.Control type="text" defaultValue={url} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEstimationHours">
                        <Form.Label>Оценка задачи</Form.Label>
                        <Form.Control type="number" defaultValue={estimationHours} onChange={onEstimationHoursChange} />
                    </Form.Group>
                </Form>
                {state.error && <h6>{state.error}</h6>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    Отменить
                </Button>
                <Button variant="outline-primary" type="submit" form="myForm">
                    Применить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;
