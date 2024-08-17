import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Modal from 'react-bootstrap/Modal';

const Reports = () => {
  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const [formData, setFormData] = useState([]);
  const [filter, setFilter] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpDetails, setOtpDetails] = useState(null);
  const [date, setDate] = useState(getFormattedDate());
  const [pdfLink, setPdfLink] = useState(null);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await axios.get('https://server-dcc.onrender.com/form/getTestdata');
        setFormData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching test data:', error);
      }
    };
    fetchTestData();
  }, []);

  const sendOtp = async () => {
    try {
      const response = await axios.get(`https://2factor.in/API/V1/9ce7fc47-484e-11ef-8b60-0200cd936042/SMS/+919309595586/AUTOGEN/OTP1`);
      if (response.status === 200) {
        alert('OTP sent successfully');
        setOtpDetails(response.data.Details);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.get(`https://2factor.in/API/V1/9ce7fc47-484e-11ef-8b60-0200cd936042/SMS/VERIFY/${otpDetails}/${otp}`);
      if (response.data.Status === 'Success') {
        alert('OTP verified successfully');
        setIsVerify(true);
        setModalShow(false);
      } else {
        alert('OTP verification failed');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();

    const filtered = formData.filter((data) => {
      const projectMatch = data.pName.toLowerCase().includes(filter.toLowerCase());
      const dateMatch = (!startDate || new Date(data.TestingD) >= startDate) && (!endDate || new Date(data.TestingD) <= endDate);
      return projectMatch && dateMatch;
    });
    setFilteredData(filtered);
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text('DYNAMIC CONCRETE CONSULTANCY', 20, 20);
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text('QUALITY MEETS EXCELLENCE', 20, 26);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text('AN ISO 9001:2015 CERTIFIED', 20, 32);

    doc.setFontSize(14);
    doc.text('Test Report', 105, 40, { align: 'center' });
    doc.setFontSize(10);
    doc.text(data.tName, 105, 46, { align: 'center' });

    const details = [
      ['Reference No:-', `${data.pId}`],
      ['Report Date:-', date],
      ['Billing Name:-', data.cName],
      ['Billing Address:-', data.cAddress],
      ['Site Name:-', data.pName],
      ['Site Address:-', data.address],
      ['Grade of Concrete:-', data.gConcrete],
      ['Member:-', data.member],
      ['Building:-', data.Building],
      ['Date of Receipt:-', data.DateOfReceipt.split('T')[0]],
      ['Date of Casting:-', data.dateCasting.split('T')[0]],
      ['Date of Testing:-', data.TestingD.split('T')[0]],
      ['Age:-', data.Age],
      ['Witness by:-', data.WitnessBy]
    ];

    details.forEach((item, index) => {
      doc.text(`${item[0]}: ${item[1]}`, 20, 60 + index * 8);
    });

    const tableColumn = ["Cube.No", "Size-Length", "Size-width", "Size-Height(mm)", "Weight (gm)", "Load (KN)", "Cross Area (mm²)", "Density (kg/m³)", "Compressive Strength (N/mm²)", "Remark"];
    const tableRows = [
      [1, data.SizeLength1, data.SizeWidth1, data.SizeHeight1, data.Weight1, data.Load1, data.CrossArea1, data.Density1, data.CompressiveStrength1, data.Remark1],
      [2, data.SizeLength2, data.SizeWidth2, data.SizeHeight2, data.Weight2, data.Load2, data.CrossArea2, data.Density2, data.CompressiveStrength2, data.Remark2],
      [3, data.SizeLength3, data.SizeWidth3, data.SizeHeight3, data.Weight3, data.Load3, data.CrossArea3, data.Density3, data.CompressiveStrength3, data.Remark3]
    ];

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 170,
    });

    doc.text(`Compressive Strength Average (N/mm²):- ${data.CompressiveAvgStrength}`, 20, doc.lastAutoTable.finalY + 10);

    const notes = [
      "Terms and Conditions Written Overleaf are applicable by default for issuing this Report.",
      "1) Date of Casting as intimated by client.",
      "2) Reference IS : 516-1959, Method of test for Strength of concrete.",
      "3) Sample Size ( Number Of Cubes ) Found ok as per IS Specification.",
      "4) Any alteration in original printed report, would render this test report INVALID.",
      "5) Tested materials will be disposed off after compilation of testing / Finalization of Reports.",
      "6) Permission to witness the test by client report has to be taken in advance from the director.",
      "7) The role of this testing agency is restricted to testing of cubes as received preparation and issue of reports.",
      "8) In Case of any dispute, decision of the Director, DYNAMIC CONCRETE CONSULTANCY, will be final and binding & subject."
    ];

    notes.forEach((note, index) => {
      doc.text(note, 20, doc.lastAutoTable.finalY + 20 + index * 6);
    });

    doc.text('Authorized Signatory', 160, 280);

    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfLink(pdfUrl);

    // Return URL for further usage
    return pdfUrl;
  };

  const handleVerifyClick = () => {
    sendOtp();
    setModalShow(true);
  };

  const MyVerticallyCenteredModal = (props) => (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton className='title-model'>
        <Modal.Title id="contained-modal-title-vcenter">Verify you are Admin</Modal.Title>
      </Modal.Header>
      <Modal.Body className='otp-main'>
        <h4 className='center'>* Note: We have sent an OTP to the admin number. Please enter the OTP to verify.</h4>
        <input type='text' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={sendOtp}>Resend OTP</Button>
        <Button onClick={verifyOtp}>Verify OTP</Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="reports-container">
      <Form className="mb-3 report-form" onSubmit={handleFilterSubmit}>
        <Form.Group controlId="filter">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter project name"
            value={filter}
            onChange={handleFilterChange}
          />
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Start Date:</Form.Label>
          <DatePicker
            selected={startDate}
            placeholderText="YYYY/MM/DD"
            onChange={date => setStartDate(date)}
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>End Date:</Form.Label>
          <DatePicker
            selected={endDate}
            placeholderText="YYYY/MM/DD"
            onChange={date => setEndDate(date)}
            className="form-control"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Filter</Button>
      </Form>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="test-data-list">
        <ol className="list-group list-group-numbered">
          {filteredData.length > 0 ? (
            filteredData.map((data) => (
              <li className="list-group-item d-flex justify-content-between align-items-start" key={data._id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{data.pName}</div>
                  Test Date: {data.testDate}
                </div>
                {isVerify ? (
                  <Button className='btn-list' onClick={handleVerifyClick}>Verify</Button>
                ) : (
                  <>
                    <Button className='btn-list' onClick={() => {
                      const pdfUrl = generatePDF(data);
                      setPdfLink(pdfUrl);
                    }}>Generate PDF</Button>
                    {pdfLink && (
                      <div>
                        <a href={pdfLink} target="_blank" rel="noopener noreferrer">View PDF</a>
                        <br />
                        <a href={`mailto:?subject=Test Data Report&body=Please find the test data report here: ${pdfLink}`} target="_blank" rel="noopener noreferrer">Send via Email</a>
                        <br />
                        <a href={`https://api.whatsapp.com/send?text=Please find the test data report here: ${pdfLink}`} target="_blank" rel="noopener noreferrer">Send via WhatsApp</a>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))
          ) : (
            <p>No data available</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Reports;
