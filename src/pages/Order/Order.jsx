import React from "react";
import "./Order.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { assets } from "../../../../frontend/src/assets/food del assets/frontend_assets/assets";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get("http://localhost:4000/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      console.log("error", response.data);
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(
      "http://localhost:4000/api/order/status",
      {
        orderId,
        status: event.target.value,
      }
    );

    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>

      <div className="order-list">
        {orders?.map((order, index) => {
          return (
            <>
              <div key={index} className="order-item">
                <img src={assets.parcel_icon} alt="" srcset="" />

                <div>
                  <p className="order-item-food">
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + item.quantity + ",";
                      }
                    })}
                  </p>

                  <p className="order-item-name">
                    {order.address.firstName + " " + order.address.firstName}
                  </p>

                  <div className="order-item-address">
                    <p>{order.address.street + " "}</p>
                    <p>
                      {order.address.city +
                        " " +
                        order.address.state +
                        order.address.country}
                    </p>
                  </div>

                  <p className="order-item-phone">{order.address.phone}</p>
                </div>

                <p> Item : {order.items.length} </p>

                <p> ${order.amount} </p>

                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="out For Deliver">out For Deliver</option>

                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
