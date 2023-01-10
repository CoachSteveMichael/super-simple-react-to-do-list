import React from "react";
import { useState } from "react";
import { ToDoCard } from "./ToDoCard";
import { Form } from "./Form";

function ToDoList(props) {
  const [tasks, setTasks] = useState([
    {
      task: "sample",
      checked: false,
      complete: false,
      id: 0
    }
  ]);

  const [finished, setFinished] = useState([]);

  function addNew(text) {
    let copy = [
      ...tasks,
      { task: text, checked: false, complete: false, id: Math.random() }
    ];
    setTasks(copy);
  }

  function markDone(id) {
    let copy = [...tasks];
    for (let i = 0; i < tasks.length; i++) {
      if (copy[i].id === id) {
        copy[i].checked = !copy[i].checked;
        copy[i].complete = !copy[i].complete;
      }
    }
    setTasks(copy);
  }

  function remove(id) {
    let copy = [...tasks];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === id) {
        copy.splice(i, 1);
      }
    }
    setTasks(copy);
  }

  let finishedElements = finished.map((ele) => ({ ele }));
  let cardElements = tasks.map((ele) => (
    <ToDoCard
      task={ele.task}
      key={ele.id}
      id={ele.id}
      checked={ele.checked}
      markDone={markDone}
      remove={remove}
    />
  ));

  let completed = tasks.filter((ele) => ele.checked === true);

  //state for tasks
  //addnew function
  //mark done function
  //remove function

  return (
    <div className="todolist">
      <Form addNew={addNew} />
      {cardElements}
      <p>Complete: {completed.length}</p>
    </div>
  );
}

export { ToDoList };
