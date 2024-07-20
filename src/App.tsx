import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
