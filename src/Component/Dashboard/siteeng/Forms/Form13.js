import React, { useState } from "react";

function Form13() {
  const [data, setData] = useState([
    { SrNo: 1, QQ: "", mm	: "", B:"",B: "", N: "", B:"" },  
    { SrNo: 2, mm: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 3, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 4, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 5, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 6, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 7, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 8, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 9, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 10, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 11, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 12, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 13, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 14, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 15, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 16, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 17, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 18, name: "", age: "", year:"",name: "", age: "", year:"" },
    { SrNo: 19, name: "", age: "", year:"",name: "", age: "", year:"" },
  ]);

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  return (
    <div className="container mx-auto">
       
       <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

       <p className=" flex justify-center">SCHEDULE FORM</p>
        
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">SrNo</th>
            <th className="px-4 py-2">QQ</th>
            <th className="px-4 py-2">mm</th>
            <th className="px-4 py-2">B</th>
            <th className="px-4 py-2">B</th>
            <th className="px-4 py-2">N</th>
            <th className="px-4 py-2">B</th>
            <th className="px-4 py-2">Party 
Code </th>
            <th className="px-4 py-2">M</th>
            <th className="px-4 py-2">Total 
cube </th>
           <th className="px-4 py-2">SET 1</th>
            <th className="px-4 py-2">7 Days</th>
            <th className="px-4 py-2">SET 2</th>         
            <th className="px-4 py-2">14 Days</th>
            <th className="px-4 py-2">SET 3</th>
          <th className="px-4 py-2">28 Days</th>
          <th className="px-4 py-2">Party Name</th>
          </tr>
          
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.SrNo}>
              <td className="border px-4 py-2">{row.SrNo}</td>
              <td className="border px-4 py-2">
                <input
                       
                  
                  className="w-full px-2 py-1"
                />
              </td>
              
              <td className="border px-4 py-2">
                <input
                      
                   className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"   
                  onChange={(e) => handleChange(index, "year", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                       
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              
              <td className="border px-4 py-2">
                <input
                      
                   className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                    
                  onChange={(e) => handleChange(index, "year", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                       
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              
              <td className="border px-4 py-2">
                <input
                      
                   className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                    
                  onChange={(e) => handleChange(index, "year", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                       
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              
              <td className="border px-4 py-2">
                <input
                      
                   className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                    
                  onChange={(e) => handleChange(index, "year", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                       
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
              
              <td className="border px-4 py-2">
                <input
                      
                   className="w-full px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                    
                  onChange={(e) => handleChange(index, "year", e.target.value)}
                  className="w-full px-2 py-1"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
      <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
      <div className='flex justify-center'>
      <a href="#">
      <button variant="text" className= "flex bg-gray-700 hover:bg-orange-400 text-white p-3">submit</button>
      
      </a></div>
      
    </div>
    
  );
}

export default Form13;
