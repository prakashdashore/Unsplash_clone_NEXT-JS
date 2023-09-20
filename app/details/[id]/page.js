"use client";

import Banner from "@/components/Banner";
import Gellery from "@/components/Gellery";
import Nev from "@/components/nevbaar/Nev";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  AiOutlineArrowDown,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const page = ({ params }) => {

  const [detailedImages , setDetailedImages] = useState(null);
  const getDetailesOfImage = async()=>{

    try {
      const {data} = await axios.get(`https://api.unsplash.com/photos/${params.id}?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58`);
      setDetailedImages(data);

    } catch (error) {
      toast(error.massage)      
    }

  }
  useEffect(()=>{
    getDetailesOfImage()
  },[])
  
  return (
    <>
      <div className="w-[100vw] min-h-[50vh] mt-5 bg-black ">
        <Nev/>
        <div className=" relative rounded-md p-5 mt-16 mx-auto w-[80vw] min-h-[40vh] bg-white">
          <div className="w-full flex items-center justify-between ">
            <div className="flex items-center gap-2 md:gap-5 lg:gap-5">
              <div>
                <Link href='/'>
                <RxCross1 className="text-2xl cursor-pointer" />
                </Link>
              </div>
              <img
                className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w[50px] lg:h-[50px]  rounded-full  "
                src={detailedImages?.user?.profile_image?.large}
                alt=""
              />
              <div>{detailedImages?.user.name}</div>
            </div>
            <div className="flex items-center gap-5">

              <div className="border-gray-400 px-5 py-5 cursor-pointer hidden lg:inline-block md:inline-block">
                <AiOutlineHeart className="text-2xl" />
              </div>

              <div>
                <AiOutlinePlusSquare className="hidden lg:inline-block md:inline-block  text-2xl" />
              </div>
              <div>
                <a href={`${detailedImages?.links.download}`} target="_blank" >
                <AiOutlineArrowDown className="text-2xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          <div className=" p-10 w-full h-full flex items-center justify-center">
            <img
              className="w-auto h-auto md:w[100%] object-cover"
              src={detailedImages?.urls.raw}
              alt=""
            />
          </div>
        </div>


      </div>
        <div className="text-3xl px-28 py-5 font-semibold  ">
            Here are some randoms image , hope you like it !!
        </div>
        <Gellery/>
    </>
  );
};

export default page;
