import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Modal, Button, Form } from "react-bootstrap";

const ScheduleData = () => {
  const [projects, setProjects] = useState([]); // Initialize as an empty array
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    axios
      .get("https://server-dcc.onrender.com/schedule/schedules")
      .then((response) => {
        // Ensure you correctly access the projects array within 'data'
        if (response.data && Array.isArray(response.data.data)) {
          setProjects(response.data.data);
        } else {
          toast.error("Unexpected response format.");
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  }, []);

  const handleEdit = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleSave = () => {
    axios
      .put(
        `https://server-dcc.onrender.com/schedule/${currentProject._id}`,
        currentProject
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success("Project updated successfully");
          setProjects(
            projects.map((p) =>
              p._id === currentProject._id ? response.data : p
            )
          );
          setShowModal(false);
        }
        axios
          .get("https://server-dcc.onrender.com/schedule/schedules")
          .then((response) => {
            // Ensure you correctly access the projects array within 'data'
            if (response.data && Array.isArray(response.data.data)) {
              setProjects(response.data.data);
            } else {
              toast.error("Unexpected response format.");
            }
          })
          .catch((error) => {
            toast.error("Error: " + error.message);
          });
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
    <div className="container mt-4 ml-1 mr-1">
      <div className="row">
        <div className="col-md-12 ">
          <div className="card">
            <div className="card-header text-center">
              <h4>Schedule Data</h4>
            </div>
            <div className="card-body table-wrapper-scroll-y">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Project Code</th>
                      <th scope="col">Date</th>
                      <th scope="col">B</th>
                      <th scope="col">BB</th>
                      <th scope="col">M</th>
                      <th scope="col">L</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Total Cube</th>
                      <th scope="col">7 Days</th>
                      <th scope="col">14 Days</th>
                      <th scope="col">28 Days</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{project.pCode}</td>
                        <td>{project.cDate}</td>
                        <td>{project.B}</td>
                        <td>{project.BB}</td>
                        <td>{project.M}</td>
                        <td>{project.L}</td>
                        <td>{project.Grade}</td>
                        <td>{project.totalCube}</td>
                        <td>{project.Day7}</td>
                        <td>{project.Day14}</td>
                        <td>{project.Day28}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEdit(project)}
                          >
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
            <Form.Group controlId="formPName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                name="pName"
                value={currentProject.pName || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formCDate">
              <Form.Label>Completion Date</Form.Label>
              <Form.Control
                type="date"
                name="cDate"
                value={currentProject.cDate || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formB">
              <Form.Label>B</Form.Label>
              <Form.Control
                type="text"
                name="B"
                value={currentProject.B || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBB">
              <Form.Label>BB</Form.Label>
              <Form.Control
                type="text"
                name="BB"
                value={currentProject.BB || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formM">
              <Form.Label>M</Form.Label>
              <Form.Control
                type="text"
                name="M"
                value={currentProject.M || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formL">
              <Form.Label>L</Form.Label>
              <Form.Control
                type="text"
                name="L"
                value={currentProject.L || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPCode">
              <Form.Label>Project Code</Form.Label>
              <Form.Control
                type="text"
                name="pCode"
                value={currentProject.pCode || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formGrade">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="text"
                name="Grade"
                value={currentProject.Grade || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTotalCube">
              <Form.Label>Total Cube</Form.Label>
              <Form.Control
                type="number"
                name="totalCube"
                value={currentProject.totalCube || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDay7">
              <Form.Label>7 Days</Form.Label>
              <Form.Control
                type="number"
                name="Day7"
                value={currentProject.Day7 || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDay14">
              <Form.Label>14 Days</Form.Label>
              <Form.Control
                type="number"
                name="Day14"
                value={currentProject.Day14 || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDay28">
              <Form.Label>28 Days</Form.Label>
              <Form.Control
                type="number"
                name="Day28"
                value={currentProject.Day28 || ""}
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

export default ScheduleData;
