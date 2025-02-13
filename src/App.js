import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Create_Account } from "./pages/Create_Account";
import { Home } from "./pages/Home";
import { Inquiry } from "./pages/Inquiry";
import { Login } from "./pages/Login";
import { Record } from "./pages/Record";
import { Search_Result_Details } from "./pages/Search_Result_Details";
import { Search_Result } from "./pages/Search_Result";
import { Statics } from "./pages/Statics";
import { Review_Check } from "./pages/Review_Check";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create_Account" element={<Create_Account />} />
        <Route path="Inquiry" element={<Inquiry />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Record" element={<Record />} />
        <Route path="Result_Details" element={<Search_Result_Details />} />
        <Route path="/Search_Result" element={<Search_Result />} />
        <Route path="/Statics" element={<Statics />} />
        <Route path="/Review_Check" element={<Review_Check />} />
      </Routes>
    </Router>
  );
}

export default App;
