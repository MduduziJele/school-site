import { useEffect, useState } from "react";
import axios from "axios";


const TopNavigation = () => {
  
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const results = await axios.get(`http://localhost:8080/api/auth/contact/1`);
    setContacts(results.data);
  };


  return (
    <>
      <div className="topNav">
       
        <a href="">Phone : { contact.school_phone}</a>
        <a href="">Email : { contact.school_email} </a>

        <span className="split">
          <a href="/login" className="portal-right">
            Portal
          </a>
          <button className="btnSupport">Support Us</button>
        </span>
      </div>
    </>
  );
};

export default TopNavigation;
