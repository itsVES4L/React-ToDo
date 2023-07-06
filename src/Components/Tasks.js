import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";

const Tasks = () => {
  const [todos, setTodos] = useState();

  const addTodo = (task) => {
    setTodos([...task]);
  };

  return (
    <div>
      <AddTaskModal addTodo={addTodo} />
    </div>
  );
};

export default Tasks;
