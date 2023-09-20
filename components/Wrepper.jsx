"use client";

import ContextApi from "@/context/ContextApi";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrepper = ({ children }) => {
  return (
    <>
      <ContextApi>
        <ToastContainer 
        autoClose={2000}
        />
        {children}
      </ContextApi>
    </>
  );
};

export default Wrepper;
