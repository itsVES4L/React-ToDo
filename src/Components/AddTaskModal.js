import React, { useContext, useState } from "react";

//Modal
import { Modal } from "react-overlays";
//Styles
import styles from "./Styles/AddTaskModal.module.css";
//context
import { setShowContext, showContext } from "../context/ShowContextProvider";

const renderBackdrop = (props) => (
  <div className={styles.backdrop} {...props} />
);

const AddTaskModal = () => {
  const showModal = useContext(showContext);
  const setShowModal = useContext(setShowContext);

  const [modalTasks, setModalTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTasks = (task) => {
    setModalTasks([...modalTasks, { task: task, completed: false }]);
  };

  const closeHandler = () => {
    setShowModal(false);
    setModalTasks([]);
    setInputValue("");
  };

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addHandler = () => {
    if (inputValue) {
      addTasks(inputValue);
    }
    setInputValue("");
  };
  return (
    <div>
      <Modal
        className={styles.modal}
        show={showModal}
        onHide={closeHandler}
        renderBackdrop={renderBackdrop}
      >
        <div className={styles.boxModal}>
          <input
            type="text"
            placeholder="Write your tasks "
            value={inputValue}
            onChange={changeHandler}
          />

          <div className={styles.modalTasksContainer}>
            {modalTasks.map((task, index) => (
              <p key={index}>{task.task}</p>
            ))}
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={addHandler}> Add </button>
            <button onClick={closeHandler}>Done</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
