import React from "react";
import "./Add.css";
import { assets } from "../../assets/admin_assets/assets";

const Add = () => {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>

          <label htmlFor="image" className="image">
            <img src={assets.upload_area} alt="" srcset="" />
          </label>
          <input type="file" name="" id="" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>

          <input type="text" name="name" id="" placeholder="Type Here" />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            placeholder="write content here"
            id=""
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category"></select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
