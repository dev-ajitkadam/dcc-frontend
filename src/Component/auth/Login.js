import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import dcc1 from "../images/dcc1.png";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

const LoginForm = () => {
  const navigate = useNavigate();
  const token = Cookies.get('token');

  useEffect(() => {
    if (token) {
      navigate("/");  // Redirect to home if already logged in
    }
  }, [token, navigate]);

  const location = useLocation();
  const Role = location.state?.role;  // Get role from location state

  const emailRef = useRef("");
  const passRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    const userData = { email, password: pass};

    axios
      .post(
        "https://server-dcc.onrender.com/user/login", 
        userData,
        { 
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true  // Include credentials in the request
        }
      )
      .then((res) => {
        if (res.status === 200) {
          // Store token in cookies
          Cookies.set('token', res.data.token, { expires: 7 }); 

          localStorage.setItem("role", res.data.role);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("name", res.data.name);
          toast.success("Login Successful");

          // Redirect based on role
          if (res.data.role === "admin") {
            navigate("/dashboard/admin");
          } else if (res.data.role === "manager") {
            navigate("/dashboard/manager");
          } else if (res.data.role === "siteeng") {
            navigate("/dashboard/siteeng");
          } else {
            navigate("/dashboard/client");
          }
        } else {
          toast.error("Login failed: " + res.data.message);
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        toast.error("Login error: " + (err.response?.data?.message || err.message));
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 bg-white shadow box-area p-5 py-3">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box p-3 bg-warning h-auto">
          <div className="featured-image mb-3">
            <img
              src={dcc1}
              className="img-fluid"
              style={{ width: "5em" }}
              alt="featured"
            />
          </div>
          <p className="text-black fs-2">Be Verified</p>
          <small className="text-black text-wrap text-center pb-4">
            DYNAMIC CONCRETE CONSULTANCY
          </small>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4 text-center">
              <h2>Hello {Role ? Role.charAt(0).toUpperCase() + Role.slice(1) : "User"}, Please Login</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  autoComplete="off"
                  name="email"
                  id="email"
                  ref={emailRef}
                  required // Added required attribute for better UX
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  ref={passRef}
                  required // Added required attribute for better UX
                />
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
            </form>
            <div className="forgot">
              <Link to="/contact">
                <small>
                  Don't have an account? || Forgot Password - Contact Admin
                </small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
