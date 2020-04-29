import React from "react";
import "./CardsContainer.css";
import { connect } from "react-redux";
import Card from "./Card";

const CardsContainer = ({ ideas }) => {
  const cards = ideas.map((idea) => {
    return <Card title={idea.title} description={idea.description} />;
  });
  return <div className="cards-container">{cards}</div>;
};

const mapStateToProps = ({ ideas }) => ({
  ideas,
});

export default connect(mapStateToProps)(CardsContainer);
