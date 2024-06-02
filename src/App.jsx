// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoriesList from "./component/storiesList/StoriesList";
import StoryDetail from "./component/detailpage/StoryDetail";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar/Navbar";
import BrainyLingoNavbar from "./component/navbar/Navbar";

const App = () => (
  <Router>
  <BrainyLingoNavbar></BrainyLingoNavbar>
    <Routes>
      <Route path="/" element={<StoriesList />} />
      <Route path="/story/:id" element={<StoryDetail />} />
    </Routes>
  </Router>
);

export default App;
