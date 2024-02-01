import React, { useEffect, useState } from 'react';
import {BsFacebook} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai'
import axios from 'axios';

const Footer : React.FC= () => {

  const [contact, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const results = await axios.get(`http://localhost:8080/api/auth/contact/1`);
    setContacts(results.data);
  };

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
          <p>{contact.school_email}</p>
          <p>{contact.school_address}</p>
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
