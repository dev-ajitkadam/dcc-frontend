import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Dropdown } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-dcc.onrender.com/user/getuser")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  }, []);

  const handleAdd = (userId) => {
    axios
      .put(`https://server-dcc.onrender.com/user/${userId}/add`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("User added successfully");
          setUsers(users.map(user => user._id === userId ? response.data : user));
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  const handleBlock =  async(userId) => {
    await axios
      .put(`https://server-dcc.onrender.com/user/${userId}/block`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("User blocked successfully");
          setUsers(users.map(user => user._id === userId ? response.data : user));
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  const handleDelete = (userId) => {
    axios
      .delete(`https://server-dcc.onrender.com/user/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("User deleted successfully");
          setUsers(users.filter(user => user._id !== userId));
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-12 pt-3">
          <div className="card">
            <div className="card-header text-center p-2">
              <h3>Manage Users</h3>
            </div>
            <div className="card-body table-wrapper-scroll-y">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Number</th>
                      <th scope="col">Role</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...users].reverse().map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td>{user.role}</td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                              {user.status ? "Active" : "Blocked"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleAdd(user._id)}>
                              Activate
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleBlock(user._id)}>
                                Block
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => handleDelete(user._id)}>
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
