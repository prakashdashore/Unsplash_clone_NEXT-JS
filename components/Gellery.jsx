"use client";

import React, { useContext, useEffect, useState } from "react";
import {  toast } from 'react-toastify';
import axios from "axios";
import Card from "./Card";
import Sppiner from "./Spinner";
import { Spinner } from "@nextui-org/react";

const Gellery = () => {
  const [page, setPage] = useState(1)
    const [randomImages, setRandomImages] = useState([]);
    // const [isloading, setisloading] = useState(false)
    console.log(randomImages)
 

  const infiniteScroll =async ()=>{
    try {

      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){

        setPage((prev)=> prev + 1)
    
        console.log("bottom reached")
        console.log(">>>>>>>>>>>>"   ,page)
      }
      
    } catch (error) {
        toast(error.message)
        console.log(error);

      
    }

  }

  useEffect(()=>{
    window.addEventListener('scroll', infiniteScroll)
    
    return ()=>{
      window.removeEventListener('scroll',infiniteScroll)
    }

  },[])
  const getRendomImages = async () => {
    try {
         const {data} = await axios.get(`https://api.unsplash.com/photos?client_id=Xo1JuuXtZeFM3ke9eGQ1EoI7AV8PwnNUVE_WaVPmyqI&page=${page}`)
        
         setRandomImages((prev)=> [...prev ,...data])
      

      } catch (error) {
        toast(error.message)
      }
  }

  useEffect(() => { 

    getRendomImages.length===0 ? getRendomImages() : ''
  
    
  },[page]);



  return (
      <>
      <div className="relative w-[100vw] min-h-[100vh]">
        <div id="gellary" className=" overflow-x-hidden relative bg-white sm:w-[80vw]   min-h-[100vh] mx-auto sm:mt-10 sm:columns-3">
            
          {randomImages.length > 0 ? (
            randomImages.map((items , id ) => {
              return <Card key={items.id} items={items} id={id}/>
            })


            
          ) : (
             <Spinner  color="primary" size='lg' /> 
            )}
         

        </div>

      </div>

    </>

  );
};


export default Gellery;

