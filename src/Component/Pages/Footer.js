import React from 'react';
import dcc1 from "../images/dcc1.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container-fluid footers text-light flex">
        <div className="row row-cols-1 row-cols-sm-2  pt-4 text-center">
        <div className="col text-center">
      <a href="/" className="d-inline-block">
        <img src={dcc1} width="100" height="80" alt="Logo" />
      </a>
      <h1 className="h1">DCC</h1>
    </div>


          <div className="container-fluid">
            <ul className="nav justify-content-center ">
              <li className="nav-item mb-2 p-2"><a href="#" className="nav-link text-dark bg-white rounded-5 p-2">Home</a></li>
              <li className="nav-item mb-2 p-2"><a href="#" className="nav-link p-2 text-light">Features</a></li>
              <li className="nav-item mb-2 p-2"><a href="#" className="nav-link p-2 text-light">Pricing</a></li>
              <li className="nav-item mb-2 p-2"><a href="#" className="nav-link p-2 text-light">FAQs</a></li>
              <li className="nav-item mb-2 p-2"><a href="#" className="nav-link p-2 text-light">About</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid footer">
        <div className="py-3 text-light">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link px-2 text-white">Services</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-white">Contact</Link></li>
            <li className="nav-item"><Link to="/Policies" className="nav-link px-2 text-white">Policies</Link></li>
          </ul>
          <p className="text-center text-white">© 2024-25 All Rights Reserved, DCC, Inc</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
