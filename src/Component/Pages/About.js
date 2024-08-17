import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import logo from '../images/dcc1.png'; // Replace with the actual path to your logo

function About() {
  return (
    <div className="container-fluid text-dark">
      {/* Header Section */}
      <div className="text-center py-5  text-dark">
        <img src={logo} alt="Logo" className="img-fluid mb-3" style={{ maxHeight: '100px' }} />
        <h2 className="font-weight-bold">About Us</h2>
      </div>

      {/* Overview Section */}
      <section className="about-us text-center py-5">
        <Container>
          <h5 className="mrg-btn font-weight-bold">Overview</h5>
          <hr className="my-4" />
          <p className="lead">
            DYNAMIC CONCRETE CONSULTANCY is a dedicated provider of concrete consultancy services. Established with the goal of ensuring quality and excellence in concrete works, we pride ourselves on delivering top-notch services to our clients. Our team is committed to maintaining the highest standards in all our operations, making sure every project we undertake is executed with precision and care.
          </p>
        </Container>
      </section>

      {/* Quality Work Section */}
      <Container className="shadow-sm p-5 text-dark bg-white rounded">
        <h5 className="mrg-btn text-center font-weight-bold">Our Quality Work</h5>
        <hr className="my-4" />
        <p>
          We have appointed a site lab assistant whose primary responsibility is the physical testing of aggregates and fresh concrete. Our key quality work includes:
        </p>
        <ListGroup variant="flush">
          <ListGroup.Item><FaCheckCircle className="text-success" /> Managing communication between the client and the quality team to ensure corrected mixes.</ListGroup.Item>
          <ListGroup.Item><FaCheckCircle className="text-success" /> Periodic sampling and testing of all materials.</ListGroup.Item>
          <ListGroup.Item><FaCheckCircle className="text-success" /> Monitoring the entire consultancy process, controlled by quality in real-time.</ListGroup.Item>
          <ListGroup.Item><FaCheckCircle className="text-success" /> Ensuring fresh concrete production on RMC plants only, with clear ID reporting.</ListGroup.Item>
        </ListGroup>
      </Container>

      {/* Our Services Section */}
      <Container className=" p-5  bg-white">
        <h5 className="mrg-btn text-center font-weight-bold">Our Services</h5>
        <hr className="my-4" />
        <Row>
          <Col md={6}>
            <Card className="border-0 ">
              <Card.Body>
                <Card.Text>
                  <FaCheckCircle className="text-success" /> Management of site projects with data systems for technical issue tracking.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="text-success" /> Client interaction and establishing responsible communication channels.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="text-success" /> Data management as per IS methods.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="text-success" /> Clear ID reporting for site casting.
                </Card.Text>
              
                <Card.Text>
                  <FaCheckCircle className="text-success" /> Fresh concrete production on RMC plants only.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="text-success" /> Regular input from Main Lab.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="text-success" /> Special handling of concrete properties for quality assurance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* How We Work Section */}
      <section className="about-us text-center py-5">
        <Container>
          <h5 className="mrg-btn font-weight-bold">How We Work</h5>
          <hr className="my-4" />
          <p className="lead">
            Cement testing is a procedure used to determine the quality and characteristics of Cement. These tests
            include physical, chemical, and performance testing. The most common cement tests include compressive
            strength, setting time, soundness, and fineness.
          </p>
        </Container>
      </section>
    </div>
  );
}

export default About;
