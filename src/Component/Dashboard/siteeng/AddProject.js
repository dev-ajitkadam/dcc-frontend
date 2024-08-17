import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Form from "react-bootstrap/Form";

const SiteEngAddProject = () => {
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [users, setUsers] = useState([]);
  const [clientName, setClientName] = useState("");
  const [cAddress, setCaddress] = useState("");
  const [cId, setCId] = useState("");

  useEffect(() => {
    axios
      .get("https://server-dcc.onrender.com/user/client")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://server-dcc.onrender.com/project/addproject", {
        cName: clientName,
        cAddress: cAddress,
        name: billingName,
        address: billingAddress,
        projectId: cId,
        email: email,
        number: number,
      });

      toast.success("Project Added Successfully and sent to admin");
      setClientName("");
      setCaddress("");
      setBillingName("");
      setBillingAddress("");
      setEmail("");
      setNumber("");
      setCId("");
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Error adding project: " + error.message);
    }
  };

  const handleClientNameChange = (event) => {
    const selectedClientName = event.target.value;
    const selectedClient = users.find((user) => user.name === selectedClientName);
    if (selectedClient) {
      setClientName(selectedClientName);
      setCaddress(selectedClient.address);
      setCId(selectedClient.cId);
    } else {
      setClientName("");
      setCaddress("");
      setCId("");
    }
  };

  return (
    <div className="container mt-4">
      <div className="justify-content-center align-items-center">
        <div className="bg-white p-2 rounded">

          <form onSubmit={handleSubmit} className="  p-2">
          <h3 className="text-center font-bold mt-3 mb-3">Add New Project</h3>
          <hr></hr>
            <Form.Select
              size="lg"
              className="mb-3"
              onChange={handleClientNameChange}
              value={clientName}
            >
              <option value="">Select Client</option>
              {users.map((user) => (
                <option key={user._id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </Form.Select>
            <div className="mb-3">
              <label htmlFor="billingName">
                <strong>Billing Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Billing Name"
                autoComplete="off"
                name="billingName"
                id="billingName"
                className="form-control rounded-1"
                value={billingName}
                onChange={(e) => setBillingName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="billingAddress">
                <strong>Billing Address</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Billing Address"
                autoComplete="off"
                name="billingAddress"
                id="billingAddress"
                className="form-control rounded-1"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cId">
                <strong>Project ID</strong>
              </label>
              <input
                type="text"
                autoComplete="off"
                name="cID"
                placeholder="Enter project ID"
                id="cId"
                className="form-control rounded-1"
                value={cId || ""}
                onChange={(e) => setCId(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email ID"
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
                <strong>Office Contact Number</strong>
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
            <hr />
            <button type="submit" className="btn btn-primary w-100 rounded-3">
              Add Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SiteEngAddProject;
