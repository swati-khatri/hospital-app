import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import BasicDetails from "./Components/basicDetails/BasicDetails";

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar and Content Area */}
      <div className="main-content">
        {/* Sidebar */}
        <Sidebar />

        {/* Content (Form area for future steps) */}
        <div className="content">

          <h1>Welcome to the Hospital Form</h1>
          <p>Select a step from the sidebar to fill in details.</p>
          <BasicDetails/>
        </div>
      </div>
    </div>
  );
}

export default App;
