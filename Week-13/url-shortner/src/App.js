import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="parent_container">
        <div className="layout_container">
          <Routes>
            <Route exact path="/" component={<Home />} />
            <Route exact path="/" component={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
