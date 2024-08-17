import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://server-dcc.onrender.com/project/getprojects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.cName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterFinal =  filteredProjects.filter(project => project.cName === localStorage.getItem("name"))

  return (
    <div className='container mt-4 ml-3 mr-3  bg-white rounded'>
      <h3 className="text-center mb-2 pt-2 p-0">Project List</h3>
    <div className=" p-4">
      
      <div className="mb-4">
        <input
          type="text"
          className="form-control text-black"
          placeholder="Search by SubClient name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <hr></hr>
      <div className="table-responsive">
        <table className="table table-striped p-3 ">
          <thead>
            <tr>
            <th>#</th>
              <th>Name</th>
              <th>Client Name</th>
              <th>Site Engineer Name</th>
              <th>Project ID</th>
              <th>Client Address</th>
            </tr>
          </thead>
          
          <tbody>
            
            {filterFinal.map((project, index) => (
              <tr key={project.id}>
                <th scope="row">{index + 1}</th>
                <td>{project.name}</td>
                <td>{project.cName}</td>
                <td>{project.siteengName}</td>
                <td>{project.projectId}</td>
                <td>{project.cAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ProjectList;
