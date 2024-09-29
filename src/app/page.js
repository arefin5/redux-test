"use client"
import AddEmployees from "./components/AddEmployees";
import ShowEmployees from "./components/ShowEmployees";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiData } from "./reduxToolkit/ListSlice";


export default function Home() {
  const dispatch = useDispatch();

  const { lists, isLoading, error } = useSelector((state) => state.listSlices);

 
  useEffect(() => {
    dispatch(apiData());
  }, []);
  console.log(lists)
  return (
    <>
      
    </>
  );
}