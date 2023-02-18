import React from "react";
import About from "./about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
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
