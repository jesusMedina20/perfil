import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Checkin from "./pages/checkin";
import Login from "./pages/login";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Perfil from "./pages/Perfil";
import { PrivateRoute } from "./components/PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkin" element={<Checkin />} />
          <Route
            path="/Perfil"
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
