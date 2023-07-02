import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./routes";

const App = () => {
  return (
    <div>
        <Router>
          <AppRoutes />
        </Router>
    </div> 
  );
};

export default App;
