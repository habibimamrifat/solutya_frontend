import React from "react";
import img10 from "./Asset/img/1.png";
import img11 from "./Asset/img/Rectangle 248.png";
import img12 from "./Asset/img/Rectangle 249.png";
import img13 from "./Asset/img/Rectangle 188.png";
import img14 from "./Asset/img/4057650.png";

const FeaturedProject = () => {
  return (
    <div>
      <h1 className="text-center text-[44px] font-semibold mb-4">
        Our Featured Project
      </h1>
      <div>
        <div className="md:flex gap-3 mb-2 items-center">
          <div className="rounded-3xl  overflow-hidden">
            <img className="" src={img10} alt="" />
          </div>
          <div>
            <div className="rounded-md mb-2">
              <img src={img11} alt="" />
            </div>
            <div className="rounded-md">
              <img src={img12} alt="" />
            </div>
          </div>
        </div>

        <div className="md:flex gap-3 ">
        <div className="rounded-md overflow-hidden">
          <img src={img13} alt="" />
        </div>
        <div className="rounded-md overflow-hidden">
          <img src={img14} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
