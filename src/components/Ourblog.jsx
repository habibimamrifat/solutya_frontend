import React from "react";
import blog4 from "./Asset/img/5.png";
import blog3 from "./Asset/img/10.png";
import blog2 from "./Asset/img/10.png";
import blog1 from "./Asset/img/Rectangle 336.png";

const Ourblog = () => {
  return (
    <div className="bg-[#FCEFE4]">
      <div className="pt-[67px]">
      <h4 className="text-[24px] font-medium text-[#B68053] text-center">
        Our Blog
      </h4>
      <h2 className="text-[42px] font-semibold text-center">Recent Article</h2>
      </div>

      <div className="mx-16 pb-[85px] md:grid grid-cols-4 gap-4">

        <div className="card card-compact bg-base-100  shadow-none">
          <figure>
            <img className=""
              src={blog1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-[#FCEFE4] ">
            <div className="flex justify-between mb-3">
                <h6 className="text-[14px] font-light">Oct 15,2023</h6>
                <h6 className="text-[14px] font-light">By : Architecture</h6>
            </div>
            <p className="text-[19px] font-semibold mb-5">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="border border-red-500 text-[16px] font-semibold hover:bg-[#ECA76E] hover:text-white p-2 rounded-md">VIEW ALL</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-none">
          <figure>
            <img
              src={blog2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-[#FCEFE4] ">
            <div className="flex justify-between mb-3">
                <h6 className="text-[14px] font-light">Oct 15,2023</h6>
                <h6 className="text-[14px] font-light">By : Architecture</h6>
            </div>
            <p className="text-[19px] font-semibold mb-5">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="border border-red-500 text-[16px] font-semibold hover:bg-[#ECA76E] hover:text-white p-2 rounded-md">VIEW ALL</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-none">
          <figure>
            <img
              src={blog3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-[#FCEFE4] ">
            <div className="flex justify-between mb-3">
                <h6 className="text-[14px] font-light">Oct 15,2023</h6>
                <h6 className="text-[14px] font-light">By : Architecture</h6>
            </div>
            <p className="text-[19px] font-semibold mb-5">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="border border-red-500 text-[16px] font-semibold hover:bg-[#ECA76E] hover:text-white p-2 rounded-md">VIEW ALL</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-none">
          <figure>
            <img
              src={blog4}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-[#FCEFE4] ">
            <div className="flex justify-between mb-3">
                <h6 className="text-[14px] font-light">Oct 15,2023</h6>
                <h6 className="text-[14px] font-light">By : Architecture</h6>
            </div>
            <p className="text-[19px] font-semibold mb-5">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="border border-red-500 text-[16px] font-semibold hover:bg-[#ECA76E] hover:text-white p-2 rounded-md">VIEW ALL</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Ourblog;
