import React from 'react';
import { Container} from 'react-bootstrap';
import ProjectList from '../admin/Projects';

const ManagerDashboardHome = () => {
  
  
  // Get today's full date
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = today.toLocaleDateString(undefined, options);

  return (
    <Container className="mt-4">
      <h1 className='text-center'>Welcome to Manager Dashboard</h1>
      <h3 className=' text-center'>{fullDate}</h3>

      
      <div className='vh-80  text-center'>
        <ProjectList/>
      </div>
    </Container>
  );
}

export default ManagerDashboardHome;
