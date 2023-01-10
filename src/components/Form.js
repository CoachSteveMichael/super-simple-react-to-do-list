import React from "react";
import { useState } from "react";

function Form(props) {
  const { addNew } = props;
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData) return;
    addNew(formData);
    setFormData("");
  }
  return (
    <form>
      <input
        type="text"
        placeholder="newtask"
        value={formData}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

export { Form };
