import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrFormEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Url = "http://localhost:8080/api/auth/get";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  roles: string;
  mobile_number: string;
  name: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editId, setEditId] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/auth/get");
    setUsers(result.data);
  };

  const handleUpdate = (id: number) => {
    setEditId(id);
  };

  return (
    <React.Fragment>
      <div className="users-container">
        <div className="users__title__button">
          <h3 className="users">USERS</h3>
          <button className="Add-New" onClick={() => navigate("add")}>
            Add New
          </button>
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={`//localhost:8080/api/auth/image/user/${user.id}`}
                    alt="image"
                  />
                  {`${user.first_name} ${user.last_name}`}{" "}
                </td>
                <td>{user.mobile_number} </td>
                <td>{user.roles[0].name} </td>
                <div className="users__actions">
                  <Link to={`delete/${user.id}`}>
                    <RiDeleteBinLine />
                  </Link>
                  <Link to={`update/${user.id}`}>
                    <GrFormEdit />
                  </Link>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Users;
