import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./MyContext";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div>
      <MyContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </MyContextProvider>
    </div>
  );
};

export default App;
