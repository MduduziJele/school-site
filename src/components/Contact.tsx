export const Contact = () => {
  return (
    <>
      <div className="dashboard-contact">
        <div className="dashboard-contact-container">
          <h3>CONTACT</h3>
          <div>
            <label>Email:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Mobile Number:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Address:</label>
            <input className="dashboard-input" type="text"></input>
          </div>
          <div>
            <label>Facebook link:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Instagram link:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>TikTok link:</label>
            <input type="text"></input>
          </div>
          <button>Save Changes</button>
        </div>
      </div>
    </>
  );
};
