import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("auth"));
  
  // Check if user and user.account are defined
  return user && user.account ? <>{children}</> : <Navigate to="/login/" />;
}

export default ProtectedRoute;
