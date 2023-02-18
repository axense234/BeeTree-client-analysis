import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { BeehiveRoute } from "../../api/api";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(BeehiveRoute);

      console.log(data.getallhives);

      setProducts(data.getallhives.slice(0, 18));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-container">
      <div className="headers">
        <h2 className="sale">BEEHIVES</h2>
        <Link to="/allproducts" style={{ textDecoration: "none" }}>
          {" "}
          <button className="">See more</button>
        </Link>
      </div>

      <div className="products">
        {loading ? (
          <p>loading ...</p>
        ) : (
          products.map((item) => (
            <div className="productssitems" key={item._id}>
              <div className="img">
                <img src={item.image} alt={item.name} />
              </div>
              <Link
                to={`/products/${item._id}`}
                style={{ textDecoration: "none" }}>
                <div className="productssfooter">
                  <h2 className="productssname">{item.name}</h2>
                  <h4 className="productssprice">Ksh: {item.price}</h4>
                  <h4 className="size">{item.size}</h4>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
