import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <hr />

        <div className="app-content">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />

            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
