import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Registration from "./pages/Registration.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
function App() {
return (
<Routes>
<Route path="/register/" element={<Registration />} />
<Route
path="/"
element={
<ProtectedRoute>
<Home />
</ProtectedRoute>

}
/>
<Route path="/login/" element={<Login />} />
</Routes>
);
}
export default App;