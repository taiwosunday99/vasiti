import React from "react";
import "./App.css";

function App() {
  return (
    <main className="container">
      <header className="text-center">
        <h1>Avios</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Create product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              View Products
            </a>
          </li>
        </ul>
      </header>
      <div className="row">
        <form className="col-11 col-sm-8">
          <div className="border my-3 px-3 rounded">
            <p className="h3 text-center">Add a product</p>
            <div className="form-group">
              <label htmlFor="product_name">Product name</label>
              <input
                id="product_name"
                name="product_name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="product_description">Product description</label>
              <textarea
                className="form-control"
                id="product_description"
                name="product_description"
                rows="3"
              ></textarea>
            </div>
            <div className="text-center mb-3">
              <button className="btn btn-secondary">Add variety</button>
            </div>
          </div>
          <p className="h4 text-center">Add a variety</p>
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <input
              id="size"
              name="size"
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              id="color"
              name="color"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="quantity"
            />
          </div>
          <div className="custom-file">
            <label className="custom-file-label" htmlFor="images">
              Choose product images
            </label>
            <input
              className="custom-file-input"
              name="images"
              id="images"
              type="file"
              accept=".jpg,.png, .jpeg, .webp"
              multiple
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              className="form-control"
            />
          </div>
          <div>
            <p className="h4"> Product details</p>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default App;
