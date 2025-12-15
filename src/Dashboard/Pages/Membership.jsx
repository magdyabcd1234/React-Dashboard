import React from 'react'

function Membersship() {
  return (
    <>
       <h2 className='text-5xl font-[500] text-black py-2'>Membership</h2>
       <div>
        <div className="flex flex-wrap justify-between min-h-[200px] items-center bg-[#edf3f0] border border-[#254035] rounded-[10px] mb-10">
          <div className='text-[#0e4d32] w-full md:w-3/5 h-full md:border-r md:border-b-0 border-b border-[#254035] p-5 flex flex-col items-start justify-center'>
          <h2 className='font-semibold text-3xl mb-2'>Current Plan(Gold)</h2>
          <p className='text-lg text-[#000000b3] font-[300] w-full lg:w-[70%]'>Unlimited access to our legal document library and online rental application tool, billed monthly</p>
          </div>
          <div className='w-full md:w-2/5 md:mt-0 flex flex-col xl:flex-row items-start justify-start p-10 gap-3'>
            <div className='text-6xl font-semibold text-[#0e4d32]'>$29</div>
            <div>
              <div className='text-xl font-[500] text-[#0e4d32]'>Monthly Plan</div>
              <div>
                <div className='text-md text-[#000000b3] font-[400]'>Your subscription renews <span className='text-black font-[500]'>July 12th, 2023</span></div>
                <button className='mt-2 text-[#31795a] underline text-lg font-medium'>Cancel Current Plan</button>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 xl-grid-cols-3 md:grid-cols-2 gap-2'>
          <div className='bg-white rounded-3xl text-center' style={{padding: "38px 20px"}}>
            <h3 className="text-[rgba(0,0,0,.35)] font-[200] text-xl mb-5">Standard</h3>
            <div className='text-[64px] font-semibold text-[#2c6c50] mb-8'>0</div>
            <ul className='space-y-3 mb-10'>
              <li className='text-xl text-[#31795a]'>15 job posting</li>
              <li className='text-xl text-[#31795a]'>7 feature job</li>
              <li className='text-xl text-[#31795a]'>Job post live for 30 days </li>
            </ul>
            <button className='bg-[#2c6c50] text-white py-2.5 px-14 rounded-full text-lg font-[500]'>
              Choose Plan
            </button>
          </div>

          <div className='relative bg-white rounded-3xl text-center' style={{padding: "38px 20px"}}>
            <div className="popular-badge absolute left-0 top-3 bg-green-950 px-3 py-1 text-white rounded-tr-md rounded-br-md">popular</div>
            <h3 className="text-[rgba(0,0,0,.35)] font-[200] text-xl mb-5">Gold</h3>
            <div className='flex items-start justify-center text-[#2c6c50] my-10'>
              <span className='text-lg mt-1 font-medium'>$</span>
              <span className='text-[64px] leading-none font-[600] mx-1'>27</span>
              <span className='text-lg mt-2 font-medium'>.99</span>
            </div>
            <ul className='space-y-3 mb-10'>
              <li className='text-xl text-[#31795a]'>30 job posting</li>
              <li className='text-xl text-[#31795a]'>15 feature job</li>
              <li className='text-xl text-[#31795a]'>Job post live for 60 days </li>
            </ul>
            <button className='bg-[#2c6c50] text-white py-2.5 px-14 rounded-full text-lg font-[500]'>
              Choose Plan
            </button>
          </div>

          <div className='bg-white rounded-3xl text-center' style={{padding: "38px 20px"}}>
            <div className="popular-badge absolute left-0 top-3 bg-green-950 px-3 py-1 text-white rounded-tr-md rounded-br-md">popular</div>
            <h3 className="text-[rgba(0,0,0,.35)] font-[200] text-xl mb-5">Gold</h3>
            <div className='flex items-start justify-center text-[#2c6c50] my-10'>
              <span className='text-lg mt-1 font-medium'>$</span>
              <span className='text-[64px] leading-none font-[600] mx-1'>39</span>
              <span className='text-lg mt-2 font-medium'>.99</span>
            </div>
            <ul className='space-y-3 mb-10'>
              <li className='text-xl text-[#31795a]'>60 job posting</li>
              <li className='text-xl text-[#31795a]'>30 feature job</li>
              <li className='text-xl text-[#31795a]'>Job post live for 130 days </li>
            </ul>
            <button className='bg-[#2c6c50] text-white py-2.5 px-14 rounded-full text-lg font-[500]'>
              Choose Plan
            </button>
          </div>



        </div>
       </div>
    </>
  )
}

export default Membersship