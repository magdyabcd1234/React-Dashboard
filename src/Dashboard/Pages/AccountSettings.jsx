import React from 'react'

function AccountSettings() {
  return (
    <>
    <div className='w-full profile-container'>
      <h2 className='text-5xl font-[500] text-black py-2'>Account Settings</h2>

      <div className='w-full bg-white p-10 rounded-3xl shadow-md mt-10'>
        <h2 className='text-3xl pb-8 text-[#3f634d] font-[500]'>Edit & Update</h2>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className="mb-2">
            <label className='block text-lg mb-1 leading-[28px] font-[400]'>First Name *</label>
            <input type="text" placeholder='john Doe'/>
          </div>
          <div className="mb-2">
            <label className='block text-lg mb-1 leading-[28px] font-[400]'>Last Name *</label>
            <input type="text" placeholder='Kabir'/>
          </div>
          <div className="md:col-span-2">
            <label className='block text-lg mb-1 leading-[28px] font-[400]'>Email *</label>
            <input type="email" placeholder='johndoe@example.com'/>
          </div>
          <div className="md:col-span-2">
            <label className='block text-lg mb-1 leading-[28px] font-[400]'>Phone Number *</label>
            <input type="text" placeholder='-810 032 987 977'/>
          </div>

          <div className="w-full flex justify-start items-center mt-5">
            <button className='rounded-md px-8 py-2 text-lg bg-[#244034] font-[500] text-white hover:bg-[#d2f34c] hover:text-[#3f63fd] duration-300 transition-colors'>
               Save
            </button>

        <button className='rounded-full px-6 py-2 text-lg font-[500] text-[#31795a]'>
          Cancel
        </button>

          </div>
        </form>
      </div>

      <div className='w-full bg-white p-10 rounded-3xl shadow-md mt-10'>
      <h2 className='text-3xl pb-8 text-[#3f634d] font-[500]'>Change Password</h2>
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className="md:col-span-2">
            <label className='block text-lg mb-1 leading-[28px] font-[400]'>Old Password *</label>
            <input type="password" className='w-full border rounded p-4'/>
          </div>
          <div className="md:col-span-2">
            <label className='block text-lg mb-1 leading-[28px] font-[400]'>New Password *</label>
            <input type="password" className='w-full border rounded p-4'/>
          </div>
          <div className="md:col-span-2">
            <label className='block text-lg mb-1 leading-[28px] font-[400]'>Confirm Password *</label>
            <input type="password" className='w-full border rounded p-4'/>
          </div>
          <button className='rounded-md px-8 py-2 w-fit text-lg bg-[#244034] font-[500] text-white hover:bg-[#d2f34c] hover:text-[#3f63fd] duration-300 transition-colors'>
               Save & Update
            </button>
          </form>
      </div>
    </div>
    </>
  )
}

export default AccountSettings