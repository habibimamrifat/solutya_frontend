import React from "react";

const FeaturedProject = () => {
  return (
    <div>
      <h1 className="text-center text-[44px] font-semibold mb-4">
        Our Featured Project
      </h1>
      <div>
        <div className="md:flex gap-3 mb-2 items-center">
          <div className="rounded-3xl  overflow-hidden">
            <img className="" src="../../public/img/1.png" alt="" />
          </div>
          <div>
            <div className="rounded-md mb-2">
              <img src="../../public/img/Rectangle 248.png" alt="" />
            </div>
            <div className="rounded-md">
              <img src="../../public/img/Rectangle 249.png" alt="" />
            </div>
          </div>
        </div>

        <div className="md:flex gap-3 ">
        <div className="rounded-md overflow-hidden">
          <img src="../../public/img/Rectangle 188.png" alt="" />
        </div>
        <div className="rounded-md overflow-hidden">
          <img src="../../public/img/4057650.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
