import React from "react";

function ToDoCard(props) {
  const { complete, checked, markDone, remove, task, id } = props;

  return (
    <div className="card">
      <input
        type="checkbox"
        value={checked}
        onClick={() => markDone(id)}
        id={id}
        name={task}
      />
      <label htmlFor={task}>{task}</label>
      <button onClick={() => remove(id)}>remove</button>
    </div>
  );
}

export { ToDoCard };
