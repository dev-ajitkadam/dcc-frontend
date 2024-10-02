import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Services from './Component/Pages/Services';
import Login from './Component/auth/Login';
import Contact from './Component/Pages/Contact';
import ShowHeader from './Component/navigation/ShowHeader';
import NavBar from './Component/Pages/NavBar';
import Footer from './Component/Pages/Footer';
import ShowFooter from './Component/navigation/ShowFooter';
import SiteEngDash from './Component/Dashboard/siteeng/SitEngDash';
import AdminDash from './Component/Dashboard/admin/AdminDash';
import ManagerDash from './Component/Dashboard/manager/ManagerDash';
import ClientDash from './Component/Dashboard/client/ClientDash';
import { Toaster } from "react-hot-toast";
import PrivateRoutes from './Component/navigation/PrivateRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Policies from './Component/Pages/Policies';



function App() {
  
  return (
    <BrowserRouter>
    
    <Toaster/>
    <div className='App'>
    <ToastContainer/>
    <ShowHeader>
 {/* <Slider/> */}
      <NavBar/>
    </ShowHeader>
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*"  element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/Policies" exact element={<Policies/>} />
        {/* Private Routes */}
        <Route path='/dashboard' element={<PrivateRoutes/>}>
        <Route path='siteeng'  element={<SiteEngDash/>}/>
        <Route path="admin"  element={<AdminDash/>} />
        <Route path="manager"  element={<ManagerDash/>} />
        <Route path="client"  element={<ClientDash />} />
        </Route>
      </Routes>
      </div>
      <ShowFooter>
      <Footer/>
      </ShowFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
