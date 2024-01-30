
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-text">
        <h1>ABOUT US</h1>      
      </div>
      <div className="text-container">
      <p >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa
          quidem, molestias doloribus asperiores voluptate architecto natus,         
          commodi nobis numquam nesciunt? Repellat libero provident quos soluta
          corporis facilis hic omnis!
        </p>
      </div>
      <div className="AboutUs-body">
        <div className="Mission-section">
          <div className="mission-image">
          <img src={`http://localhost:8080/api/auth/image/mission/1`} />
          </div>
          <div className="Mission">
            <h3>Our Mission</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quos nam libero ducimus impedit accusantium ea ipsam tempore,
              voluptas neque inventore atque dolorum! Fuga pariatur, voluptatem
              voluptate perspiciatis similique culpa.
            </p>
          </div>
        </div>

        <div className="Vision-section">
          <div className="Vision">
            <h3>Our Vision</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quos nam libero ducimus impedit accusantium ea ipsam tempore,
              voluptas neque inventore atque dolorum! Fuga pariatur, voluptatem
              voluptate perspiciatis similique culpa.
            </p>
          </div>
          <div className="vision__image">
            <img src={`//localhost:8080/api/auth/image/vision/1`} alt="" />
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
