import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormEvent } from "react";

export default function Update() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
  });

  const { first_name, last_name, mobile_number } = user;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(`http://localhost:8080/api/auth/update/${id}`, user);
      navigate("/portal/users");
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Edit User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your first name"
              name="first_name"
              value={first_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your last name"
              name="last_name"
              value={last_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your mobile number"
              name="mobile_number"
              value={mobile_number}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
