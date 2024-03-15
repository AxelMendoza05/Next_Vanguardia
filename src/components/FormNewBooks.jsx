"use client";
import React from "react";
import "@/src/assets/Styles/FromNewBooks.css";
const NewBooks = ({ setBookDetails }) => {
  const handleChange = (e) => {
    setBookDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <input
        className="input-style"
        name="id"
        onChange={handleChange}
        placeholder="ID"
      />
      <input
        className="input-style"
        name="name"
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="input-style"
        name="author"
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        className="input-style"
        name="num_pages"
        onChange={handleChange}
        placeholder="Number of Pages"
      />
      <input
        className="input-style"
        type="date"
        name="date_published"
        onChange={handleChange}
      />
      <input
        className="input-style"
        name="publisher"
        onChange={handleChange}
        placeholder="Publisher"
      />
      <input
        className="input-style"
        name="isbn"
        onChange={handleChange}
        placeholder="ISBN"
      />
      <input
        className="input-style"
        name="gender"
        onChange={handleChange}
        placeholder="Gender"
      />
      <input
        className="input-style"
        name="comments"
        onChange={handleChange}
        placeholder="Comments"
      />
      <input
        className="input-style"
        name="edition"
        onChange={handleChange}
        placeholder="Edition"
      />
      <br />
      <br />
    </div>
  );
};

export default NewBooks;
