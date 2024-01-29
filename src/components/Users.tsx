import profilePictue from "../assets/me.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrFormEdit } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="users">
        <div className="users__container">
          <div className="users__title__button">
            <h3>USERS</h3>
            <button onClick={() => navigate("add")}>Add New</button>
          </div>

          <div className="users__details">
            <div className="users__heading">
              <p>Full Name</p>
              <p>Mobile</p>
              <p>Designation</p>
              <p>Action</p>
            </div>
            <div className="users__details__roles">
              <div className="user__fullname__picture">
                <img className="navbar__profile-picture" src={profilePictue} />
                <p>Lesego Kekana</p>
              </div>
              <p>082 123 4567</p>
              <p>Learner</p>
              <div className="users__actions">
                <RiDeleteBinLine />
                <GrFormEdit />
              </div>
            </div>
            <div className="users__details__roles">
              <div className="user__fullname__picture">
                <img className="navbar__profile-picture" src={profilePictue} />
                <p>Lesego Kekana</p>
              </div>
              <p>082 123 4567</p>
              <p>Teacher</p>
              <div className="users__actions">
                <RiDeleteBinLine className="users__actions_delete" />
                <GrFormEdit className="users__actions_edit" />
              </div>
            </div>
            <div className="users__details__roles">
              <div className="user__fullname__picture">
                <img className="navbar__profile-picture" src={profilePictue} />
                <p>Lesego Kekana</p>
              </div>
              <p>082 123 4567</p>
              <p>Alumni</p>
              <div className="users__actions">
                <RiDeleteBinLine />
                <GrFormEdit />
              </div>
            </div>
            <div className="users__details__roles">
              <div className="user__fullname__picture">
                <img className="navbar__profile-picture" src={profilePictue} />
                <p>Lesego Kekana</p>
              </div>
              <p>082 123 4567</p>
              <p>Circuit Manager</p>
              <div className="users__actions">
                <RiDeleteBinLine />
                <GrFormEdit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
