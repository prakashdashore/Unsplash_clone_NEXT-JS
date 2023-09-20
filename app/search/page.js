"use client";

import Card from "@/components/Card";
import Sppiner from "@/components/Spinner";
import Nev from "@/components/nevbaar/Nev";
import { Central } from "@/context/ContextApi";
import React, { useContext } from "react";

const page = () => {
  const [searchData, setSearchData, isLoading, setisLoading] =
    useContext(Central);

    console.log("searchData" , searchData)

  return (
    <>
      <Nev/>
      <div className=" mt-10  w-[100vw] min-h-[100vh] mt-16">
        <div className=" relative my-10 w-[100vw] min-h-[100vh]">
          {/* {isLoading && <Sppiner />} */}
          {/* {isLoading && setisLoading(false)} */}
          <div
            id="gellary"
            className=" overflow-x-hidden relative bg-white sm:w-[80vw]   min-h-[100vh] mx-auto sm:mt-10 sm:columns-3"
          >
            {searchData.length > 2
              ? searchData.map((items) => {
                  return <Card key={items.id} items={items} />;
                })
              : 'No Data Found'}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
