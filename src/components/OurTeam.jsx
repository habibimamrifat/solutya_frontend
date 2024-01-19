import React from 'react'

const OurTeam = () => {
  return (
    <div>
        <div className="pt-[67px]">
      <h4 className="text-[24px] font-medium text-[#B68053] text-center">
        Our team
      </h4>
      <h2 className="text-[42px] font-semibold text-center">Meet Our Expart</h2>
      </div>

      <div className="mx-16 pb-[85px] md:grid grid-cols-4 gap-4">
      
      <div className="card card-compact bg-base-100 shadow-xl shadow-red-500  ">
          <figure>
            <img className=""
              src="../../public/img/Rectangle 336.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center pt-[27px] ">
            <p className="text-[24px] font-semibold mb-5">Ronald Richards</p>
            <p lassName="text-[16px] font-semibold">web Developer</p>
          </div>
          <div className='absolute bg-yellow-100/30 h-full w-full opacity-0 hover:opacity-100'>
            <div className='flex justify-around relative top-36'>
            <img className='w-[36px] h-[36px]' src="../../public/img/Group 18221.png" alt="" />
                <img className='w-[36px] h-[36px]' src="../../public/img/Group 18222.png" alt="" />
                <img className='w-[36px] h-[36px]' src="../../public/img/Group.png" alt="" />
                <img className='w-[36px] h-[36px]' src="../../public/img/Group 18223.png" alt="" />
                <img className='w-[36px] h-[36px]' src="../../public/img/Group 18224.png" alt="" />
            </div>

          </div>
        </div>
    
      </div>

      <button className="border border-red-500 text-[16px] font-semibold bg-[#ECA76E] text-white py-[12px] px-[29px] rounded-md">VIEW ALL</button>
      
    </div>
  )
}

export default OurTeam;
