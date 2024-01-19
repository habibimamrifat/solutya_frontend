import React from "react";
import icon1 from "./Asset/img/Group 18221.png";
import icon2 from "./Asset/img/Group 18222.png"
import icon3 from "./Asset/img/Group.png";
import icon4 from "./Asset/img/Group 18223.png";
import icon5 from "./Asset/img/Group 18224.png";
import img15 from "./Asset/img/Rectangle 227 (1).png"
import img16 from "./Asset/img/Rectangle 228 (1).png"
import img17 from "./Asset/img/Rectangle 230 (1).png";
import img18 from "./Asset/img/Rectangle 231 (1).png";

const OurTeam = () => {
  return (
    <div>
      <div className="pt-[67px]">
        <h4 className="text-[24px] font-medium text-[#B68053] text-center">
          Our team
        </h4>
        <h2 className="text-[42px] font-semibold text-center">
          Meet Our Expart
        </h2>
      </div>

      <div className="mx-16 pb-[40px] md:grid grid-cols-4 gap-4">

        <div className="card card-compact bg-base-100 shadow-xl shadow-red-500  ">
          <figure>
            <img
              className=""
              src={img15}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center pt-[27px] ">
            <p className="text-[24px] font-semibold mb-5">Ronald Richards</p>
            <p lassName="text-[16px] font-semibold">web Developer</p>
          </div>
          <div className="absolute bg-yellow-100/30 h-full w-full opacity-0 hover:opacity-100">
            <div className="flex justify-around relative top-72">
              <img
                className="w-[36px] h-[36px]"
                src={icon1}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon2}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon3}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon4}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon5}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl shadow-red-500  ">
          <figure>
            <img
              className=""
              src={img16}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center pt-[27px] ">
            <p className="text-[24px] font-semibold mb-5">Ronald Richards</p>
            <p lassName="text-[16px] font-semibold">web Developer</p>
          </div>
          <div className="absolute bg-yellow-100/30 h-full w-full opacity-0 hover:opacity-100">
            <div className="flex justify-around relative top-72">
              <img
                className="w-[36px] h-[36px]"
                src={icon1}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon2}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon3}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon4}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon5}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl shadow-red-500  ">
          <figure>
            <img
              className=""
              src={img17}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center pt-[27px] ">
            <p className="text-[24px] font-semibold mb-5">Ronald Richards</p>
            <p lassName="text-[16px] font-semibold">web Developer</p>
          </div>
          <div className="absolute bg-yellow-100/30 h-full w-full opacity-0 hover:opacity-100">
            <div className="flex justify-around relative top-72">
              <img
                className="w-[36px] h-[36px]"
                src={icon1}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon2}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon3}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon4}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon5}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl shadow-red-500  ">
          <figure>
            <img
              className=""
              src={img18}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center pt-[27px] ">
            <p className="text-[24px] font-semibold mb-5">Ronald Richards</p>
            <p lassName="text-[16px] font-semibold">web Developer</p>
          </div>
          <div className="absolute bg-yellow-100/30 h-full w-full opacity-0 hover:opacity-100">
            <div className="flex justify-around relative top-72">
              <img
                className="w-[36px] h-[36px]"
                src={icon1}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon2}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon3}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon4}
                alt=""
              />
              <img
                className="w-[36px] h-[36px]"
                src={icon5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
      <button className="border border-red-500 text-[16px] font-semibold bg-[#ECA76E] text-white py-[12px] px-[29px] rounded-md">
        VIEW ALL
      </button>
      </div>
    </div>
  );
};

export default OurTeam;
