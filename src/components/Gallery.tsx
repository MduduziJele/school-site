import React from "react";
import IMG_8007 from "../assets/IMG_8007.JPG";
import IMG_8135 from "../assets/IMG_8135.JPG";
import IMG_8169 from "../assets/IMG_8169.JPG";
import IMG_8722 from "../assets/IMG_8722.JPG";
import IMG_8724 from "../assets/IMG_8724.JPG";
import IMG_8726 from "../assets/IMG_8726.JPG";
import IMG_8731 from "../assets/IMG_8731.JPG";
import IMG_8006 from "../assets/IMG_8006.JPG";

const Gallery: React.FC = () => {

  const images = [
    IMG_8007,
    IMG_8135,
    IMG_8169,
    IMG_8722,
    IMG_8724,
    IMG_8726,
    IMG_8731,
    IMG_8006,
  ];

  const first8Images = images.slice(0, 8);

  return (
   <div className="gallery">
    <div className="gallery__heading">
        <h1>Gallery</h1>
    </div>
     <div className="image__grid">
      {first8Images.map((image,index) => (
        <img key={index} src={image} alt="Image" />
      ))}
    </div>
    <button className="gallery__button">See More</button>
   </div>
  );
};

export default Gallery;
