import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import FormSuccess from "./Pages/FormSuccess";
import CV from "./Pages/CV";
import NavBar from "./Components/NavBar";
import Welcome from "./Pages/Welcome";
import ViewEmployee from "./Pages/ViewEmployee";
import CreateEmployee from "./Pages/CreateEmployee";
function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/view" element={<ViewEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Route path="/updateflight" element={<Update />} /> */
}
