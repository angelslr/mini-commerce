import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


export const DescriptionModal = ({title, description }) => {

    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='secondary' onClick={() => setLgShow(true)}>Leer descripción</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Descripción de {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
            </Modal>
        </>
    )
}