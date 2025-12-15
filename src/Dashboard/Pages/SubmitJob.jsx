import React from "react";

function SubmitJob() {
  return (
    <>
      {/* Page Title */}
      <h2 className="text-5xl font-[500] text-black py-2">
        Post a New Job
      </h2>

      {/* Form Container */}
      <div className="w-full bg-white p-10 rounded-xl shadow-md mt-10">
        <h4 className="text-3xl pb-6 text-[#3c8968]">
          Job Details
        </h4>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Employer Name */}
          <div className="md:col-span-2">
            <label className="block text-lg mb-1 font-[400]">
              Employer Name*
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-[55px] border border-[#e5e5e5] rounded-md px-4 focus:outline-none focus:border-[#3c8968]"
            />
          </div>

          {/* Job Title */}
          <div className="md:col-span-2">
            <label className="block text-lg mb-1 font-[400]">
              Job Title*
            </label>
            <input
              type="text"
              placeholder="Frontend Developer"
              className="w-full h-[55px] border border-[#e5e5e5] rounded-md px-4 focus:outline-none focus:border-[#3c8968]"
            />
          </div>

          {/* Job Description */}
          <div className="md:col-span-2">
            <label className="block text-lg mb-1 font-[400]">
              Job Description*
            </label>
            <textarea
              rows="6"
              placeholder="Write something about the job..."
              className="w-full border border-[#e5e5e5] rounded-md p-4 focus:outline-none focus:border-[#3c8968]"
            />
            <p className="text-base text-[#00000080] mt-1">
              Brief description, URLs will be clickable
            </p>
          </div>

          {/* Job Category */}
          <div>
            <label className="block text-lg mb-1 font-[400]">
              Job Category*
            </label>
            <select
              className="w-full h-[55px] border border-[#e5e5e5] rounded-md px-4 text-gray-500 focus:outline-none focus:border-[#3c8968]"
            >
              <option>Designer</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full Stack</option>
            </select>
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-lg mb-1 font-[400]">
              Job Type*
            </label>
            <select
              className="w-full h-[55px] border border-[#e5e5e5] rounded-md px-4 text-gray-500 focus:outline-none focus:border-[#3c8968]"
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-lg mb-1 font-[400]">
              Salary Range
            </label>
            <input
              type="text"
              placeholder="$2000 - $4000"
              className="w-full h-[55px] border border-[#e5e5e5] rounded-md px-4 focus:outline-none focus:border-[#3c8968]"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg mb-1 font-[400]">
              Job Location
            </label>
            <input
              type="text"
              placeholder="Cairo, Egypt"
              className="w-full h-[55px] border border-[#e5e5e5] rounded-md px-4 focus:outline-none focus:border-[#3c8968]"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-[#3c8968] text-white px-10 py-3 rounded-md text-lg hover:opacity-90 transition"
            >
              Submit Job
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default SubmitJob;