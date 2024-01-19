import React from "react";
import printer from './Asset/img/printer-icon-front-side-removebg-preview 1.png';
import club from "./Asset/img/home-sign-icon-front-side-white-background-removebg-preview 1.png";
import img2 from "./Asset/img/e702822a89bdb4c1d38f6fd4fe343cd2-removebg-preview 1.png";
import img3 from "./Asset/img/home-sign-icon-front-side-white-background-removebg-preview 1.png";
import img4 from "./Asset/img/luxury-golden-house-3d-real-estate-rendering-removebg-preview 1.png";

const Clients = () => {
  return (
    <div>
      <h1 className="text-[38px] font-semibold text-center">
        WE WORK WITH TOP <span className="text-[#82631C]">CLIENTS</span>
      </h1>
      <div>
        <h6 className="text-center">Partners</h6>
       
          <div className=" pb-14 md:flex justify-between">
            <div className="flex gap-1 items-center p-5">
              <img
                className="h-[54px] w-[50px]"
                src={printer}
                alt=""
              />
              <h6 className="text-[24px] font-medium">EBOX</h6>
            </div>
            <div className="flex gap-1 items-center p-5">
              <img
                className="h-[54px] w-[50px]"
                src={club}
                alt=""
              />
              <h6 className="text-[24px] font-medium">House Green</h6>
            </div>
            <div className="">
              <img
                className="h-[110x] w-[79px]"
                src={img2}
                alt=""
              />
              {/* <h6 className='text-[24px] font-medium'>EBOX</h6> */}
            </div>
            <div className="flex gap-1 items-center p-5">
              <img
                className="h-[54px] w-[50px]"
                src={img3}
                alt=""
              />
              <h6 className="text-[24px] font-medium">House logo</h6>
            </div>
            <div className="flex gap-1 items-center p-5">
              <img
                className="h-[54px] w-[50px]"
                src={img4}
                alt=""
              />
              <h6 className="text-[24px] font-medium">Room Decor</h6>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Clients;
