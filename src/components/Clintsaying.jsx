import React from 'react'
import button2 from "./Asset/img/Group 34124.png";
import img5 from "./Asset/img/Health-5 1.png";
import img6 from "./Asset/img/Health-5 1 (1).png";
import img7 from "./Asset/img/Health-5 1 (2).png";

const Clintsaying = () => {
  return (
    <div className="mx-[69px] mt-[130px] mb-[152px]">

        <h1 className="text-center text-[40px] font-bold mb-[51px]">
        <span className='text-[#ECA76E]'>What Clients</span> Are Saying
        </h1>


       

      

      <div className="md:grid grid-cols-3 gap-8 ">
        <div className=" bg-white text-center shadow-lg shadow-slate-400  border-2 border-slate-200 ">
          <div className='flex justify-center mt-2'>
          <div className="flex items-center justify-center pt-[35px] pb-3 rounded-full overflow-hidden border-2 h-[99px] w-[99px]">
            <img
              className="  object-fill"
              src={img5}
              alt=""
            />
            
          </div>
          </div>

          <h5 className="font-semibold  text-[20px]">James Pattinson</h5>
          <p className="px-[16px] font-normal">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          </p>
          <button className="mb-1 mt-4 text-lg font-medium">
            <a className="text-[#ECA76E] px-[16px] py-2" href="/">
              <img src={button2} alt="" />
            </a>
          </button>
        </div>
        <div className=" bg-white text-center shadow-lg shadow-slate-400  border-2 border-slate-200 ">
          <div className='flex justify-center mt-2'>
          <div className="flex items-center justify-center pt-[35px] pb-3 rounded-full overflow-hidden border-2 h-[99px] w-[99px]">
            <img
              className="  object-fill"
              src={img6}
              alt=""
            />
            
          </div>
          </div>

          <h5 className="font-semibold  text-[20px]">James Pattinson</h5>
          <p className="px-[16px] font-normal">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          </p>
          <button className="mb-1 mt-4 text-lg font-medium">
            <a className="text-[#ECA76E] px-[16px] py-2" href="/">
              <img src={button2} alt="" />
            </a>
          </button>
        </div>
        <div className=" bg-white text-center shadow-lg shadow-slate-400  border-2 border-slate-200 ">
          <div className='flex justify-center mt-2'>
          <div className="flex items-center justify-center pt-[35px] pb-3 rounded-full overflow-hidden border-2 h-[99px] w-[99px]">
            <img
              className="  object-fill"
              src={img7}
              alt=""
            />
            
          </div>
          </div>

          <h5 className="font-semibold  text-[20px]">James Pattinson</h5>
          <p className="px-[16px] font-normal">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          </p>
          <button className="mb-1 mt-4 text-lg font-medium">
            <a className="text-[#ECA76E] px-[16px] py-2" href="/">
              <img src={button2} alt="" />
            </a>
          </button>
        </div>
      </div>

       

      

    </div>
  )
}

export default Clintsaying;
