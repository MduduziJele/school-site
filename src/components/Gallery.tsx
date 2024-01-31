import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface GalleryImage {
  id: number;
  imagePath: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response: AxiosResponse<GalleryImage[]> = await getImages();
      setImages(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  const getImages = async (): Promise<AxiosResponse<GalleryImage[]>> => {
    try {
      return await axios.get<GalleryImage[]>("http://localhost:8080/api/auth/galleryImages");
    } catch (e) {
      throw e;
    }
  };

  const handleSeeMoreClick = () => {
    navigate("/galleries");
  };

  return (
    <div className="gallery">
      <div className="gallery__heading">
        <h1>Gallery</h1>
      </div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="image__grid">
          {images.slice(0,8).map((image, id) => (
            <div key={id} className="gallery__image">
              <img src={`http://localhost:8080/api/auth/galleries/${image.imagePath}`} alt={image.imagePath} />
            </div>
          ))}
        </div>
      )}
      <div className="gallery__button" onClick={handleSeeMoreClick}/>;
        SEE MORE
      </div>
  );
};

export default Gallery;
