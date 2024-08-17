import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [cId, setCId] = useState("");
  const [password, setPassword] = useState("");
  const [refsid, setRefid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    const userData = { name, address, email, number, role, cId, password };

    axios
      .post("https://server-dcc.onrender.com/user/signup", userData)
      .then((res) => {
        toast.success("User Registered successfully");
        handleSubmits(); // Reset form fields
      })
      .catch((error) => {
          toast.error("Signup error: Email already exists OR Internal server error");
        
      });
  };

  const handleSubmits = () => {
    setName("");
    setAddress("");
    setEmail("");
    setNumber("");
    setRole("");
    setPassword("");
    setCId("");
  };

  return (
    <div className="container mt-4">
      <div className="main-add">
      
        <div className="bg-white rounded form-main m-2 p-1">
          
          <form onSubmit={handleSubmit} className="m-2 mb-3 mt-">
          <h3 className="text-center font-bold mt-3 mb-3 text-center">Register New User</h3>
          <hr></hr>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                id="name"
                className="form-control rounded-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">
                <strong>Address</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                autoComplete="off"
                name="address"
                id="address"
                className="form-control rounded-1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                id="email"
                className="form-control rounded-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number">
                <strong>Phone Number</strong>
              </label>
              <input
                type="number"
                placeholder="Enter Phone Number"
                autoComplete="off"
                name="number"
                id="number"
                className="form-control rounded-1"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role">
                <strong>User Role</strong>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setRefid(e.target.value === "client");
                }}
                required
              >
                <option value="">Select Role</option>
                <option value="client">Client</option>
                <option value="siteeng">Site Engineer</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            {refsid ? (
              <div className="mb-3">
                <label htmlFor="cId">
                  <strong>Client ID</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Client ID"
                  autoComplete="off"
                  name="cId"
                  id="cId"
                  className="form-control rounded-0"
                  value={cId}
                  onChange={(e) => setCId(e.target.value)}
                />
              </div>
            ) : null}
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                id="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
