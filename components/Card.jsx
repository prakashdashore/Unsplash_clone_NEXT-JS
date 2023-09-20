"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const Card = ({ items }) => {
  const [over, setOver] = useState(false);
  return (
    <>
      <Link href={`/details/${items.id}`}>
        <div
          onMouseEnter={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
          className=" relative max-w-[400px] break-inside-avoid mt-5 cursor-pointer  shadow-xl mx-auto bg-green-300 "
        >
          {over && over === true ? (
            <div
              className="absolute bg-black bg-opacity-20 text-white font-light
          transition-all duration-100 w-full h-full
           flex flex-col justify-between"
            >
              <div className="w-full flex items-end justify-end p-2">
                <div className="px-2 py-1 rounded-sm bg-slate-200 hover:bg-white flex items-center justify-center text-slate-600 font-bold text-xl">
                  <BsFillBalloonHeartFill />
                </div>
              </div>
              <div className="w-full flex items-center justify-between p-2 ">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-[50px] h-[50px] rounded-full "
                    src={items?.user?.profile_image?.large}
                    alt=""
                  />
                  <h1 className="font-semibold">{items?.user?.name}</h1>
                </div>
                <div className="px-2 py-1 rounded-sm bg-slate-200 hover:bg-white flex items-center justify-center text-slate-600 font-bold text-xl">
                  <AiOutlineArrowDown />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <Image
            loading="lazy"
            src={items?.urls?.regular}
            alt="BY: prashhhh"
            width="0"
            height="0"
            sizes="10vw"
            className="w-[400px] h-auto"
          />
        </div>
      </Link>
    </>
  );
};

export default Card;
