import React, { useContext, useEffect } from "react";
import { contactContext } from "../context/ContactProvider";
import { Button, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ContactDetails.css";

const ContactDetails = () => {
  const {
    getContact,
    contactArr,
    deleteContact,
    getContactDetails,
    contactDetailsObj,
  } = useContext(contactContext);

  let { id } = useParams();

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      {contactArr.map((item) => (
        <div key={item.id}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Number</th>
                <th>🗑</th>
                <th>✎</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.number}</td>
                <td>
                  <Link to="/details">
                    <Button onClick={() => deleteContact(item.id)}>
                      Delete
                    </Button>
                  </Link>
                </td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <Button>Edit</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
    </>
  );
};

export default ContactDetails;
