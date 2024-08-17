import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";

const ScheduleForm = () => {
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [formData, setFormData] = useState({
    pName: "",
    cDate: "",
    B: "",
    BB: "",
    M: "",
    L: "",
    pCode: "",
    Grade: "",
    totalCube: "",
    Day7: "",
    Day14: "",
    Day28: "",
  });

  useEffect(() => {
    const fetchAssignedProjects = async () => {
      try {
        const response = await axios.get('https://server-dcc.onrender.com/project/getprojects');
        setAssignedProjects(response.data);
      } catch (error) {
        console.error('Error fetching assigned projects:', error);
        toast.error('Failed to fetch assigned projects.');
      }
    };
    fetchAssignedProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProjectChange = useCallback((event) => {
    const selectedProject = assignedProjects.find(project => project.name === event.target.value);
    if (selectedProject) {
      setFormData(prevData => ({
        ...prevData,
        pName: selectedProject.name,
        pCode: selectedProject.projectId 
      }));
    }
  }, [assignedProjects]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://server-dcc.onrender.com/schedule/addSchedule", formData)
      .then((response) => {
        toast.success("Schedule added successfully!");
        setFormData({
          pName: "",
          cDate: "",
          B: "",
          BB: "",
          M: "",
          L: "",
          pCode: "",
          Grade: "",
          totalCube: "",
          Day7: "",
          Day14: "",
          Day28: "",
        });
      })
      .catch((error) => {
        toast.error("Error adding schedule: " + error.message);
      });
  };

  const localEmail = localStorage.getItem("email");
  const filteredProjects = assignedProjects.filter(
    (project) => project.siteengName === localEmail && project.status === "approved"
  );

  return (
    <Container className="bg bg-white p-4 mt-4 ml-2 rounded form-area">
      
      <Form onSubmit={handleSubmit} className="">
      <h2 className="my-4 text-center">Add New Schedule</h2>
      <hr></hr>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formSelectProject" className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Select
                size="lg"
                className="mb-3"
                onChange={handleProjectChange}
                value={formData.pName}
                required
              >
                <option value="">Select Project Name</option>
                {filteredProjects.map((project) => (
                  <option key={project._id} value={project.name}>
                    {project.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formCDate" className="mb-3">
              <Form.Label>Completion Date</Form.Label>
              <Form.Control
                type="date"
                name="cDate"
                value={formData.cDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formB" className="mb-3">
              <Form.Label>B</Form.Label>
              <Form.Control
                type="text"
                name="B"
                value={formData.B}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBB" className="mb-3">
              <Form.Label>BB</Form.Label>
              <Form.Control
                type="text"
                name="BB"
                value={formData.BB}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formM" className="mb-3">
              <Form.Label>M</Form.Label>
              <Form.Control
                type="text"
                name="M"
                value={formData.M}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formL" className="mb-3">
              <Form.Label>L</Form.Label>
              <Form.Control
                type="text"
                name="L"
                value={formData.L}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formPCode" className="mb-3">
              <Form.Label>Project Code</Form.Label>
              <Form.Control
                type="text"
                name="pCode"
                value={formData.pCode}
                onChange={handleChange}
                required
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formGrade" className="mb-3">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="text"
                name="Grade"
                value={formData.Grade}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTotalCube" className="mb-3">
              <Form.Label>Total Cube</Form.Label>
              <Form.Control
                type="number"
                name="totalCube"
                value={formData.totalCube}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDay7" className="mb-3">
              <Form.Label>Day 7</Form.Label>
              <Form.Control
                type="text"
                name="Day7"
                value={formData.Day7}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDay14" className="mb-3">
              <Form.Label>Day 14</Form.Label>
              <Form.Control
                type="text"
                name="Day14"
                value={formData.Day14}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDay28" className="mb-3">
              <Form.Label>Day 28</Form.Label>
              <Form.Control
                type="text"
                name="Day28"
                value={formData.Day28}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="flex justify-center ml-10">
        <Button variant="primary" type="submit" className="mt-3 w-52 ml-10">
          Submit
        </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ScheduleForm;
