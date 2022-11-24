import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../containers/home.jsx";

import "../styles/global/App.css";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </HashRouter>
);

export default App;