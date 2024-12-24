import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ConfigRoutes from "./routes";
import "./App.css";


const App: React.FC = () => {
  return (
    <Router>
      <ConfigRoutes />
      {/* <Request1/> */}
    </Router>
  );
};

export default App;