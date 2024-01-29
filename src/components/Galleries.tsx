import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface GalleryImage {
  id: number;
  imagePath: string;
}

const Galleries: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [imagesPerPage] = useState<number>(21);

  useEffect(() => {
    fetchAllImages();
  }, []);

  const fetchAllImages = async () => {
    try {
      const response: AxiosResponse<GalleryImage[]> = await getAllImages();
      setImages(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  const getAllImages = async (): Promise<AxiosResponse<GalleryImage[]>> => {
    try {
      return await axios.get<GalleryImage[]>("http://localhost:8080/api/auth/galleryImages");
    } catch (e) {
      throw e;
    }
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="galleries">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="full-image__grid">
            {currentImages.map((image, id) => (
              <div key={id} className="full-gallery__image">
                <img src={`http://localhost:8080/api/auth/galleries/${image.imagePath}`} alt={image.imagePath} />
              </div>
            ))}
          </div>
          <div className="gallery_pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span>{currentPage}</span>
            <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastImage >= images.length}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Galleries;
