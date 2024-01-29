import { PortalNavbar } from "./PortalNavBar";
import PortalSideNavbar from "./PortalSideNavbar";
import { Outlet } from "react-router-dom";

const Portal = () => {
//  useEffect(()=>{
//     fetch("http://localhost:8080/api/auth/user", {
//       method: 'GET',
//       credentials: "include",
//       headers: {
//         'Content-Type': "application/json",
//         'Authorization': `Bearer jwtCookie=${sessionStorage.getItem("token")}`
//       }
//     }).then((res)=> {
//       if(res.ok){
//         return res.json()
//       } else {
//         throw new Error("Network response was not ok")
//       }
//     }).then((data) => {
//       console.log(data)
//     }).catch((error) => {
//       console.log("Fetch error", error)
//     })
//   },[])
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
