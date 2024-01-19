import React from "react";

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
                src="..'/../public/img/printer-icon-front-side-removebg-preview 1.png"
                alt=""
              />
              <h6 className="text-[24px] font-medium">EBOX</h6>
            </div>
            <div className="flex gap-1 items-center p-5">
              <img
                className="h-[54px] w-[50px]"
                src="../../public/img/home-sign-icon-front-side-white-background-removebg-preview 1.png"
                alt=""
              />
              <h6 className="text-[24px] font-medium">House Green</h6>
            </div>
            <div className="">
              <img
                className="h-[110x] w-[79px]"
                src="../../public/img/e702822a89bdb4c1d38f6fd4fe343cd2-removebg-preview 1.png"
                alt=""
              />
              {/* <h6 className='text-[24px] font-medium'>EBOX</h6> */}
            </div>
            <div className="flex gap-1 items-center p-5">
              <img
                className="h-[54px] w-[50px]"
                src="../../public/img/home-sign-icon-front-side-white-background-removebg-preview 1.png"
                alt=""
              />
              <h6 className="text-[24px] font-medium">House logo</h6>
            </div>
            <div className="flex gap-1 items-center p-5">
              <img
                className="h-[54px] w-[50px]"
                src="../../public/img/luxury-golden-house-3d-real-estate-rendering-removebg-preview 1.png"
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
