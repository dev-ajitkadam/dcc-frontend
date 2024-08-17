import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";

const AdminDashboardHome = () => {


  // Get today's full date
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = today.toLocaleDateString(undefined, options);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    // Fetch list of projects awaiting approval
    axios
      .get("https://server-dcc.onrender.com/project/getprojects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleApproval = (projectId, approve) => {
    axios
      .put(`https://server-dcc.onrender.com/project/${projectId}/approve`, { approve })
      .then((response) => {
        if (response.status === 200) {
          axios
      .get("https://server-dcc.onrender.com/project/getprojects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
        }
      })
      .catch((error) => {
        console.error("Error updating approval status:", error);
      });
  };

  const handleReject = (projectId, reject) => {
  axios
    .put(`https://server-dcc.onrender.com/project/${projectId}/reject`, { reject })
    .then((response) => {
      if (response.status === 200) {
        axios
    .get("https://server-dcc.onrender.com/project/getprojects")
    .then((response) => {
      setProjects(response.data);
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
    });
      }
    })
    .catch((error) => {
      console.log("Data Not Saved: " + error.message);
    });

};
// const handleDelete = (projectId) => {
//   axios
//     .delete(`https://server-dcc.onrender.com/project/${projectId}`)
//     .then((response) => {
//       if (response.status === 200) {
//         axios
//     .get("https://server-dcc.onrender.com/project/getprojects")
//     .then((response) => {
//       setProjects(response.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching projects:", error);
//     });
//       }
//     })
//     .catch((error) => {
//       console.log("Data Not Saved: " + error.message);
//     });
    
// };

  return (
    <Container className="mt-4">
      <h1 className="text-center">Welcome to Admin Dashboard</h1>
      <h3 className=" text-center">{fullDate}</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-3">
            <div className="card mt-3">
              <div className="card-header text-center">
                <h4>Project watting for Approval</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">SubClient</th>
                        <th scope="col">Address</th>
                        <th scope="col">Client</th>
                        <th scope="col">Number</th>
                        <th scope="col">Site Eng</th>
                        <th scope="col">Status</th> 
                      </tr>
                    </thead>
                    <tbody>
                      {[...projects].reverse().map((projects, index) => (
                        <tr key={projects._id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            {projects.name}
                          </td>
                          <td>{projects.address}</td>
                          <td>{projects.cName}</td>
                          <td>{projects.number}</td>
                          <td>{projects.siteengName}</td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="danger"
                                id="dropdown-basic"
                              >
                                {projects.status.charAt(0).toUpperCase() + projects.status.slice(1)}{" "}
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="bg-slate-800">
                              <Dropdown.Item className="text-decoration-none text-black" onClick={()=>handleApproval(projects._id, true)}>
                                  Approve
                                </Dropdown.Item>
                                <Dropdown.Item className="text-decoration-none text-black"onClick={()=>handleReject(projects._id, false)}>
                                  Reject
                                </Dropdown.Item>
                                {/* <Dropdown.Item className="text-decoration-none text-black"onClick={()=>handleDelete(projects._id)}>
                                  Delete
                                </Dropdown.Item> */}
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
    </Container>
  );
};

export default AdminDashboardHome;
