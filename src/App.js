import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import FormSuccess from "./Pages/FormSuccess";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/success" element={<FormSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Route path="/updateflight" element={<Update />} /> */
}
