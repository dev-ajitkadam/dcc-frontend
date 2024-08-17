import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    cname: "",
    subject: "",
  });

  const [inputFilled, setInputFilled] = useState({
    name: false,
    email: false,
    number: false,
    cname: false,
    subject: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setInputFilled({ ...inputFilled, [name]: !!value });
  };

  const handleSubmit = async (e) => {
    const { name, email, number, cname, subject } = user;
    e.preventDefault();
    try {
      const res = await axios.post("https://server-dcc.onrender.com/contact/addContact", {
        name,
        email,
        number,
        cname,
        subject,
      });
      if (res.status === 200) {
        toast.success("Response Saved Successfully");
        setUser({
          name: "",
          email: "",
          number: "",
          cname: "",
          subject: "",
        });
        setInputFilled({
          name: false,
          email: false,
          number: false,
          cname: false,
          subject: false,
        });
      } else {
        toast.error("Error occurred");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="form-control-lg container mb-5 mt-5">
        <div className="container form-control-lg px-4 py-5 p-1 bg-custom-colors">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h4 className="display-5 fw-bold lh-1 text-primary mb-3 ">
                LET'S BEGIN YOUR PROJECT WITH
              </h4>
              <h1 className="display-2 fw-bold animate__animated animate__fadeInUp">
                  <strong className="Namecap">D</strong>YNAMIC{" "}
                  <strong className="Namecap">C</strong>ONCRETE{" "}
                  <strong className="Namecap">C</strong>ONSULTANCY
                </h1>
              <h3>Contact No: +918448481344</h3>
              <h3>Email ID: support@dccrmc.com</h3>
            </div>
            <div className="col-md-10 mx-auto col-lg-5 container">
              <form className="p-4 border rounded-3 bg-body-tertiary bg-custom-colors" onSubmit={handleSubmit}>
                <div className={`form-floating mb-3 ${inputFilled.name ? "filled" : ""}`}>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={user.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.email ? "filled" : ""}`}>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.number ? "filled" : ""}`}>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    onChange={handleChange}
                    value={user.number}
                    name="number"
                    placeholder="Mobile Number"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="mobile">Mobile Number</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.cname ? "filled" : ""}`}>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={user.cname}
                    name="cname"
                    placeholder="Company Name"
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="address">Company Name</label>
                </div>
                <div className={`form-floating mb-3 ${inputFilled.subject ? "filled" : ""}`}>
                  <textarea
                    className="form-control"
                    id="comments"
                    name="subject"
                    onChange={handleChange}
                    value={user.subject}
                    placeholder="Subject"
                    rows="4"
                    autoComplete="off"
                    required
                  ></textarea>
                  <label htmlFor="comments">Subject</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
