import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";

export const PortalNavbar = () => {
    const id =  sessionStorage.getItem("id")
    const email = sessionStorage.getItem("email")
  return (
    <div className="navbar">
        <div className="navbar__container">
            <div className='splits'>
                <div className="navbar__breadcrumb">
                    <AiOutlineMenu/>
                </div>
                <div className="navbar__profile">
                    <img src={`//localhost:8080/api/auth/user/image/${id}`} className="navbar__profile-picture" alt='image'/>
                    <p className="navbar__profile_name">{email}</p>
                    <AiOutlineDown className="chevron-down"/>
                </div>
            </div>
        </div>
    </div>
  );
};
