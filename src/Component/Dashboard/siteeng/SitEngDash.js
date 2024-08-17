import React, { useState } from "react";
import Cookies from 'js-cookie'
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from "react-bootstrap";
import AssignedProjectList from "./AssignedProjectList";
import SiteEngDashboardHome from "./Home";
import SiteEngAddProject from "./AddProject";
import toast from "react-hot-toast";
import { useEffect } from "react";
import ScheduleForm from "./Sheduler";
import CalendarComponent from "./Calander";

function SiteEngDash() {
    const [nav, setNav] = useState("home");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      
    };
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    // logout request
    const navigate = useNavigate();

    const handleLogout = () => {
      Cookies.remove('token');
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
      navigate("/");
      toast.success("Logout Successfully");
    };

  let UserName= localStorage.getItem("role")
    return (
      <div className="p-0 vh-50 dash">
        <div className="row">
          <div className={`col-md-3 vh-100 d-md-flex flex-column flex-shrink-0  bg-dark shadow-sm ${isMobile && !sidebarOpen ? "sidebar-closed" : "sidebar-open"} `}>
            <div className="d-md-flex flex-column flex-shrink-0 p-2 py-2 ">
              <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 text-white bi bi-speedometer2"> SiteEng Dashboard</span>
                <div className="sidebar-toggle d-md-none" onClick={toggleSidebar}>
                {sidebarOpen ? (
                  <i class="bi bi-x-square bg-white p-72"></i>
                ) : (
                  <i className="bi bi-list"></i>
                )}
              </div>
              </Link>
              <hr  className=" text-white size-3 bg-black"/>
              <ul className="nav nav-pills flex-column mb-auto" onClick={toggleSidebar}>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("home")} className={`nav-link text-white ${nav === "home" && "active"}`}>
                  <i class="bi bi-house m-2" ></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("addproject")} className={`nav-link text-white ${nav === "addproject" && "active"}`}>
                  <i class="bi bi-person-add m-2"></i>
                    Add Project
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("assignedprojectlist")} className={`nav-link text-white ${nav === "assignedprojectlist" && "active"}`}>
                  <i class="bi bi-person-lines-fill m-2"></i>
                    Add Test
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("sheduler")} className={`nav-link text-white ${nav === "sheduler" && "active"}`}>
                  <i class="bi bi-file-earmark-plus m-2"></i>
                    Add Schedules
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link onClick={() => setNav("Calander")} className={`nav-link text-white ${nav === "Calander" && "active"}`}>
                  <i class="bi bi-file-earmark-plus m-2"></i>
                    Calander
                  </Link>
                </li>
              </ul>
              <hr  className=" text-white size-3 bg-black"/>
              
              <button className="btn  bi bi-box-arrow-left btn-danger" onClick={handleLogout}>  Logout</button>
              </div>
            
          </div>
          <div className="col-md-9 scrollable-div">
            <div className="col">
              <div className="row">
              <div className="h-3">
                <Container className="dashnav">
                  <Navbar
                    expand="lg"
                    className="  shadow-sm px-4 round p-0"
                  >
                    <Navbar.Brand
                      className="sidebar-toggle d-md-none mr-14 size-60 d-flex flex-grow-1 p-0"
                      onClick={toggleSidebar}
                    >
                      {sidebarOpen ? (
                        <i className="bi bi-x-square-fill fs-2"></i> 
                      ) : (
                        <i className="bi bi-list text-white fs-2"></i>
                      )}
                    </Navbar.Brand>
                    <div className="text-white fs-4">{ UserName.charAt(0).toUpperCase() + UserName.slice(1)}</div>

                    <div className="ms-auto p-0">
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          
                          className=" d-flex align-items-center rounded-2xl bg-transparent border-0 text-white"
                        >
                          <i
                            className="bi bi-person-circle fs-2"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.ItemText>
                            {" "}
                            Name:-{localStorage.getItem("name")}
                          </Dropdown.ItemText>
                          <Dropdown.ItemText>
                            Email:-{localStorage.getItem("email")}
                          </Dropdown.ItemText>
                          <Dropdown.Divider />
                          <Dropdown.Item>
                            <button
                              className="btn  bi bi-box-arrow-left btn-danger w-100"
                              onClick={handleLogout}
                            >
                              {" "}
                              Logout
                            </button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Navbar>
                </Container>
              </div>
                <div className="h-90">
                  {nav === "home" && <SiteEngDashboardHome/>}
                  {nav === "addproject" && <SiteEngAddProject />}
                  {nav === "assignedprojectlist" && <AssignedProjectList/>}
                  {nav === "sheduler" && <ScheduleForm/>}
                  {nav === "Calander" && < CalendarComponent/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default SiteEngDash;
