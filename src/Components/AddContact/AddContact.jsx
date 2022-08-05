import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { contactContext } from "../context/ContactProvider";

const AddContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const { addContact } = useContext(contactContext);

  function handleClick() {
    let newDate = {
      name,
      lastName,
      number,
    };

    addContact(newDate);
    setName("");
    setLastName("");
    setNumber("");
  }

  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text>Full name and numbers</InputGroup.Text>
        <Form.Control
          value={name}
          placeholder="Введите имя"
          aria-label="First name"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          value={lastName}
          placeholder="Введите фамилию"
          aria-label="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Control
          value={number}
          aria-label="Numbers"
          placeholder="Введите номер"
          onChange={(e) => setNumber(e.target.value)}
        />
      </InputGroup>
      <Button className="d-flex mx-auto " variant="info" onClick={handleClick}>
        Загрузить
      </Button>{" "}
    </>
  );
};

export default AddContact;
