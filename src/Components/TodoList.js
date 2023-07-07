import React, { useContext, useState } from "react";
import TaskList from "./TaskList";

//Icon
import AddIcon from "../assets/Icons/Add.svg";
//Style
import styles from "./Styles/TodoList.module.css";
//context
import { setShowContext } from "../context/ShowContextProvider";

const TodoList = () => {
  const setShowModal = useContext(setShowContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addContainer}>
          <img
            onClick={() => setShowModal(true)}
            className={styles.addIcon}
            src={AddIcon}
          />
          <h1> TODO </h1>
        </div>
        <div className={styles.taskContainer}>
          <TaskList />
        </div>
      </div>
    </>
  );
};

export default TodoList;
