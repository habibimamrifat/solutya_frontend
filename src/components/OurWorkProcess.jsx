import React from "react";

const OurWorkProcess = () => {
  return (
    <div className="mx-[69px] mt-[130px] mb-[152px]">

        <h1 className="text-left text-[40px] font-bold mb-[51px]">
        Our Work Process
        </h1>

      <div className="md:grid grid-cols-3 gap-8 ">
        
        <div className=" bg-white text-center shadow-lg shadow-slate-400  border-2 border-slate-200 ">
          <div className="flex justify-center pt-[35px] pb-3">
            <img
              className="w-[59px] h-[61px]"
              src="../../public/img/Group 18402.png"
              alt=""
            />
            .
          </div>

          <h5 className="font-semibold  text-[26px]">Strategy and Planning</h5>
          <p className="px-[18px] font-medium">
          The lower-numbered purposes are better understood and practiced
          </p>
          <button className="mb-1 mt-4 text-lg font-medium">
            <a className="text-[#ECA76E] px-[16px] py-2" href="/">
              <img src="../../public/img/Button.png" alt="" />
            </a>
          </button>
        </div>

        <div className=" bg-white text-center shadow-lg shadow-slate-400  border-2 border-slate-200">
          <div className="flex justify-center pt-[26px] pb-3">
            <img
              className="w-[59px] h-[61px]"
              src="../../public/img/Group 18407.png"
              alt=""
            />
            .
          </div>

          <h5 className="font-semibold  text-[28px]">Architecture</h5>
          <p className="px-[18px] font-medium">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in so
          </p>
          <button className="mb-1 mt-4 text-lg font-medium">
            <a className="text-[#ECA76E] px-11 py-2" href="/">
              <img src="../../public/img/Button.png" alt="" />
            </a>
          </button>
        </div>

        <div className=" bg-white text-center shadow-lg shadow-slate-400  border-2 border-slate-200">
          <div className="flex justify-center pt-[26px] pb-3">
            <img
              className="w-[59px] h-[61px]"
              src="../../public/img/Group 18408 (1).png"
              alt=""
            />
            .
          </div>

          <h5 className="font-semibold  text-[28px]">Architecture</h5>
          <p className="px-[18px] font-medium">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in so
          </p>
          <button className="mb-1 mt-4 text-lg font-medium">
            <a className="text-[#ECA76E] px-11 py-2" href="/">
              <img src="../../public/img/Button.png" alt="" />
            </a>
          </button>
        </div>

      </div>
    </div>
  );
};

export default OurWorkProcess;
