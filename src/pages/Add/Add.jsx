import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/admin_assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });

      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>

          <label htmlFor="image" className="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              srcset=""
            />
          </label>
          {/* imp */}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id=""
            // hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>

          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            id=""
            placeholder="Type Here"
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="write content here"
            id=""
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              id=""
            />
          </div>
        </div>
        <button className="add-btn" type="submit">
          {" "}
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
