import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import './site.css';

const SiteEngineerDashboard = () => {
  const [nav, setNav] = useState("");
  const [assignedProjects, setAssignedProjects] = useState([]);

  const [data, setData] = useState({
    cName: '',
    cAddress: '',
    pName: '',
    address: '',
    tName: '',
    pId: '',
    gConcrete: '',
    DateOfReceipt: '',
    member: '',
    dateCasting: '',
    Building: '',
    TestingD: '',
    Level: '',
    Age: '',
    WitnessBy: '',
    SizeLength1: '',
    SizeLength2: '',
    SizeLength3: '',
    SizeWidth1: '',
    SizeWidth2: '',
    SizeWidth3: '',
    SizeHeight1: '',
    SizeHeight2: '',
    SizeHeight3: '',
    Weight1: '',
    Weight2: '',
    Weight3: '',
    Load1: '',
    Load2: '',
    Load3: '',
    CrossArea1: '',
    CrossArea2: '',
    CrossArea3: '',
    Density1: '',
    Density2: '',
    Density3: '',
    CompressiveStrength1: '',
    CompressiveStrength2: '',
    CompressiveStrength3: '',
    Remark1: '',
    Remark2: '',
    Remark3: '',
    Siteeng: '',
    CompressiveAvgStrength: ''
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  

  useEffect(() => {
    const fetchAssignedProjects = async () => {
      try {
        const response = await axios.get('https://server-dcc.onrender.com/project/getprojects');
        setAssignedProjects(response.data);
      } catch (error) {
        console.error('Error fetching assigned projects:', error);
        toast.error('Failed to fetch assigned projects.');
      }
    };
    fetchAssignedProjects();
  }, []);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  const handleProjectChange = useCallback((event) => {
    const selectedProject = assignedProjects.find(project => project.name === event.target.value);
    setData((prevData) => ({
      ...prevData,
      pName: event.target.value,
      cName: selectedProject?.cName || '',
      cAddress: selectedProject?.cAddress || '',
      address: selectedProject?.address || '',
      pId: selectedProject?.projectId || '',
      Siteeng : selectedProject?.siteengName || ''
    }));
  }, [assignedProjects]);

  const handleTestChange = useCallback((event) => {
    setNav(event.target.value);
    setData((prevData) => ({
      ...prevData,
      tName: event.target.value
    }));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isChecked) {
      await axios.post("https://server-dcc.onrender.com/form/addTest", data);
      setData({
        cName: '',
        cAddress: '',
        pName: '',
        address: '',
        tName: '',
        pId: '',
        gConcrete: '',
        DateOfReceipt: '',
        member: '',
        dateCasting: '',
        Building: '',
        TestingD: '',
        Level: '',
        Age: '',
        WitnessBy: '',
        SizeLength1: '',
        SizeLength2: '',
        SizeLength3: '',
        SizeWidth1: '',
        SizeWidth2: '',
        SizeWidth3: '',
        SizeHeight1: '',
        SizeHeight2: '',
        SizeHeight3: '',
        Weight1: '',
        Weight2: '',
        Weight3: '',
        Load1: '',
        Load2: '',
        Load3: '',
        CrossArea1: '',
        CrossArea2: '',
        CrossArea3: '',
        Density1: '',
        Density2: '',
        Density3: '',
        CompressiveStrength1: '',
        CompressiveStrength2: '',
        CompressiveStrength3: '',
        Remark1: '',
        Remark2: '',
        Remark3: '',
        Siteeng: '',
        CompressiveAvgStrength: ''
      });
      setIsChecked(!isChecked)
      toast.success("Test Added Successfully"); }
    } catch (error) {
      toast.error("Error adding test");
      console.error(error);
    }

  };

  const localEmail = localStorage.getItem('email');
  const filteredProjects = assignedProjects.filter(project => project.siteengName === localEmail && project.status === "approved");

  return (
    <div className='mt-4'>
      <form onSubmit={handleSubmit} className='form-area'>
      <h2 className="text-center font-bold pb-2 pt-1">Add New Test</h2>
      <hr></hr>
        <Form.Select size="lg" className='mb-3 ' onChange={handleProjectChange} value={data.pName}>
          <option value="">Select Project</option>
          {filteredProjects.map((project) => (
            <option key={project._id} value={project.name}>
              {project.name}
            </option>
          ))}
        </Form.Select>
        <Form.Select size="lg" onChange={handleTestChange} value={nav}>
          <option value="">Select Test</option>
          <option value="COMPRESSIVE STRENGTH OF CONCRETE CUBES">COMPRESSIVE STRENGTH OF CONCRETE CUBES</option>
          {/* <option value="AGGREGATE IMPACT VALUE">AGGREGATE IMPACT VALUE</option> */}
        </Form.Select>
        <div className="h-90">
          {nav === "COMPRESSIVE STRENGTH OF CONCRETE CUBES" && <Form1 handleInputChange={handleInputChange} data={data} />}
          {nav === "AGGREGATE IMPACT VALUE" && <Form2 handleInputChange={handleInputChange} data={data} />}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700" />
        <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          I have checked all details and confirm they are correct.
        </label>
      </div>
        <Button type="submit" disabled={!isChecked} className="btn_primary d-block mx-auto" id='btn-assign'>
          Submit Record
        </Button>
      </form>
    </div>
  );
};

export default SiteEngineerDashboard;
