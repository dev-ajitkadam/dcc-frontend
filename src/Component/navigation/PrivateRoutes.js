import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import AdminDash from "../Dashboard/admin/AdminDash";
import ManagerDash from "../Dashboard/manager/ManagerDash";
import SiteEngDash from "../Dashboard/siteeng/SitEngDash";
import ClientDash from "../Dashboard/client/ClientDash";
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get("token");
        console.log("executed")

        // Check if token or role is missing
        if (!token) {
          handleAuthFailure();
          return;
        }

        const role = localStorage.getItem("role");

        // Make the request to verify the token
        const response = await axios.get(
          "https://server-dcc.onrender.com/user/auth/verify-token",
          {
            headers: { Authorization: `Bearer ${token}` }, // Use 'Authorization' with 'Bearer' prefix
          }
        );

        // Check if the role matches the verified role from the server
        if (response.data.role === role) {
          setIsAuth(true);
        } else {
          handleAuthFailure();
        }
      } catch (error) {
        console.error('Authorization error:', error);
        handleAuthFailure();
      } finally {
        setLoading(false);
      }
    };

    const handleAuthFailure = () => {
      // Remove all authentication-related data
      Cookies.remove('token');
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      setIsAuth(false);
      toast.error("Authentication failed. Please log in again.");
      navigate("/");
    };

    checkAuth(); // Call the authentication check
  }, [location, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  const role = localStorage.getItem("role");

  // Render the appropriate dashboard based on the user's role
  if (role && isAuth) {
    switch (role) {
      case "admin":
        return <AdminDash />;
      case "manager":
        return <ManagerDash />;
      case "siteeng":
        return <SiteEngDash />;
      case "client":
        return <ClientDash />;
      default:
        toast.error("Role not found. Please log in again.");
        navigate("/");
        return null;
    }
  } else {
    navigate("/");
    return null;
  }
};

export default PrivateRoutes;
