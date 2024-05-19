import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    const resp = await fetch(process.env.BACKEND_URL + "api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });
    console.log(resp);
    if (!resp.ok) throw Error("There was a problem in the signup request");
    const data = await resp.json();
    navigate("/login");
    return data;
  };

  return (
    <div className="auth-container">
      <div className="container form-body">
        <h1 className="title">Signup</h1>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            className="email"
            placeholder="Enter e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleSubmit(email, password)}
        >
          Send
        </button>
      </div>
    </div>
  );
};
