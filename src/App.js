import React from "react";
import "./App.css";
import Form from "./Form";
import CardsContainer from "./CardsContainer";

const App = () => {
  return (
    <div>
      <h1>My ideas</h1>
      <Form />
      <CardsContainer />
    </div>
  );
};

export default App;
