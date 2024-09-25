'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../reduxToolkit/slice';

const AddEmployees = () => {
  const [empName, setEmpName] = useState('');
  const dispatch = useDispatch();
  const dataDispatch = () => {
    // console.log(empName)
    dispatch(addEmployee(empName))
    setEmpName('');
  }
  return (
    <div >
      <h2 >Add Employees</h2>
      <input value={empName} onChange={(e) => setEmpName(e.target.value)} type="text" placeholder="Enter Employee Data" />
      <button onClick={dataDispatch}>Add</button>
    </div>
  );
}

export default AddEmployees;