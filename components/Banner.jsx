"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "./nevbaar/SearchIcon";
import { Central } from "@/context/ContextApi";
import { searchingImageHendler } from "@/fetch/fetch";
import axios from "axios";
import { toast } from "react-toastify";

const Banner = () => {
  const router = useRouter();
  const [searchingImage, setSearchingImage] = useState("");
  const [searchData, setSearchData, isLoading, setisLoading] =
    useContext(Central);
  // const handleSubmit = async(e)=>{
  //   e.preventDefault()
  //   await setSearchData(searchingImageHendler(searchingImage))

  //   router.push(`/search`)
  //   setSearchingImage('')

  // }
  const searchingImageHendler = async (e) => {
    e.preventDefault();
    if (searchingImage.length < 1 || searchingImage.trim() === "") {
      toast.error("Please enter valid input");
    } else {
      try {
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=${searchingImage}`
        );
        setSearchData(data.results);
        setSearchingImage("");
        router.push("/search");
      } catch (error) {
        toast.error(error.message);
        // console.log(error);
      }
    }
  };

  return (
    <>
      <div className="relative w-[100vw] h-[85vh] bg-pink-400 mt-16 ">
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="https://images.unsplash.com/photo-1691679829047-aa2674339070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt=""
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-bold text-white">Unsplash</h1>
          <p className="text-2xl font-semibold text-white">
            The internet’s source of freely-usable images. Powered by creators
            everywhere.
          </p>
          <div className="mt-10 bg-white flex items-center justify-between w-full px-5  rounded-xl">
            <SearchIcon />
            <form className="w-full" onSubmit={searchingImageHendler}>
              <input
                type="text"
                name="search"
                onChange={(e) => setSearchingImage(e.target.value)}
                placeholder="Search free high-resolution photos"
                className=" relative w-full h-fit flex gap-4 font-normal px-5 py-5 outline-none border-none text-xl "
                value={searchingImage}
              />
            </form>
            {/* {searchingImage && <Spinner color="primary" size="sm" /> } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
