import React from "react";
import btn2 from "./Asset/img/Button.png";
import btic1 from "./Asset/img/Vector (1).png";
import btic2 from "./Asset/img/Group 18408 (1).png";
import btic3 from "./Asset/img/Group 18417.png";
import btic4 from "./Asset/img/couch.png";
import btic5 from "./Asset/img/Group 18402.png";

const Services = () => {
  return (
    <div className="bg-[#D9D9D9D4]  ">
      <div className="md:grid grid-cols-3 px-10 py-20 gap-6 mt-[80px] mb-[111px]">
      <div>
        <h1 className="text-[40px] font-semibold">Services <br /> Provided By Us</h1>
        <p className="text-[18px] font-normal">There are many variations of passages of Lorem Ipsum </p>
        <button className="bg-[#ECA76E] text-white mt-8 py-3 px-6">Learn More</button>
      </div>

      <div className=" bg-white text-center hover:bg-[#111111BA] hover:text-white">
        <div className="flex justify-center pt-[35px] pb-3">
            <img  src={btic1} alt="" />
        .</div>
        
        <h5 className="font-semibold  text-[28px]">Architecture</h5>
        <p className="px-[42px] font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so</p>
        <button className="mb-6 mt-4 text-lg font-medium">
          <a className="text-[#ECA76E] px-11 py-2" href="/"><img src={btn2} alt="" /></a>
          </button>
      </div>
      <div className=" bg-white text-center hover:bg-[#111111BA] hover:text-white">
        <div className="flex justify-center pt-[35px] pb-3">
        <img src={btic2} alt="" />
        .</div>
        
        <h5 className="font-semibold  text-[28px]">Architecture</h5>
        <p className="px-[42px] font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so</p>
        <button className="mb-6 mt-4 text-lg font-medium">
          <a className="text-[#ECA76E] px-11 py-2" href="/"><img src={btn2} alt="" /></a>
          </button>
      </div>
       
      <div className=" bg-white text-center hover:bg-[#111111BA] hover:text-white">
        <div className="flex justify-center pt-[35px] pb-3">
        <img src={btic3} alt="" />
        .</div>
        
        <h5 className="font-semibold  text-[28px]">Architecture</h5>
        <p className="px-[42px] font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so</p>
        <button className="mb-6 mt-4 text-lg font-medium">
          <a className="text-[#ECA76E] px-11 py-2" href="/"><img src={btn2} alt="" /></a>
          </button>
      </div>
      <div className=" bg-white text-center hover:bg-[#111111BA] hover:text-white">
        <div className="flex justify-center pt-[35px] pb-3">
        <img src={btic4} alt="" />
        .</div>
        
        <h5 className="font-semibold  text-[28px]">Architecture</h5>
        <p className="px-[42px] font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so</p>
        <button className="mb-6 mt-4 text-lg font-medium">
          <a className="text-[#ECA76E] px-11 py-2" href="/"><img src={btn2} alt="" /></a>
          </button>
      </div>
      <div className=" bg-white text-center hover:bg-[#111111BA] hover:text-white">
        <div className="flex justify-center pt-[35px] pb-3">
        <img src={btic5} alt="" />
        .</div>
        
        <h5 className="font-semibold  text-[28px]">Architecture</h5>
        <p className="px-[42px] font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in so</p>
        <button className="mb-6 mt-4 text-lg font-medium">
          <a className="text-[#ECA76E] px-11 py-2" href="/"><img src={btn2} alt="" /></a>
          </button>
      </div>
      </div>
     
    </div>
  );
};

export default Services;
