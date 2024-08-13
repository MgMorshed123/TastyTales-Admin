import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <hr />

        <div className="app-content">
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
}

export default App;
