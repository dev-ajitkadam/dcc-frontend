import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Policies = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="text-center bg-warning text-dark">
              <h4>DYNAMIC CONCRETE CONSULTANCY</h4>
              <p>QUALITY MEETS EXCELLENCE</p>
            </Card.Header>
            <Card.Body>
              <h5>Privacy Policy</h5>
              <p>
                At DYNAMIC CONCRETE CONSULTANCY, we are deeply committed to safeguarding the privacy of our clients and users. The information we collect is primarily used to enhance your experience with our services, ensuring that we can provide you with the most efficient and personalized service possible. This may include using your data to process orders, manage your account, or respond to your inquiries. Rest assured that we do not sell, trade, or rent your personal information to third parties. We employ advanced security measures to protect your data from unauthorized access and disclosure. Any data shared with us is handled with the utmost care and responsibility, in compliance with applicable laws and regulations. By engaging with our services, you consent to the collection and use of your information as described in this policy.
              </p>
              <hr />

              <h5>Refund Policy</h5>
              <p>
                At DYNAMIC CONCRETE CONSULTANCY, customer satisfaction is paramount. We understand that there may be circumstances where you are not completely satisfied with the services provided. In such cases, we offer a clear and fair refund policy. You have 30 calendar days from the date of service delivery to request a refund. To be eligible for a refund, the services must not have been fully utilized or the products must be returned in the same condition as they were received. We will review each refund request on a case-by-case basis to ensure that it meets our policy criteria. Refunds will be processed within a reasonable timeframe and credited back to the original method of payment. Our goal is to resolve any issues you may encounter swiftly and to your satisfaction.
              </p>
              <hr />

              <h5>Quality Policy</h5>
              <p>
                DYNAMIC CONCRETE CONSULTANCY is unwavering in its commitment to quality. As an ISO 9001:2015 certified company, we adhere to the highest standards in all aspects of our operations. Our quality policy is driven by a dedication to excellence, accuracy, and reliability in every service we provide. We believe that quality is not just a goal but a continuous journey. To this end, we employ stringent quality control measures across all our processes, from the testing of materials to the preparation of reports. Our team is trained to follow best practices, ensuring that each project meets the exacting standards expected by our clients. By choosing DYNAMIC CONCRETE CONSULTANCY, you are partnering with a company that values precision, professionalism, and customer satisfaction above all else.
              </p>
              <hr />

              <h5>Terms of Use</h5>
              <p>
                The terms of use outlined by DYNAMIC CONCRETE CONSULTANCY are designed to ensure a transparent and secure experience for all users of our services. By accessing or using our website and services, you agree to comply with these terms. These terms govern the use of our website, including any content, functionality, and services offered. Unauthorized use of our website may give rise to a claim for damages and/or be a criminal offense. We reserve the right to make changes to these terms at any time, and it is your responsibility to review them regularly to ensure that you are aware of any updates. Continued use of our services after any such changes signifies your acceptance of the new terms. Our terms of use are meant to protect both our clients and our business, ensuring that our operations remain fair, legal, and beneficial to all parties involved.
              </p>
            </Card.Body>
            <Card.Footer className="text-center bg-light">
              <p>SHOP NO. 6/7, SR. NO.98, NEAR MARUTI MANDIR, OPP. SAI SHIRODHA PARK, DEEPAK NAGAR, GOPALPATI, MANJARI BK, PUNE - 412307</p>
              <p>Email: support@dccrmc.com | CONTACT NO.: 8448481344</p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Policies;
