import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientDashboardHome = () => {
  // Get today's full date
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = today.toLocaleDateString(undefined, options);
  const [testData, setTestData] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Fetch test data from your API
    axios
      .get("https://server-dcc.onrender.com/form/getTestdata")
      .then((response) => setTestData(response.data))
      .catch((error) => console.error("Error fetching test data:", error));
  }, []);

  const handleView = (test) => {
    setSelectedTest(test);
    setFormData({ ...test }); // Ensure formData is a new copy of test
    
    setShow(true);
  };

  
  const handleClose = () => setShow(false);

  // Ensure filtering is based on the status of each test object
  const filteredProjects = testData.filter(
    (test) => !test.status || test.cName === localStorage.getItem("name")
  );
  const filteredProjectsAll = testData.filter(
    (test) => test.cName === localStorage.getItem("name")
  );

  return (
    <Container className="mt-4">
      <h1 className="text-center">Welcome to Client Dashboard</h1>
      <h3 className=" text-center">{fullDate}</h3>
      <hr></hr>

      <div className="vh-80  text-center">
        <div className="container  rounded ml-4  mt-4">
          <h3 className=" p-3 text-center"> View only Test Data under Review</h3>
          <ul className="list-group p-1">
            {filteredProjects.reverse().map((test) => (
              <li
                key={test._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {`${test.pId}-${test.pName}-${test.tDate}-`}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleView(test)}
                >
                  View
                </Button>
              </li>
            ))}
          </ul>

          <h3 className="p-3 text-center">All Test Data Reviewed Ready to Download</h3>
          <ul className="list-group">
            {filteredProjectsAll.reverse().map((test) => (
              <li
                key={test._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {test.pName}__{test.tName}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleView(test)}
                >
                  View
                </Button>
              </li>
            ))}
          </ul>

          {/* Modal */}
          <Modal show={show} onHide={handleClose} className="vw-100">
            <Modal.Header closeButton>
              <Modal.Title>Test Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedTest && (
                <div>
                  {Object.keys(formData).map(
                    (key) =>
                      key !== "__v" &&
                      key !== "_id" && (
                        <div key={key} style={{ marginBottom: "10px" }}>
                          <strong>{key}: </strong>
                          <span>{formData[key]}</span>
                        </div>
                      )
                  )}
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Container>
  );
};

export default ClientDashboardHome;
