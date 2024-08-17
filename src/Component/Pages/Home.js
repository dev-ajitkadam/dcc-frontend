import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import HeroBg from "../images/HeroBg.png";
import consultancy from '../images/consultancy.jpg'
import qualityAdvantages from '../images/qualityAdvantages.jpg'
import ourService from '../images/ourService.jpg'
import qualitywork from '../images/quality-work.jpg'


function Home() {
  const buttonStyle = {
    backgroundColor: "#007bff",
    padding: "12px 24px",
    borderRadius: "30px",
    color: "#ffffff",
    textDecoration: "none",
    boxShadow: "0 5px 15px rgba(0, 123, 255, 0.3)",
  };

  return (
    <div className="p-0 mt--1">
      <div className="mt-0">
        <div className="video-container mt-0 position-relative">
          <div
            className="background-image p-0 m-0"
            style={{ height: "100vh", overflow: "hidden" }}
          >
            <img
              src={HeroBg}
              alt="Background"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                margin: 0,
                filter: "brightness(50%)",
              }}
            />
          </div>
          <div className="content text-center position-absolute top-50 start-50 translate-middle text-white">
            <div className="p-md-3 m-md-1 text-left heroBox mt-0">
              <div className="mx-auto mt-0">
                <h1 className="display-2 fw-bold animate__animated animate__fadeInUp">
                  <strong className="Namecap">D</strong>YNAMIC{" "}
                  <strong className="Namecap">C</strong>ONCRETE{" "}
                  <strong className="Namecap">C</strong>ONSULTANCY
                </h1>
                <h3 className="fw-normal text-dark pt-2 pb-2 m-3 bg-warning rounded-5 cards ">
                  DCC is your trusted partner that delivers quality testing lab
                  services and ensures complete safety and regulatory compliance
                  with our testing, inspection, and certification services. DCC
                  is the best laboratory testing service provider in India.
                </h3>
                <div className="d-flex form-control-lg justify-content-center text-center pb-3">
                  <Link to="/about">
                    <Button
                      className="rounded-5 btn btn-primary cards"
                      style={buttonStyle}
                    >
                      Read more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container pb-5 pt-5">
          <h2 className=" border-bottom text-center display-6 fw-bold text-primary">
            Testing Services
          </h2>
          <hr />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-lg-5 ">
            {[
              {
                title: "Cement",
                description:
                  "Ensure material integrity with our precise cement testing services.",
                icon: "bi bi-building",
              },
              {
                title: "Fly Ash",
                description:
                  "Assess the quality and suitability of Fly Ash through thorough testing and analysis.",
                icon: "bi bi-droplet-half",
              },
              {
                title: "GGBFS",
                description:
                  "Evaluate the quality and properties of GGBFS through comprehensive testing.",
                icon: "bi bi-bar-chart",
              },
              {
                title: "Fine Aggregate",
                description:
                  "Assess the structural integrity and durability of Fine Aggregate through rigorous testing procedures.",
                icon: "bi bi-pie-chart",
              },
              {
                title: "Course Agg",
                description:
                  "Determine the strength, durability, and performance of Course Agg through rigorous testing protocols.",
                icon: "bi bi-hammer",
              },
              {
                title: "Water",
                description:
                  "Evaluate the quality, durability, and suitability of water materials through comprehensive testing procedures.",
                icon: "bi bi-water",
              },
              {
                title: "Add Mixture",
                description:
                  "Ensure the quality, strength, and durability of Add mixture through rigorous testing and analysis.",
                icon: "bi bi-layers",
              },
              {
                title: "Cube Testing",
                description:
                  "Determine the composition, characteristics, and suitability of Cube testing for various applications through comprehensive testing and analysis.",
                icon: "bi bi-square",
              },
              {
                title: "Other",
                description:
                  "Assess the quality, viscosity, and durability of other testing through rigorous testing and analysis.",
                icon: "bi bi-tools",
              },
            ].map((service, index) => (
              <div key={index} className="col">
                <div className="cardss h-100 shadow-sm bg-custom-colors">
                  <div className="card-body text-center rounded p-1">
                    <i
                      className={`${service.icon} text-primary mb-3`}
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h3 className="fs-4 text-white">{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/services">
                      <button className="btn btn-primary">KNOW MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container">
          <h1 className=" border-bottom text-center display-6 fw-bold text-primary">
            Why Choose Us
          </h1>
          <hr />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center align-items-center pt-2 text-white">
            {[
              {
                title: "System based concrete mix design",
                icon: "bi bi-gear",
              },
              {
                title: "Quality based 15 Method material testing",
                icon: "bi bi-graph-up",
              },
              {
                title: "Proper Reporting by E-Mail & Hardcopy Format",
                icon: "bi bi-envelope-arrow-down",
              },
              {
                title: "Zero Tension Systems",
                icon: "bi bi-exclamation-circle",
              },
              {
                title: "Client Satisfaction & Dedication",
                icon: "bi bi-people",
              },
              {
                title: "Controlling all concrete parameters",
                icon: "bi bi-tools",
              },
            ].map((whyUs, index) => (
              <div key={index} className="col">
                <div className="cardss h-100  text-center text-white">
                  <div className="card-body d-flex align-items-center justify-content-center p-xl-5 p-1 rounded">
                    <i
                      className={`${whyUs.icon}  text-primary`}
                      style={{ fontSize: "3em" }}
                    ></i>
                    <div className="ms-3">
                      <h3 className="fw-bold mb-0 fs-4 text-White">
                        {whyUs.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          className="position-relative overflow-hidden text-center shadow-sm mt-2 mb-md-2 p-5"
          style={{
            backgroundImage: "url('path-to-your-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
        >
          <div className="bg-custom-colors py-5 form-control-lg container-fluid">
            <h3 className=" bold text-warning fs-1">
              We Ensure our Performance Meet your Expectations!
            </h3>
            <h1 className=" text-primary">EXPERTISE</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
              We know you rely on us to keep your business moving forward. We
              make sure the results come in as expected by managing the speedy
              sample collection, and high-quality testing followed by a quick
              response. Get your tailored support today!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 rounded-pill"
                >
                  Contact Us
                </button>
              </Link>
              <Link to="/services">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4 rounded-pill"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featurette Section */}
        <div className="container p-5">
          <h1 className="pb-1 border-bottom text-center display-6 fw-bold text-primary">
            Discover Our Unique Features
          </h1>
          <hr />
          <div className="row featurette align-items-center py-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-bold">
                <span className=" text-primary">High-Quality Assurance.</span>
                <br />
                Focused on Compliance.
              </h2>
              <p className="lead">
                Our quality control processes are designed to ensure that your
                materials meet all necessary standards and requirements.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src={qualitywork}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-3 shadow-sm"
                alt="High Quality"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row featurette align-items-center py-5">
            <div className="col-md-7 order-md-1">
              <h2 className="featurette-heading fw-bold">
                <span className="text-primary">Expert Service Providers.</span>
                <br />
                Unmatched Expertise.
              </h2>
              <p className="lead">
                Our team of experts provides personalized service and guidance
                to ensure the best results for your projects.
              </p>
            </div>
            <div className="col-md-5 order-md-2">
              <img
                src={ourService}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-3 shadow-sm"
                alt="Expert Service Providers"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row featurette align-items-center py-5">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-bold">
                <span className="text-primary">Value-Driven Outcomes.</span>
                <br />
                Focused on Results.
              </h2>
              <p className="lead">
                We understand the importance of delivering results that align
                with your business goals. Our services are tailored to meet your
                specific needs.
              </p>
            </div>
            <hr></hr>
            <div className="col-md-5 order-md-1">
              <img
                src={qualityAdvantages}
               
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-3 shadow-sm"
                alt="Value Driven Outcomes"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row featurette align-items-center py-5">
            <div className="col-md-7 order-md-1">
              <h2 className="featurette-heading fw-bold">
                <span className="text-primary">Complete Project Support.</span>
                <br />
                Tailored to Your Needs.
              </h2>
              <p className="lead">
                We offer comprehensive project support from start to finish,
                ensuring your success every step of the way.
              </p>
            </div>
            <hr></hr>
            <div className="col-md-5 order-md-2">
              <img
                src={consultancy}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-3 shadow-sm"
                alt="Complete Project Support"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
