
"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addStudents } from '../reduxToolkit/mySlice';
import { apiData } from "../reduxToolkit/ListSlice";


const Page = () => {

  const [std, setStd] = useState('');
  const dispatch = useDispatch();
  const stdData = useSelector((data) => data.studentData.students);


  const list = useSelector((state) => state.listSlices)
  // const isLoading = useSelector((state) => state)
  // const error = useSelector((state) => state)

  useEffect(() => {
    dispatch(apiData());
  }, []);
  console.log(list)

  return (
    <>
      <h2>Register Students</h2>
      
     
    </>
  );
}

export default Page;