const TopNavigation = () => {
  return (
    <>
      <div className="topNav">
        <a href="#">Phone : 068 529 5764</a>
        <a href="#">Email : sebitjasec7@gmail.com </a>
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
