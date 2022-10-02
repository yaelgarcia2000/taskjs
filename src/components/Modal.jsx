import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalForm =({open, setOpen, children})=> {
 
  return (
    <>
      <Modal show={open} onHide={() => setOpen(false)}>
        <Modal.Header closeButton>
          {/*<Modal.Title>Crear tarea</Modal.Title>*/}
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
