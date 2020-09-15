import React from "react";
import { Modal, Button } from "react-bootstrap";


const ModalBoardsVisibility = (props) => {
    if (!props.show || props.show ===false) {
        return null;
    }

    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal Dos</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
};

export default ModalBoardsVisibility;
