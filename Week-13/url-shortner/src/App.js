import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="parent_container">
        <div className="layout_container">
          <Routes>
            <Route exact path="/" component={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
