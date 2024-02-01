import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios";

export const Contact = () => {

  
  let navigate = useNavigate();

  const [contact, setContact] = useState({
    school_email: "",
    school_phone: "",
    school_address: "",
    fb_link: "",
    instagram_link: "",
    tiktok_link: "",

  });

  const { school_email, school_phone, school_address, fb_link, instagram_link, tiktok_link} = contact;

  const onInputChange = (e) => {
    setContact({...contact, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    loadContact();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/auth/updateContact/1`,contact);
    navigate("/portal");
  };

  const loadContact = async () => {
    const result = await axios.get(`http://localhost:8080/api/auth/contact/1`);
    setContact(result.data);
  };

  return (

    <>
      <div className="dashboard-contact">
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="dashboard-contact-container">
              <h3>CONTACT</h3>
              <div>
                <label>Email:</label>
                <input type={"text"}
                  name="school_email"
                  value={school_email}
                  onChange={(e) => onInputChange(e)}></input>
              </div>
              <div>
                <label>Mobile Number:</label>
                <input type={"text"}
                  name="school_phone"
                  value={school_phone}
                  onChange={(e) => onInputChange(e)}></input>
              </div>
              <div>
                <label>Address:</label>
                <input className="dashboard-input" 
                  name="school_address"
                  type={"text"}
                  value={school_address}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
              <div>
                <label>Facebook link:</label>
                <input 
                  type={"text"}
                  name="fb_link"
                  value={fb_link}
                  onChange={(e) => onInputChange(e)}></input>
              </div>
              <div>
                <label>Instagram link:</label>
                <input 
                  type={"text"}
                  name="instagram_link"
                  value={instagram_link}
                  onChange={(e) => onInputChange(e)}></input>
              </div>
              <div>
                <label>TikTok link:</label>
                <input 
                  type={"text"}
                  name="tiktok_link"
                  value={tiktok_link}
                  onChange={(e) => onInputChange(e)}></input>
              </div>
              <button type="submit">Save Changes</button>
            </div>
        </form>
      
      </div>
    </>
  );
};
