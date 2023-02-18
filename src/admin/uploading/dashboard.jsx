import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./dashboard.css";

import axios from "axios";

function Dashboard() {
  const [imageloadupload, setImageLoadUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hive, setHive] = useState({
    name: "",
    price: "",
    size: "",
    image: "",
  });
  const uploadImage = async (e) => {
    if (e.target.name === "file") {
      setImageLoadUpload(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "tm4havmt");

      formData.append("cloud_name", "djgk2k4sw");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djgk2k4sw/upload",
          formData,
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        );

        console.log(response);
        console.log(response.data.secure_url);

        const dataurl = response.data.secure_url;
        setHive({ ...hive, image: dataurl });
        setImageLoadUpload(false);
      } catch (error) {
        console.error(error);
        setImageLoadUpload(false);
        alert("Error uploading image. Please try again later.");
      }
    } else {
      setHive({ ...hive, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(hive);

    if (hive.image || !hive.image) {
      try {
        if (!hive.name || !hive.price || !hive.size) {
          alert("All fields are required mate!");
        }

        setLoading(true);

        const { data } = await axios.post(
          "http://localhost:3003/api/hives",
          hive
        );

        console.log(data);

        setLoading(false);

        alert("Uploaded Successfully!");

        setHive({
          name: " ",
          price: " ",
          size: " ",
          image: " ",
        });
      } catch (error) {
        setLoading(false);
      }
    } else {
      alert("image is required.");
    }
  };

  return (
    <>
      <section>
        <Navbar />

        <main className="main" id="details-upload">
          <p className="title">Upload BeeHive Details</p>

          <form>
            <div className="upload">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                onChange={uploadImage}
              />
            </div>

            <div className="upload">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter Price"
                onChange={uploadImage}
              />
            </div>

            <div className="upload">
              <label htmlFor="size">Size:</label>
              <input
                type="text"
                name="size"
                id="size"
                placeholder="Enter Size of the Hive"
                onChange={uploadImage}
              />
            </div>

            <div className="upload">
              <label htmlFor="file">Upload Image:</label>
              <input
                type="file"
                name="file"
                id="file"
                placeholder="Upload the image of the Hive"
                accept="image/*"
                onChange={uploadImage}
              />
            </div>

            <div className="form-footer">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={imageloadupload || loading}>
                {loading
                  ? "Loading..."
                  : imageloadupload
                  ? "uploading..."
                  : "send"}
              </button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
}

export default Dashboard;
