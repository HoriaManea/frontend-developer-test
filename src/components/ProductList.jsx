import React, { memo } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductList = ({ products, addProduct }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="product-card h-100">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>

            <div className="product-info">
              <h5 className="product-title">
                {product.title.substring(0, 40)}...
              </h5>
              <p className="product-desc">
                {product.description.substring(0, 60)}...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="product-price">${product.price}</span>
                <select className="variant-select">
                  <option>Default</option>
                  <option>Variant 1</option>
                </select>
              </div>
            </div>

            <div className="product-actions">
              {product.rating?.count === 0 ? (
                <button className="btn btn-secondary w-100 mb-2" disabled>
                  Out of Stock
                </button>
              ) : (
                <button
                  className="btn btn-dark w-100 mb-2"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              )}
              <Link
                to={`/product/${product.id}`}
                className="btn btn-outline-dark w-100"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(ProductList);
