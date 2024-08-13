import React, { useEffect, useState } from "react";
import "./List.css";
import { toast } from "react-toastify";
const List = () => {
  const url = "http://localhost:5173";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.success);
    } else {
      toast.error("Error");
    }
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
