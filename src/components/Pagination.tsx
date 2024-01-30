// @ts-nocheck
import React, { useState } from 'react';
import { cardsData } from './CardData';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 6;

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = cardsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cardsData.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate('/label');
  };

  return (
    <div>   
        <div className="posts-container"> 
        {currentItems.map((item, index) => (          
            <Card key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              body={item.body}
              onReadMoreClick={handleReadMoreClick}              
            />         
        ))}    
    </div>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};


