import React, { useEffect, useState } from "react";
import "../assets/Styles/Modal.css";

const Modal = ({ title, body, buttons, className = "" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${className}`}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div>{body}</div>
      {buttons}
    </div>
  );
};

export default Modal;
