import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white  py-10 px-20 ">
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5  mb-10 container mx-auto">
        <div>
          <h1 className="font-semibold text-[14px] mb-2">Plan Mark</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words 0 Latin
          </p>
          <p className="py-4 font-medium">Follow Us :</p>
          <div className="flex gap-4">
            <div className="bg-white rounded-full text-black p-1 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white rounded-full text-black p-1 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-white rounded-full text-black p-1 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-white rounded-full text-black p-1 cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="flex  lg:justify-center lg:border-r-2">
          <div>
            <h1 className="font-semibold text-[20px] mb-4">Categories</h1>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </div>
        </div>

        <div className="flex  lg:justify-center  lg:border-r-2">
          <div>
            <h1 className="font-semibold text-[20px] mb-4">Our Services</h1>
            <li>Interior Design</li>
            <li>Home Remodeling</li>
            <li>Architecture design</li>
            <li>Office Renovation</li>
            <li>Perfect Planning</li>
          </div>
        </div>

        <div className="lg:ml-10">
          <div className="space-y-2">
            <h1 className="font-semibold text-[20px] mb-4">
              Offce Information
            </h1>
            <div className="flex gap-3">
              <div className="mt-1 text-white font-semibold text-xl">
                <FaLocationDot />
              </div>
              <p>6/5,South Rajarbag,Bashabo, Sabujbag, Dhaka1214 Bangladesh</p>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 text-white font-semibold text-xl">
                <MdLocalPhone />
              </div>
              <p>+8801324738600</p>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 text-white font-semibold text-xl">
                <MdEmail />
              </div>
              <p>Helle@Untitedhaven.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[12px] font-semibold text-center border-t-2 w-full">
        <p className="mt-5">
          ©Copyright United Haven 2023. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;