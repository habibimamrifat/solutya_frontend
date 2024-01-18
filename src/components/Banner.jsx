import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#000000BA]  px-16 py-20">
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

          <div>
            <button className="px-5 py-3 border-2">Explore Now</button>
            <button className="px-5 py-3">Watch Video</button>
          </div>
        </div>

        <div>
            <img src="../../public/img/Group 18552.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-5 py-3 border-2">Explore Now</button>
        <button className="px-5 py-3">Watch Video</button>
      </div>
    </div>
  );
};

export default Banner;
