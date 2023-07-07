import React, { useState } from "react";

//Styles
import styles from "./Styles/Task.module.css";

const Task = ({ taskData }) => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const changeHandler = (e) => {
    setCheckBoxValue(e.target.checked);
    taskData.completed = !checkBoxValue;
    // console.log(taskData);
  };

  return (
    <div className={styles.container}>
      <input type="checkbox" value={checkBoxValue} onChange={changeHandler} />
      {taskData.completed ? (
        <p className={styles.completed}>{taskData.task}</p>
      ) : (
        <p className={styles.uncompleted}>{taskData.task}</p>
      )}
    </div>
  );
};

export default Task;
