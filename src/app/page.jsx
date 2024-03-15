"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../assets/Styles/Pages.css";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLoginData = () => {
    console.log(username, password);
    if (username === "admin" && password === "admin") {
      router.push("/NewBook");
    }
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fullScreenCenter">
      <div className="card shadow">
        <h1>Logo</h1>
        <div>
          <Modal
            title="Login"
            body={<Login setUsername={setUsername} setPassword={setPassword} />}
            buttons={
              <Button
                key="loginButton"
                text="Login"
                onClick={handleLoginData}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
