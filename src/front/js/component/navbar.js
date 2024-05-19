import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt-token");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1">
          JWT Project
        </Link>
        <div className="ml-auto">
          <div style={{ display: "inline-block", marginRight: "10px" }}>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </div>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
          <div style={{ display: "inline-block" }}>
            <button className="btn btn-link text-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
