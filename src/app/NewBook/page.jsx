"use client";
import { useState } from "react";
import Button from "@/src/components/Button";
import Modal from "@/src/components/Modal";
import "@/src/assets/Styles/Pages.css";
import "@/src/assets/Styles/Modal.css";

export default function NewBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButton = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addBook = () => {
    console.log("Add Book");
  };

  return (
    <div className="fullScreenCenter">
      <h1>New Book</h1>
      <Button key="modalButton" text="Crear" onClick={handleButton} />
      {isModalOpen && (
        <div className={`modalBackground ${isModalOpen ? "open" : ""}`}>
          <Modal
            className={`modalPopup ${isModalOpen ? "open" : ""}`}
            title="New Book"
            body="Modal Body"
            buttons={[
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button text="Close" onClick={closeModal} />,
                <Button text="Add Book" onClick={addBook} />,
              </div>,
            ]}
          />
        </div>
      )}
    </div>
  );
}
