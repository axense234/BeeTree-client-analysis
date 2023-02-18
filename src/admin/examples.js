
//HII NI YANGU ACHANA NAYO...











// POSTING IMAGES FROM CLOUDINARY TO YOUR FRONTEND
// import React, { useState } from "react";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import "./profile.scss";
// import Header from "../../Header";
// import Footer from "../Footer/Footer";
// import axios from "axios";
// import { useEffect } from "react";
// function Profile() {
//   const [loading, setLoading] = useState(false);
//   const [property, setProperty] = useState([]);

//   const getUser = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get("http://localhost:3001/api/building");
//       setProperty(data.properties);
//       console.log(data);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       setLoading(false);
//     }
//     // console.log(property.img)
//   };

//   // console.log(property)

//   useEffect(() => {
//     getUser();
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="rprofile">
//         <h1>helloo</h1>
//         {loading ? (
//           <p>LOading...</p>
//         ) : (
//           property.map((item) => (
//             <div key={item._id} className="profile">
//             <div className="details">
//               <h1>name:{item.apartmentName}</h1>
//               <img src={item.img} className="img"/>
//               <p>category:{item.category}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Profile;







// POSTING YOUR PICS TO CLOUDINARY AND BACKEND ASLO



import React from "react";
import "./new.scss";
import Sidebar2 from "../sidebar/Sidebar2";
import Navbar2 from "../navbar/Navbar2";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { buildingRoute } from "../../../api/api";

const New = ({ inputs, title }) => {
  // const [files, setFiles] = useState("");     storing selected image files
  // const [loadingUpload, setLoadingUpload] = useState(false); for storing the upload status of the images
  // const [loading, setLoading] = useState(false); storing the status of the form submission,
  const [building, setBuilding] = useState({
    apartmentName: "",
    // location: "",           storing the building information entered into the form.
    price: "",
    purpose: "",
    description: "",
    telNum: "",
    category: "",
    img: "",
  });




  // changeHandler  function updates the building state variable based on user input in the form. If the input is an image file, it uploads the image to a cloud service (Cloudinary) using axios and stores the returned image URL in the building state. If the input is a text field, it updates the corresponding field in the building state

  const changeHandler = async (e) => {
    if (e.target.name === "file") {
      setFiles(e.target.files);
      setLoadingUpload(true);

      const formData = new FormData();
      formData.append("upload_preset", "muohmkoe");
      formData.append("cloud_name", "dgofftfvk");

      let newImgUrls = [...building.img];
      for (const file of Array.from(e.target.files)) {
        formData.set("file", file);
        try {
          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dgofftfvk/upload",
            formData

            // using axios make function and use it immediately on useeffect
            // const res = await axios.post("urlclod")

            // const data = res.data.url
          );
          console.log(res);

          const data = res.data.url
          console.log(data)

          newImgUrls.push(data);
        } catch (error) {
          console.error(error);
        }
      }
      setBuilding({ ...building, img: newImgUrls });
      setLoadingUpload(false);
    } else {
      setBuilding({ ...building, [e.target.name]: e.target.value });
    }
  };



  // The handleSubmit function sends a POST request to the API endpoint to create a new building with the information stored in the building state. The function validates the form inputs and displays an error message if any required field is missing. The function also sets the loading state to true while the API request is in progress.


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(building);
    if (building.img || !building.img) {
      try {
        if (
          !building.apartmentName ||
          !building.location ||
          !building.price ||
          !building.description ||
          !building.category ||
          !building.purpose ||
          !building.telNum
        ) {
          alert("All fields are required");
          return;
        }
        setLoading(true);

        const { data } = await axios.post(`${buildingRoute}/create`, building);
        console.log(data);
        setLoading(false);
        alert("succesfully uploaded");
        setBuilding({
          apartmentName: "",
          location: "",
          price: "",
          description: "",
          purpose: "",
          telNum: "",
          category: "",
          img: "",
        });
      } catch (error) {
        setLoading(false);
      }
    } else {
      alert("image is required");
    }
  };

  return (
    <div className="new">
      <Sidebar2 />
      <div className="newcontainer">
        <Navbar2 />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files.length
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              name="file"
            />
          </div>
          <div className="right">
            <form>
              <div className="forminput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  multiple
                  accept="image/*"
                  onChange={changeHandler}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="forminput" key={input.id}>
                  <label>{input.label}:</label>
                  {input.type === "select" ? (
                    <select
                      name={input.name}
                      onChange={changeHandler}
                      placeholder={input.placeholder}>
                      {input.options.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={input.type}
                      name={input.name}
                      onChange={changeHandler}
                      placeholder={input.placeholder}
                    />
                  )}
                </div>
              ))}

              <button
                onClick={handleSubmit}
                disabled={loadingUpload || loading}>
                {loading
                  ? "Loading..."
                  : loadingUpload
                  ? "Uploading..."
                  : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;










