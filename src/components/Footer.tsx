import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer : React.FC= () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="follow-us">
          <p>FOLLOW US</p>
          <p className='follow-us__message'>Yes, We are social</p>
          <div className="social-icons">
            <BsFacebook className="facebook-icons"/>
            <FaTwitterSquare className="twitter-icons"/>
           <AiOutlineInstagram className="instagram-icons"/>
          </div>
        </div>
        <div className="logo">
          <h1>L  O  G  O</h1>
        </div>
        <div className="contact">
          <p>CONTACT US</p>
          <p>school@gmail.com</p>
          <p>41 Juta Street Braamfontain</p>
          <p>Johannesburg, 2001</p>
        </div>
      </div>
      <div className="footer-text">
        <hr />
        <p>&copy; School name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
