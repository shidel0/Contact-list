import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./Components/AddContact/AddContact";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import EditContact from "./Components/EditContact/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddContact />} />
      <Route path="/details" element={<ContactDetails />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
