import React from "react";
import "./App.css";
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
