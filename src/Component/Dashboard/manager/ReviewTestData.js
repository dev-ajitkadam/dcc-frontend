import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewTestData = () => {
  const [testData, setTestData] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Fetch test data from your API
    axios.get('https://server-dcc.onrender.com/form/getTestdata')
      .then(response => setTestData(response.data))
      .catch(error => console.error('Error fetching test data:', error));
  }, []);

  const handleView = (test) => {
    setSelectedTest(test);
    setFormData({ ...test }); // Ensure formData is a new copy of test
    setIsEditing(false);
    setShow(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    axios.put(`https://server-dcc.onrender.com/form/testdata/${formData._id}`, formData)
      .then(response => {
        setTestData(prevData => prevData.map(test => test._id === formData._id ? response.data : test));
        setSelectedTest(response.data);
        setIsEditing(false);
        setShow(false);
      })
      .catch(error => console.error('Error saving test data:', error));
  };

  const handleDelete = () => {
    axios.delete(`https://server-dcc.onrender.com/form/testdata/${formData._id}`)
      .then(() => {
        setTestData(prevData => prevData.filter(test => test._id !== formData._id));
        setSelectedTest(null);
        setShow(false);
      })
      .catch(error => console.error('Error deleting test data:', error));
  };

  const handleClose = () => setShow(false);

  // Ensure filtering is based on the status of each test object
  const filteredProjects = testData.filter(test => !test.status);

  return (
    <div className="container  rounded ml-4  mt-4">
      <h3 className=" p-3 text-center">Unreviewed Test Data</h3>
      <ul className="list-group p-1">
        {filteredProjects.reverse().map(test => (
          <li key={test._id} className="list-group-item d-flex justify-content-between align-items-center">
            {test.pName}__{test.tName}
            <Button variant="primary" size="sm" onClick={() => handleView(test)}>View</Button>
          </li>
        ))}
      </ul>

      <h3 className="p-3 text-center">All Test Data</h3>
      <ul className="list-group">
        {testData.reverse().map(test => (
          <li key={test._id} className="list-group-item d-flex justify-content-between align-items-center">
            {test.pName}__{test.tName}
            <Button variant="primary" size="sm" onClick={() => handleView(test)}>View</Button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Test Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTest && (
            <Form>
              {Object.keys(formData).map((key) => (
                key !== '__v' && key !== '_id' && (
                  <Form.Group controlId={key} key={key}>
                    <Form.Label>{key}</Form.Label>
                    <Form.Control
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      readOnly={!isEditing}
                    />
                  </Form.Group>
                )
              ))}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!isEditing ? (
            <>
              <Button variant="warning" onClick={handleEdit}>Edit</Button>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </>
          ) : (
            <Button variant="success" onClick={handleSave}>Save</Button>
          )}
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReviewTestData;
