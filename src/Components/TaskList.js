import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import Task from "./Task";
//Styles
import styles from "./Styles/TaskList.module.css";

const TaskList = () => {
  const [todos, setTodos] = useState([]);
  const [showTaskList, setShowTaskList] = useState(false);

  const addTodo = (task) => {
    setTodos([...todos, ...task]);
    setShowTaskList(true);
  };

  return (
    <div className={styles.container}>
      <AddTaskModal addTodo={addTodo} />

      {showTaskList ? (
        <div className={styles.tasksContainer}>
          {todos.map((task, index) => (
            <Task key={index} taskData={task} />
          ))}
          <button
            className={styles.completedButton}
            onClick={() => {
              setTodos([]);
              setShowTaskList(false);
            }}
          >
            Completed
          </button>
        </div>
      ) :  <h3> Click on + and add your tasks ! </h3>}
      
    </div>
  );
};

export default TaskList;
