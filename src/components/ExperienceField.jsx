import React from "react";
import img8 from "./Asset/img/Rectangle 450.png";
import img9 from "./Asset/img/Rectangle 453.png";
import img10 from "./Asset/img/Rectangle 452.png";


const ExperienceField = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 py-[110px] px-16">
      <div className=" grid grid-cols-2 gap-2">
        <div className="grid gap-2">
            <div><img src={img8} alt="" /></div>
            <div><img src={img9} alt="" /></div>
        </div>
        <div>
            <img src={img10} alt="" />
        </div>
      </div>

     
      <div>
        <p>About Us</p>
        <h1 className="text-[44px] font-semibold">We’re Experienced in This Field </h1>
        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which </p>
        <div className="grid grid-cols-3">
            <div><p className="text-[#ECA76E] text-[28px]">13+</p>
            <p className="text-[15px] font-semibold">years of expreance</p></div>
            <div><p className="text-[#ECA76E] text-[28px]">267+</p>
            <p className="text-[15px] font-semibold">Project Completed</p></div>
            <div><p className="text-[#ECA76E] text-[28px]">40+</p>
            <p className="text-[15px] font-semibold">Best Partners</p></div>

        </div>
        <div className="mt-12 ">
        <button className="px-5 py-3 rounded-[6px] bg-[#ECA76E] text-white">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceField;
