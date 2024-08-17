import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get("https://server-dcc.onrender.com/contact/getContact")
      .then((res) => {
        if (res.status === 200) {
          setLeads(res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching leads:", error);
      });
  }, []);

  return (
    <div className="container mt-4 bg-white mb-4 pl-3 pr-3 rounded ">
      <h3 className="mb-4 text-center">Leads Details</h3>
      <ol className="list-group list-group-numbered ">
        {[...leads].reverse().map((lead) => (
          <li className="list-group-item   ml-10 " key={lead._id}>
            <h3 className="mb-1">Name:-{lead.name}</h3>
            <h5 className="mb-1">Number:- {lead.number}, Email:- {lead.email}</h5>
            <p className="mb-1">Company Name:- {lead.cname} ,Subject:- {lead.subject}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leads;
