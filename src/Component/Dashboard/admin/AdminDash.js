import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Reports from "./Reports";
import Navbar from "react-bootstrap/Navbar";
import AdminDashboardHome from "./Home";
import AdminAddProject from "./AddProject";
import toast from "react-hot-toast";
import { Container, Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import ProjectList from "./Projects";
import ManageProjects from "./ManageProjects";
import Leads from "./LeadContacts";
import Cookies from 'js-cookie'
import ReviewTestData from "../manager/ReviewTestData";
import ScheduleData from "../manager/Schedules";

function AdminDash() {
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
    <div className="p-0 vh-50 dash ">
      <div className="row">
        <div
          className={`col-md-3 vh-100 d-md-flex flex-column flex-shrink-0 bg-dark shadow-sm ${
            isMobile && !sidebarOpen ? "sidebar-closed" : "sidebar-open"
          }`}
        >
          <div className="d-md-flex flex-column flex-shrink-0 p-2 py-2">
            <Link
              to="#"
              className="d-flex mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none gap-5"
            >
              <span className="fs-4 text-white bi bi-speedometer2">
                Admin Dashboard
              </span>
              <div
                className="sidebar-toggle d-md-none text-end"
                onClick={toggleSidebar}
              >
                {sidebarOpen ? (
                  <i class="bi bi-x-circle text-white fs-2"></i>
                ) : (
                  <i className="bi bi-list"></i>
                )}
              </div>
            </Link>
            <hr className="text-white size-3" />
            <div className="sidebar-content">
              <ul
                className="nav nav-pills flex-column mb-auto"
                onClick={toggleSidebar}
              >
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("home")}
                    className={`nav-link text-white ${
                      nav === "home" ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-house m-2"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("adduser")}
                    className={`nav-link text-white ${
                      nav === "adduser" ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-person-add m-2"></i>
                    Add User
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("manageuser")}
                    className={`nav-link text-white ${
                      nav === "manageuser" ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-person-gear m-2"></i>
                    Manage User
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("addproject")}
                    className={`nav-link text-white ${
                      nav === "addproject" ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-file-earmark-plus m-2"></i>
                    Add Project
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("projects")}
                    className={`nav-link text-white ${
                      nav === "projects" ? "active" : ""
                    }`}
                  >
                    <i class="bi bi-kanban m-2"></i>
                    Projects
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("mProject")}
                    className={`nav-link text-white ${
                      nav === "mProject" ? "active" : ""
                    }`}
                  >
                    <i class="bi bi-view-list m-2"></i>
                    Manage Projects
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("reports")}
                    className={`nav-link text-white ${
                      nav === "reports" ? "active" : ""
                    }`}
                  >
                    <i className="bi bi-file-earmark-text m-2"></i>
                    Reports
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("LeadsContacts")}
                    className={`nav-link text-white ${
                      nav === "LeadsContacts" ? "active" : ""
                    }`}
                  >
                    <i class="bi bi-person-rolodex m-2"></i>
                    Lead Contacts
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("Review")}
                    className={`nav-link text-white ${
                      nav === "Review" ? "active" : ""
                    }`}
                  >
                    <i class="bi bi-clipboard2-data m-2"></i>
                    Review TestData
                  </Link>
                </li>
                <li className="nav-item form-control-lg">
                  <Link
                    to="#"
                    onClick={() => setNav("Schedule")}
                    className={`nav-link text-white ${
                      nav === "Schedule" ? "active" : ""
                    }`}
                  >
                   <i class="bi bi-bar-chart m-2"></i>
                    Schedule Data
                  </Link>
                </li>
              </ul>
              <hr className="text-white size-3 bg-black" />
            </div>
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
                          
                          className="d-flex align-items-center rounded-2xl bg-transparent border-0 text-white"
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
              <div className="h-90 scrollable-div mb-10">
                {nav === "home" && <AdminDashboardHome />}
                {nav === "reports" && <Reports />}
                {nav === "adduser" && <AddUser />}
                {nav === "manageuser" && <UserList />}
                {nav === "projects" && <ProjectList />}
                {nav === "addproject" && <AdminAddProject />}
                {nav === "mProject" && <ManageProjects />}
                {nav === "LeadsContacts" && <Leads />}
                {nav === "Review" && <ReviewTestData />}
                {nav === "Schedule" && <ScheduleData />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
