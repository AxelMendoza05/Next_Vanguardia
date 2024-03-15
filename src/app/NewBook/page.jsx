"use client";
import { useState, useEffect } from "react";
import Button from "@/src/components/Button";
import Modal from "@/src/components/Modal";
import NewBooks from "@/src/components/FormNewBooks";
import "@/src/assets/Styles/Pages.css";
import "@/src/assets/Styles/Modal.css";
import { postBook } from "@/src/Services/BooksAxios";

export default function NewBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    id: "",
    name: "",
    author: "",
    num_pages: "",
    date_published: "",
    publisher: "",
    isbn: "",
    gender: "",
    comments: "",
    edition: "",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleButton = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addBook = async () => {
    await postBook(bookDetails);
    setIsModalOpen(false);
  };

  const isBookDetailsEmpty = Object.values(bookDetails).some(
    (x) => x === null || x === ""
  );

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fullScreenCenter">
      <h1>New Book</h1>
      <Button key="modalButton" text="Crear" onClick={handleButton} />
      {isModalOpen && (
        <div className={`modalBackground ${isModalOpen ? "open" : ""}`}>
          <Modal
            className={`modalPopup ${isModalOpen ? "open" : ""}`}
            title="New Book"
            body={<NewBooks setBookDetails={setBookDetails} />}
            buttons={[
              <div
                key="buttonDiv"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button key="closeButton" text="Close" onClick={closeModal} />
                <Button
                  key="addBookButton"
                  text="Add Book"
                  onClick={addBook}
                  disabled={isBookDetailsEmpty}
                />
              </div>,
            ]}
          />
        </div>
      )}
    </div>
  );
}
