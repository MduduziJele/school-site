import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const backendBaseUrl = "http://localhost:8080/api/auth";

const GalleryPortal: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (!id) {
          console.error("ID is undefined or null");
          return;
        }

        const response = await axios.get(`${backendBaseUrl}/gallery/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.data.image) {
          throw new Error("Image not found");
        }

        setImage(response.data.image);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchImage();
  }, [id]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setSelectedImage(selectedFile);


      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImageUrl(imageUrl);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      console.error("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      await axios.post(`${backendBaseUrl}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="gallery-portal">
      <div className="heading">
        <h1>Gallery</h1>
      </div>
      {image && (
        <div className="gallery-portal__image">
          <img src={image} alt={`Gallery Image ${id}`} />
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {selectedImageUrl && (
        <div className="gallery-portal__image">
          <img src={selectedImageUrl} alt={`Selected Image`} />
        </div>
      )}
</div>
  );
};

export default GalleryPortal;
