import { PortalNavbar } from "./PortalNavBar";
import PortalSideNavbar from "./PortalSideNavbar";
import { Outlet } from "react-router-dom";

const Portal = () => {
    return (
    <div className="home__container">
      <PortalSideNavbar />
      <div className="home__container__right">
        <PortalNavbar />
        <div className="home__container__content"><Outlet /></div>
      </div>
    </div>
  );
};

export default Portal;
