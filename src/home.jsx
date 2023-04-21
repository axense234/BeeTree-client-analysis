import React from "react";
import About from "./About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";

function Home() {
  return (
    <>
      <Navbar />
      <Products />
      <About />
      <Footer />
    </>
  );
}

export default Home;
