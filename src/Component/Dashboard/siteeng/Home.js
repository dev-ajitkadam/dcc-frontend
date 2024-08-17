import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SiteEngDashboardHome = () => {
  const [testData, setTestData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({});
  

  useEffect(() => {
    // Fetch test data from API
    axios.get('https://server-dcc.onrender.com/form/getTestdata')
      .then(response => {
        setTestData(response.data);
      })
      .catch(error => console.error('Error fetching test data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios.put(`https://server-dcc.onrender.com/form/testdata/${data._id}`, data)
      .then(response => {
        setTestData(prevData => prevData.map(test => test._id === data._id ? response.data : test));
        setIsEditing(false);
      })
      .catch(error => console.error('Error saving test data:', error));
  };

  const handleView = (test) => {
    setData(test); // Set the selected test data to the state
    setIsEditing(true); // Set editing to true when viewing a test
  };

  const calAvg = () => {
    let avg =
      (Number(calCompStrength1()) +
        Number(calCompStrength2()) +
        Number(calCompStrength3())) /
      3;
      data.CompressiveAvgStrength = parseFloat(avg.toFixed(2))
    return parseFloat(avg.toFixed(2));
  };

  // Cross Area
  const calCrossArea1 = () => {
    let crossArea = Number(data.SizeLength1) * Number(data.SizeWidth1);
    data.CrossArea1 = crossArea
    return crossArea;
    
  };
  const calCrossArea2 = () => {
    let crossArea = Number(data.SizeLength2) * Number(data.SizeWidth2);
    data.CrossArea2=crossArea
    return crossArea;
  };
  const calCrossArea3 = () => {
    let crossArea = Number(data.SizeLength3) * Number(data.SizeWidth3);
    data.CrossArea3 = crossArea
    return crossArea;
  };

  // Density
  const calDensity1 = () => {
    let volume =
      (data.SizeLength1 / 1000) *
      (data.SizeHeight1 / 1000) *
      (data.SizeWidth1 / 1000);
    let density = Number(data.Weight1 / 1000) / volume;
    data.Density1=  parseFloat(density.toFixed(2))
    return parseFloat(density.toFixed(2));
  };
  const calDensity2 = () => {
    let volume =
      (data.SizeLength2 / 1000) *
      (data.SizeHeight2 / 1000) *
      (data.SizeWidth2 / 1000);
    let density = Number(data.Weight2 / 1000) / volume;
    data.Density2 =  parseFloat(density.toFixed(2))
    return parseFloat(density.toFixed(2));
  };

  const calDensity3 = () => {
    let volume =
      (data.SizeLength3 / 1000) *
      (data.SizeHeight3 / 1000) *
      (data.SizeWidth3 / 1000);
    let density = Number(data.Weight3 / 1000) / volume;
    data.Density3 =  parseFloat(density.toFixed(2))
    return parseFloat(density.toFixed(2));
  };

  // Compressive Strength Calculation
  const calCompStrength1 = () => {
    let cStrength = Number(data.Load1) / (calCrossArea1() / 1000);
    data.CompressiveStrength1 = parseFloat(cStrength.toFixed(2));
    return parseFloat(cStrength.toFixed(2));
  };

  const calCompStrength2 = () => {
    let cStrength = Number(data.Load2) / (calCrossArea2() / 1000);
    data.CompressiveStrength2 = parseFloat(cStrength.toFixed(2));
    return parseFloat(cStrength.toFixed(2));
  };

  const calCompStrength3 = () => {
    let cStrength = Number(data.Load3) / (calCrossArea3() / 1000);
    data.CompressiveStrength3 = parseFloat(cStrength.toFixed(2));
    return parseFloat(cStrength.toFixed(2));
  };

  // calculate days 

  

  const days = () => {
    let startDate = data.dateCasting;
    let endDate = data.TestingD;
    
    const calculateDaysBetweenDates = () => {
      if (!startDate || !endDate) return 0;
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      return Math.floor(differenceInDays);
    };
  
    
    data.Age = `${calculateDaysBetweenDates()} Days`;
  };

  // Get today's full date
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  const fullDate = today.toLocaleDateString(undefined, options);
  

// Filter the data array based on today's date
const filterTestData = testData.filter(test => test.status === false && test.Siteeng === localStorage.getItem('email'));
  return (
    <Container className="mt-4">
      <h1 className='text-center'>Welcome to Site Engineer Dashboard</h1>
      <h3 className='text-center'>{fullDate}</h3>

      <div className='vh-80 text-center'>
        <div className="container mt-5">
          <h1 className="mb-4">Unreviewed Test Data</h1>
          <hr></hr>
          <ul className="list-group">
            {filterTestData.map(test => (
              <li key={test._id} className="list-group-item d-flex justify-content-between align-items-center">
               # {test.pName}__{test.tName}
                <Button variant="primary" size="sm" onClick={() => handleView(test)}>View</Button>
              </li>
            ))}
          </ul>
        </div>
        {isEditing && (
          <div className="container-fluid form-area" id="main-form1">
            <div className="container-fluid bg-white" id="main-form1">
      <Form className="text text-black bg-white">
        <Form.Group
          as={Col}
          controlId="formGridEmail"
          className="text-center text-2xl pt-10"
        >
          <p>Compressive Strength of Concrete Cubes</p>
        </Form.Group>
        <hr className="h-px my-8"></hr>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} controlId="formgConcrete">
            <Form.Label>Grade of Concrete</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Grade of Concrete"
              name="gConcrete"
              value={data.gConcrete}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <Form.Label>Date of Receipt:</Form.Label>
            <Form.Control
              type="date"
              name="DateOfReceipt"
              placeholder="Date of Receipt"
              value={data.DateOfReceipt}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} xs={12} controlId="formGridEmail">
            <Form.Label>Member</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Member"
              name="member"
              value={data.member}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <Form.Label>Date of Casting:</Form.Label>
            <Form.Control
              type="date"
              name="dateCasting"
              value={data.dateCasting}
              onChange={handleInputChange }
            />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col} xs={12} controlId="formGridEmail">
            <Form.Label>Building</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Building"
              name="Building"
              value={data.Building}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <Form.Label>Date of Testing:</Form.Label>
            <Form.Control
              type="date"
              name="TestingD"
              value={data.TestingD}
              onChange={handleInputChange || days }
            />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col} xs={12} controlId="formGridEmail">
            <Form.Label>Level</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Level"
              name="Level"
              value={data.Level}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} controlId="formGridEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Age"
              name="Age"
              value={data.Age}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col} xs={12} controlId="formGridEmail">
            <Form.Label>Witness by</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="WitnessBy"
              name="WitnessBy"
              value={data.WitnessBy}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        <Row className="mb-6">
          <Form.Group as={Col} xs={12} controlId="formGridEmail">
            <Form.Label>Cube No</Form.Label>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Label>1</Form.Label>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Label>2</Form.Label>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Label>3</Form.Label>
          </Form.Group>
        </Row>

        <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        <Row>
          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <p>Size(mm)- Length</p>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              autoComplete="off"
              name="SizeLength1"
              placeholder="SizeLength1"
              value={data.SizeLength1}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="SizeLength2"
              placeholder="SizeLength2"
              value={data.SizeLength2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="SizeLength3"
              placeholder="SizeLength3"
              value={data.SizeLength3}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <p>Size(mm)- Width</p>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              autoComplete="off"
              name="SizeWidth1"
              placeholder="SizeWidth1"
              value={data.SizeWidth1}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="SizeWidth2"
              placeholder="SizeWidth2"
              value={data.SizeWidth2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="SizeWidth3"
              placeholder="SizeWidth3"
              value={data.SizeWidth3}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <p>Size(mm)- Height</p>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              autoComplete="off"
              name="SizeHeight1"
              placeholder="SizeHeight1"
              value={data.SizeHeight1}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="SizeHeight2"
              placeholder="SizeHeight2"
              value={data.SizeHeight2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="SizeHeight3"
              placeholder="SizeHeight3"
              value={data.SizeHeight3}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <p>Weight(kg)</p>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              autoComplete="off"
              name="Weight1"
              placeholder="Weight1"
              value={data.Weight1}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="Weight2"
              placeholder="Weight2"
              value={data.Weight2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="Weight3"
              placeholder="Weight3"
              value={data.Weight3}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="pt-3">
          <Form.Group as={Col} xs={12} controlId="formGridPassword">
            <p>Load at failure (kN)</p>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              autoComplete="off"
              name="Load1"
              placeholder="Load1"
              value={data.Load1}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="Load2"
              placeholder="Load2"
              value={data.Load2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridPassword">
            <Form.Control
              type="number"
              name="Load3"
              placeholder="Load3"
              value={data.Load3}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
        <Row>
  <Form.Group as={Col} xs={12} controlId="formGridCrossArea">
    <p>Cross Area (mm²)</p>
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridCrossArea1">
    <Form.Control
      type="number"
      name="CrossArea1"
      placeholder="CrossArea1"
      value={calCrossArea1()}
      onChange={handleInputChange}
      readOnly
    />
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridCrossArea2">
    <Form.Control
      type="number"
      name="CrossArea2"
      placeholder="CrossArea2"
      value={calCrossArea2()}
      onChange={handleInputChange}
      readOnly
    />
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridCrossArea3">
    <Form.Control
      type="number"
      name="CrossArea3"
      placeholder="CrossArea3"
      value={calCrossArea3()}
      onChange={handleInputChange}
      readOnly
    />
  </Form.Group>
</Row>

<Row className="pt-3">
  <Form.Group as={Col} xs={12} controlId="formGridDensity">
    <p>Density (kg/m³)</p>
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridDensity1">
    <Form.Control
      type="number"
      name="Density1"
      placeholder="Density1"
      value={calDensity1()}
      readOnly
    />
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridDensity2">
    <Form.Control
      type="number"
      name="Density2"
      placeholder="Density2"
      value={calDensity2()}
      readOnly
    />
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridDensity3">
    <Form.Control
      type="number"
      name="Density3"
      placeholder="Density3"
      value={calDensity3()}
      readOnly
    />
  </Form.Group>
</Row>

<Row className="pt-3">
  <Form.Group as={Col} xs={12} controlId="formGridCompStrength">
    <p>Compressive Strength (N/mm²)</p>
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridCompStrength1">
    <Form.Control
      type="number"
      name="CompStrength1"
      placeholder="CompStrength1"
      value={calCompStrength1()}
      readOnly
    />
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridCompStrength2">
    <Form.Control
      type="number"
      name="CompStrength2"
      placeholder="CompStrength2"
      value={calCompStrength2()}
      readOnly
    />
  </Form.Group>
  <Form.Group as={Col} xs={4} controlId="formGridCompStrength3">
    <Form.Control
      type="number"
      name="CompStrength3"
      placeholder="CompStrength3"
      value={calCompStrength3()}
      readOnly
    />
  </Form.Group>
</Row>

        <Row>
          <Form.Group as={Col} xs={12} controlId="formGridRemark1">
            <p>Remark</p>
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridRemark1">
            <Form.Control
              type="text"
              autoComplete="off"
              name="Remark1"
              placeholder="Remark1"
              value={data.Remark1}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridRemark2">
            <Form.Control
              type="text"
              autoComplete="off"
              name="Remark2"
              placeholder="Remark2"
              value={data.Remark2}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} xs={4} controlId="formGridRemark3">
            <Form.Control
              type="text"
              autoComplete="off"
              name="Remark3"
              placeholder="Remark3"
              value={data.Remark3}
              onChange={(e) => {
                handleInputChange(e);
                calAvg();
              }}
            />
          </Form.Group>
        </Row>
        <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
        
        <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

        <Row className="pt-3 pb-3">
          <Form.Group as={Col} xs={12} controlId="formGridCompressiveAvgStrength">
            <p>Average Compressive Strength (N/mm2)</p>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="formGridCompressiveAvgStrength">
            <Form.Control
              type="number"
              name="CompressiveAvgStrength"
              placeholder="CompressiveAvgStrength"
              value={calAvg()}
              readOnly
            />
          </Form.Group>
        </Row>
        <Row className='pb-5 pt-5'>
        <Button variant="success" className='vw-50' onClick={handleSave}>
                Save
              </Button>
        </Row>
        
      </Form>
      
    </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default SiteEngDashboardHome;
