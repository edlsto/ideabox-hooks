import React, { useState } from "react";
import "./Form.css";
import { addIdea } from "./actions";
import { connect } from "react-redux";

const Form = ({ addIdea }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const submitIdea = () => {
    addIdea({
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form">
      <div className="input-item">
        <label>Title</label>
        <input
          placeholder="Title"
          value={title}
          name="title"
          onChange={handleTitleChange}
        ></input>
      </div>
      <div className="input-item">
        <label>Description</label>
        <input
          placeholder="Description"
          onChange={handleDescriptionChange}
          value={description}
          name="description"
        ></input>
      </div>
      <button onClick={() => submitIdea()}>Submit</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIdea: (idea) => dispatch(addIdea(idea)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
