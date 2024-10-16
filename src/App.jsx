import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loading from "./components/Loading";
import Home from "./components/home";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden font-bulevar">
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Loading />} />

            <Route path="/home" element={<Home />} />


            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </>
    </div>
  );
};

export default App;
