import React, { useEffect, useState } from "react";
import "./List.css";
import { toast } from "react-toastify";
import axios from "axios";
const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      console.log(response);
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const handleRemove = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });

    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.error);
    }

    await fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image </b>
          <b>Name</b>
          <b>Categoy</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" srcset="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <b className="cursor" onClick={() => handleRemove(item._id)}>
                x
              </b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
