import React from 'react';
import IMG  from '../images/IMG.jpg';

interface CardProps {
  imageUrl: string;
  title: string;
  body: string;
  onReadMoreClick: () => void;
}

const Card: React.FC<CardProps> = ({ onReadMoreClick }) => {
  return (
    <>
    <div className="card">
      <img src={IMG} alt="" className="card-image" />
      <div className="card-content">
        <div className='card-content-title'>
          <h1 className="card-title">How I retain and remember what I study</h1>
          {/* <div className='lines'></div> */}
        </div>
        <div className='text-body'>
          <p className="card-body">Lorem ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.Lorem ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.</p>
        </div>
        <button className="read-more-button" onClick={onReadMoreClick}>
          Read More
        </button>
      </div>
    </div>
    </>
    
  );
};

export default Card;
