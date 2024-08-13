import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/admin_assets/assets";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} alt="" srcset="" />
          <p>Add Items</p>
        </div>

        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" srcset="" />
          <p>List Items</p>
        </div>

        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" srcset="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
