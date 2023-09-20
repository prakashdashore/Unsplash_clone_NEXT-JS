"use client"
import React, { createContext, useState } from 'react'
export const Central =  createContext(null)

const ContextApi = ({children}) => {
    const [searchData , setSearchData] = useState([])
    const [isLoading, setisLoading] = useState(false)

  return (<> 
    <Central.Provider value={[searchData , setSearchData ,isLoading, setisLoading]}>
        {children}
    </Central.Provider>
  </>)
}

export default ContextApi
