import React, { createContext, useReducer } from "react";
import axios from "axios";

export const contactContext = createContext();
const API = "http://localhost:8000/topics";

const INIT_STATE = {
  contacts: [],
  contactDetails: {},
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return { ...prevState, contacts: action.payload };
    case "GET_CONTACTS_DETAILS":
      return { ...prevState, contactDetails: action.payload };
    default:
      return prevState;
  }
};

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = (contact) => {
    axios.post(API, contact);
  };
  const getContactDetails = async (id) => {
    // totalPageFunc();
    let { data } = await axios(`${API}/${id}`);
    let action = {
      type: "GET_CONTACTS_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  const getContact = async () => {
    const { data } = await axios.get(API);

    let action = {
      type: "GET_CONTACT",
      payload: data,
    };

    dispatch(action);
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContact();
  };

  const editContactPatch = async (id, editContact) => {
    await axios.patch(`${API}/${id}`, editContact);
  };

  let cloud = {
    addContact,
    getContact,
    deleteContact,
    getContactDetails,
    editContactPatch,
    contactArr: state.contacts,
    contactDetailsObj: state.contactDetails,
  };

  return (
    <contactContext.Provider value={cloud}>{children}</contactContext.Provider>
  );
};

export default ContactProvider;
