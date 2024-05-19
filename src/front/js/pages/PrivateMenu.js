import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrivateMenu = () => {
  const Navigate = useNavigate("");
  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      Navigate("/login");
    } else {
      getMyTask();
    }
  }, [Navigate]);

  const getMyTask = async () => {
    try {
      const token = localStorage.getItem("jwt-token");
      const resp = await fetch(process.env.BACKEND_URL + "/api/protected", {
        methods: "GET",
        headers: {
          "Content-Type": "application_json",
          Authoritation: "Bearer" + token,
        },
      });
      if (!resp.ok) {
        throw new Error("Error de Autenticación");
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="private-container text-center">
      <h1 className="private-title pt-5">Estás dentro!</h1>
      <p className="texto-private">
        Pulsa el botón "Logout" para cerrar sesión
      </p>
    </div>
  );
};
