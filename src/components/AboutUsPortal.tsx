import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const AboutUsPortal = () => {
  const formData = new FormData();
  const [SelectedFile, setSelectedFile] = useState();
  const [file, setFile] = useState();
  const [aboutustext, setaboutustext] = useState("");
  const [mission, setmission] = useState("");
  const [vision, setvision] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleImage = () => {
    formData.append("image", file);
    formData.append("option", selectedImage);

    fetch(`http://localhost:8080/api/auth/add/about/image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  const handleAboutUs = () => {
    fetch(`http://localhost:8080/api/auth/update/aboutus/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aboutustext }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  const handleOurMission = () => {
    fetch(`http://localhost:8080/api/auth/update/mission/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mission }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  const handleOurVision = () => {
    fetch(`http://localhost:8080/api/auth/update/vision/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vision }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/auth/about/1");
        if (!response.ok) {
          throw new Error("Network is not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setaboutustext(jsonData.aboutustext);
        setmission(jsonData.mission);
        setvision(jsonData.vision);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };
    fecthData();
  }, []);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const handlefilechange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setSelectedFile(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="about">
      <p className="about__title">About us</p>
      <h4 className="h4">Upload Images</h4> 
     <div className="UploadImg">
       <input
        type="radio"
        name="image"
        value="mission"
        id="mission"
        checked={selectedImage === "mission"}
        onChange={handleImageChange}
      />
      <label>Mission</label>
      <input
        type="radio"
        name="image"
        value="vision"
        id="vision"
        checked={selectedImage === "vision"}
        onChange={handleImageChange}
      />
      <label>Vision</label>
      <img src={SelectedFile} alt="NoImage" className="img" />
      <input type="file" onChange={handlefilechange} className="choosefile"/>
      <button onClick={() => handleImage()} className="savebtn">Save</button>
      </div>
      <div className="about__content">
        <p>About us</p>
        <input
          type="text"
          value={aboutustext}
          onChange={(e) => setaboutustext(e.target.value)}
        ></input>
        <button onClick={() => handleAboutUs()}>Save</button>

        <p>Our Mission</p>
        <input
          type="text"
          value={mission}
          onChange={(e) => setmission(e.target.value)}
        ></input>
        <button onClick={() => handleOurMission()}>Save</button>

        <p>Our Vision</p>
        <input
          type="text"
          value={vision}
          onChange={(e) => setvision(e.target.value)}
        ></input>
        <button onClick={() => handleOurVision()}>Save</button>
      </div>
    </div>
  );
};

export default AboutUsPortal;
