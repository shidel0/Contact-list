import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../context/ContactProvider";

const EditContact = () => {
  const { contactDetailsObj, getContactDetails, editContactPatch } =
    useContext(contactContext);

  const [editName, setEditName] = useState(contactDetailsObj.name);
  const [editLastName, setEditLastName] = useState(contactDetailsObj.lastName);
  const [editNumber, setEditNumber] = useState(contactDetailsObj.number);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getContactDetails(id);
  }, [id]);

  function handleClick() {
    let editedContact = {
      name: editName,
      lastName: editLastName,
      number: editNumber,
    };
    editContactPatch(id, editedContact);
    navigate("/details");
  }

  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text>Full name and numbers</InputGroup.Text>
        <Form.Control
          value={editName}
          placeholder="Введите имя"
          aria-label="First name"
          onChange={(e) => setEditName(e.target.value)}
        />
        <Form.Control
          value={editLastName}
          placeholder="Введите фамилию"
          aria-label="Last name"
          onChange={(e) => setEditLastName(e.target.value)}
        />
        <Form.Control
          value={editNumber}
          aria-label="Numbers"
          placeholder="Введите номер"
          onChange={(e) => setEditNumber(e.target.value)}
        />
      </InputGroup>
      <Button className="d-flex mx-auto " variant="info" onClick={handleClick}>
        Изменить
      </Button>{" "}
    </>
  );
};

export default EditContact;
