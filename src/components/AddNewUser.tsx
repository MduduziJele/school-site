// @ts-nocheck
import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string,
  email: string;
  mobileNumber: string;
  designation: Array<string>;
  password: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  designation: ["CONTENT_CREATOR"],
  password: "",
};

const AddNewUser: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedImage, setSelectedImage] = useState<File>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newUser = new FormData();
    newUser.append("first_name", formData.firstName)
    newUser.append("last_name", formData.lastName)
    newUser.append("email", formData.email)
    newUser.append("mobile_number", formData.mobileNumber)
    newUser.append("roles", formData.designation)
    newUser.append("image", selectedImage)
    newUser.append("password", formData.password)

    fetch(`//school-site-api-production.up.railway.app/api/auth/adduser`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer jwtCookie=${sessionStorage.getItem("token")}`
      },
      body: newUser,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });

    console.log("Data posted successfully!");
  };

  return (
    <div className="adduser">
      <form className="adduser__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewUser;
