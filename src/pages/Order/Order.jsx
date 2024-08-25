import React from "react";
import "./Order.css";
import { useState } from "react";
import { useEffect } from "react";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.post("http://localhost:4000/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return <div></div>;
};

export default Order;
