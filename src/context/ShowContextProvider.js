import React, { createContext, useState } from "react";

export const showContext = createContext();
export const setShowContext = createContext();

const ShowContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <showContext.Provider value={showModal}>
      <setShowContext.Provider value={setShowModal}>
        {children}
      </setShowContext.Provider>
    </showContext.Provider>
  );
};

export default ShowContextProvider;
