import React from "react";
import Bannerimg from "./Asset/img/Group 18552.png";
import arrow from "./Asset/img/Frame.png";
import arrow1 from "./Asset/img/Frame (1).png";
import { FaRegCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[#000000BA]/60  px-16 py-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 text-white   gap-16">
        <div>
          <h1 className="text-[59px] font-bold">
            Architecture Design Dream Buildings
          </h1>
          <p className="pt-[22px] py-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which
          </p>

          <div className="flex gap-4">
            <button className="px-5 py-3 bg-[#ECA76E]">Explore Now</button>

            <div className="flex  items-center">
              <div>
              <FaRegCirclePlay />
              </div>
              <button className="px-2 py-3">Watch Video</button>
            </div>
          </div>
        </div>

        <div>
          <img src={Bannerimg} alt="" />
          <img src="./Asset/img" alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button className="px-5 py-3  bg-[#DCBCA1]">
          <img src={arrow1} alt="" />
        </button>
        <button className="px-5 py-3 bg-[#DCBCA1]">
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
