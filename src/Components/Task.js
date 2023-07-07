import React, { useState } from "react";

//icon
import editIcon from "../assets/Icons/editIcon.svg";
import tickIcon from "../assets/Icons/tick.svg";

//Styles
import styles from "./Styles/Task.module.css";

const Task = ({ taskData }) => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(taskData.task);

  const changeHandler = (e) => {
    setCheckBoxValue(e.target.checked);
    taskData.completed = !checkBoxValue;
    // console.log(taskData);
  };

  const editHandler = () => {
    taskData.isEditing = true;
    setIsEditing(taskData.isEditing);
  };

  const clickHandler = () => {
    taskData.isEditing = false;
    setIsEditing(taskData.isEditing);
    taskData.task = editValue;
  };

  return (
    <div className={styles.container}>
      
      <input type="checkbox" value={checkBoxValue} onChange={changeHandler} />

      {taskData.completed ? 
        <p className={styles.completed}>{taskData.task} </p>
       : 
        <div className={styles.taskContainer}>
          {isEditing ? 
            <>
              <input
                value={editValue}
                onChange={(e) => {
                  setEditValue(e.target.value);
                }}
              />
              <img
                className={styles.icon}
                src={tickIcon}
                onClick={clickHandler}
              />
            </>
           : 
            <>
              <p>{taskData.task}</p>
              <img
                className={styles.icon}
                src={editIcon}
                onClick={editHandler}
              />
            </>
          }
        </div>
      }
    </div>
  );
};

export default Task;
