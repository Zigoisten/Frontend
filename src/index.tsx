import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auto from "./pages/Auto";
import Autok from "./pages/Autok";
import Flexelso from "./pages/Flexelso";
import Flexmasodik from "./pages/Flexmasodik";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/cars" element={<Autok/>}/>
      <Route path="/cars/:id" element={<Auto/>}/>
      <Route path="/elso" element={<Flexelso/>}/>
      <Route path="/masodik" element={<Flexmasodik/>}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
