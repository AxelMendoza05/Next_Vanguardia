import "../assets/Styles/Modal.css";

const Modal = ({ title, body, buttons, className }) => {
  return (
    <div className={`modal-container ${className}`}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div>{body}</div>
      {buttons}
    </div>
  );
};

export default Modal;
