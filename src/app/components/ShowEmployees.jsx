'use client'

import { useSelector } from "react-redux";

const ShowEmployees = () => {
    const employeeData=useSelector((data)=> data.employeeData.employees);
    // console.log("employeeData",employeeData)
  return (
    <div>
      <h2 >Show Employees</h2>
      {
        employeeData.map((item) => (
          <h4 key={item.id}>
          <span>{item.name}</span>
          <span>{item.id}</span>
          </h4>
        ))
      }
    </div>
  );
}

export default ShowEmployees;