import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Modal, Button, Form } from "react-bootstrap"; 

const UserList = () => {
  const [projects, setProjects] = useState([]);
  const [siteeng, setSiteeng]= useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    axios
      .get("https://server-dcc.onrender.com/project/getprojects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  }, []);

  useEffect(()=>{
    axios.get("https://server-dcc.onrender.com/user/siteeng")
    .then((response)=>{
      setSiteeng(response.data);
    })
    .catch((error)=>{
      toast.error("Error:"+ error.message);
    });
  }, []);

  const handleEdit = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleSave = () => {
    console.log({currentProject})
    axios
      .put(`https://server-dcc.onrender.com/project/${currentProject._id}`, currentProject)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Project updated successfully");
          setProjects(projects.map(p => p._id === currentProject._id ? response.data : p));
          setShowModal(false);
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-12 pt-3">
          <div className="card">
            <div className="card-header text-center">
              <h3>Manage Projects</h3>
            </div>
            <div className="card-body table-wrapper-scroll-y">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Project ID</th>
                      <th scope="col">Site Name</th>
                      <th scope="col">Site Eng</th>
                      <th scope="col">Number</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{project.projectId}</td>
                        <td>{project.name}</td>
                        <td>{project.siteengName}</td>
                        <td>{project.number}</td>
                        <td>
                          <button className="btn btn-primary" onClick={() => handleEdit(project)}>
                            <i className="bi bi-pencil-square"></i>
                          </button>
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Site Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentProject.name || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSiteEng">
              <Form.Label>Site Engineer Name</Form.Label>
              <Form.Select 
                name="siteengName" 
                value={currentProject.siteengName || ""} 
                onChange={handleChange} 
              >
                <option>Select Site Engineer</option>
                {siteeng.map((siteeng)=>(
                  <option key={siteeng._id} value={siteeng.name}>
                    {siteeng.name} || {siteeng.email}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formProjectId">
              <Form.Label>Project ID</Form.Label>
              <Form.Control
                type="text"
                name="projectId"
                value={currentProject.projectId || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={currentProject.email || ""}
                onChange={handleChange}
              />
            </Form.Group>   
            <Form.Group controlId="formNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                value={currentProject.number || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={currentProject.address || ""}
                onChange={handleChange}
              />
            </Form.Group>            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserList;
