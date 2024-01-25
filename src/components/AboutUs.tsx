import { useEffect, useState } from "react";

interface about{
  aboutusext: string;
  mission: string;
  vision: string;
}
const AboutUs = () => {

const [ about, setAbout ] = useState([])


useEffect(() =>{
  const getAbout = async () =>{
    const AboutfromServer = await fetchAbout()
    setAbout(AboutfromServer)
  }
  getAbout()
},[])

//fetch about from database
const fetchAbout =async ()=>{
  const response = await fetch(`http://localhost:8080/api/auth/about/1`)
  const about = await response.json()
  console.log(about);
  return about;
  
}

  return (
    <div className="AboutUs">
      <div className="AboutUs-text">
        <h1>ABOUT US</h1>      
      </div>
      <div className="text-container">
        <div>
         <p> {about.aboutustext}
            </p>
        </div>
        
      </div>
      <div className="AboutUs-body">
        <div className="Mission-section">
          <div className="mission-image">
          <img src={`http://localhost:8080/api/auth/image/mission/1`} />
          </div>
          <div className="Mission">
            <h3>Our Mission</h3>
            <p>
             {about.mission}
            </p>
          </div>
        </div>

        <div className="Vision-section">
          <div className="Vision">
            <h3>Our Vision</h3>
            <p>
              {about.vision}
            </p>
          </div>
          <div className="vision__image">
            <img src={`http://localhost:8080/api/auth/image/vision/1`} alt="" />
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
