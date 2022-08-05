import React from "react";
import ContactProvider from "./Components/context/ContactProvider";
import NavBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <ContactProvider>
      <NavBar />
      <MainRoutes />
    </ContactProvider>
  );
};

export default App;
