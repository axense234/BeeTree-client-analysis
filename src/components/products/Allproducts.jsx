import React, { useEffect, useState } from "react";
import "../../css/Products.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import getProducts from "../../hooks/getProducts";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(18);

  useEffect(() => {
    getProducts(setLoading, setProducts);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Navbar />
      <div className="allproducts-container">
        <div className="headers">
          <h2 className="sale">BEEHIVES</h2>
        </div>

        <div className="products">
          {loading ? (
            <p>loading ...</p>
          ) : (
            currentProducts.map((item) => (
              <div className="productssitems" key={item._id}>
                <div className="img">
                  <img src={item.image} alt={item.name} />
                </div>
                <Link
                  to={`/products/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
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
        <div className="pagination">
          {pageNumbers.map((number) => (
            <span
              key={number}
              className={currentPage === number ? "active" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
)
}
export default AllProducts;
