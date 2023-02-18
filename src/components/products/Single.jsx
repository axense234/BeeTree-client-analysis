import React, { useEffect, useState } from "react";
import "./single.css";
import axios from "axios";
import { BeehiveRoute } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import Swal from "sweetalert";

const Single = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { id } = params;

  const getSingleProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:3003/api/hives/${id}`);

      console.log(data);

      setProducts(data.getsinglehive);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProducts();
  }, []);

  const handlesubmit = async () => {
    const message = `Greetings! I hope this message finds you well. I am writing to express my interest in purchasing/buring your bee beeproduct. I am particularly intrigued by the *${products.name}* hive, with its attractive price of *${products.price}*. I would love to learn more about its specifications, particularly the size, *${products.size}*. If you could provide me with further details, I would greatly appreciate it. Thank you for your time and consideration.`;

    try {
      window.open(`https://wa.me/796881039?text=${message}`);
      Swal(
        "Sent Successfully!",
        "Your message has been sent successfully via WhatsApp.",
        "success"
      );
      window.close();
    } catch (error) {
      console.error(error);
      Swal("Oops!", "An error occurred, Please try again later.", "error");
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {loading ? (
          <p>loading ...</p>
        ) : (
          <div className="i-row">
            <div className="col-left">
              <img src={products.image} alt={products.name} />
            </div>
            <div className="col-right">
              <div className="property-features">
                <ul className="features">
                  <li className="feature">
                    <h1>Name</h1>
                    <div className="flex">
                      <h1 className="facility-name">{products.name}</h1>
                    </div>
                  </li>
                  <li className="feature">
                    <h1>Cost</h1>
                    <div className="flex">
                      <h1 className="facility-name">ksh:{products.price}</h1>
                    </div>
                  </li>

                  <li className="feature">
                    <h1>Size</h1>
                    <div className="flex">
                      <h1 className="facility-name">{products.size}</h1>
                    </div>
                  </li>

                  <div className="feature contact">
                    <br></br>
                    <button
                      type="button"
                      className="btn"
                      onClick={handlesubmit}>
                      ENQUIRE
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Single;
