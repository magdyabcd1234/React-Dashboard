import React, { useRef, useState } from "react";
import user from "../../assets/user.jpg";

function MyProfile() {
  const [members, setMembers] = useState([
    { name: "", designation: "", email: "", isOpen: true },
  ]);

  const handleAddMember = () => {
    setMembers([
      ...members,
      { name: "", designation: "", email: "", isOpen: true },
    ]);
  };

  const handleRemove = (index) => {
    const updated = [...members];
    updated.splice(index, 1);
    setMembers(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const toggleOpen = (index) => {
    const updated = [...members];
    updated[index].isOpen = !updated[index].isOpen;
    setMembers(updated);
  };

  const fileInputRef = useRef(null);

  const handlefileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected File", file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDelete = () => {
    alert("Photo Deleted");
  };
  return (
    <>
      <div className="w-full profile-container">
        <h2 className="text-5xl font-[500] text-black py-2">Profile</h2>

        <div className="w-full bg-white p-10 rounded-3xl shadow-md mt-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center sm:items-center space-x-4 mb-6">
            <img
              src={user}
              alt=""
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex items-center gap-4">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onClick={handlefileChange}
              />
              <button
                onClick={handleUploadClick}
                className="bg-[#d9f04f] hover:bg-[#3c8968] hover:text-white transition-colors duration-300 text-[#244034] font-[600] text-base px-5 py-2 rounded-md"
              >
                Upload new photo
              </button>
              <button
                onClick={handleDelete}
                className="text-[#244034] hover:text-red-500 font-semibold transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="md:col-span-2 mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Employer Name*
              </label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Website*
              </label>
              <input type="text" placeholder="https://somename.com" />
            </div>

            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Email*
              </label>
              <input type="email" placeholder="company@gmail.com" />
            </div>

            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Company Size*
              </label>
              <input type="number" min="0" max="100" placeholder="700" />
            </div>

            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Founded Date*
              </label>
              <input type="date" />
            </div>

            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Category*
              </label>
              <input type="text" placeholder="Marketing, finace" />
            </div>

            <div className="mb-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Phone Number*
              </label>
              <input type="text" placeholder="+91 9876543210" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                About Company*
              </label>
              <textarea
                rows="8"
                placeholder="Write Something About Your Company...."
              ></textarea>
              <p
                className="text-base text-[#00000080] mt-1"
                style={{ letterSpacing: ".-14px" }}
              >
                Brief description. URLs will be clickable
              </p>
            </div>
          </form>
        </div>

        <div className="w-full bg-white p-10 rounded-3xl shadow-md mt-10">
          <h4 className="text-3xl pb-4 text-[#3c8968]">Social Media</h4>

          <div className="md:col-span-2">
            <label className="block text-lg mb-1 leading-[20px] font-[400]">
              Network 1
            </label>
            <input
              type="text"
              className="w-full border rounded p-4"
              placeholder="https://facebook.com/"
            />
          </div>

          <div className="md:col-span-2 mt-3">
            <label className="block text-lg mb-1 leading-[20px] font-[400]">
              Network 2
            </label>
            <input
              type="text"
              className="w-full border rounded p-4"
              placeholder="https://twitter.com/FIFAcom"
            />
          </div>

          <button className="mt-4 p-3 bg-[#f0f5f3] text-[#3c8968] rounded-md">
            + Add more Link
          </button>
        </div>

        <div className="w-full bg-white p-10 rounded-3xl shadow-md mt-10">
          <h4 className="text-3xl pb-4 text-[#3c8968]">Address & Location</h4>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
            <div className="col-span-full lg:col-span-4 md:col-span-2">
              <label className="block text-lg mb-1 leading-[20px] font-[400]">
                Address*
              </label>
              <input
                type="text"
                className="w-full border rounded p-4"
                placeholder="Cowrasta , Chandana , Gaziapur Sadar"
              />
            </div>

            <div>
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Country*
              </label>
              <div className="relative w-full">
                <select
                  className="w-full h-[55px] tracking-[-0.16px] border border-[#e5e5e5] rounded-[7px] text-[1.1rem] text-[#3f634d] font-[200] px-5 pr-10 appearance-none focus:outline-none"
                  defaultValue="India"
                >
                  <option>India</option>
                  <option>America</option>
                  <option>China</option>
                  <option>Japan</option>
                  <option>France</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 transform-translate-y-1/2 text-[#3f634d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                City*
              </label>
              <div className="relative w-full">
                <select
                  className="w-full h-[55px] tracking-[-0.16px] border border-[#e5e5e5] rounded-[7px] text-[1.1rem] text-[#3f634d] font-[200] px-5 pr-10 appearance-none focus:outline-none"
                  defaultValue="Mumbai"
                >
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Patna</option>
                  <option>Surat</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 transform-translate-y-1/2 text-[#3f634d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Zip Code*
              </label>
              <input
                type="text"
                className="w-full border rounded p-4"
                placeholder="1708"
              />
            </div>

            <div>
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                State*
              </label>
              <div className="relative w-full">
                <select
                  className="w-full h-[55px] tracking-[-0.16px] border border-[#e5e5e5] rounded-[7px] text-[1.1rem] text-[#3f634d] font-[200] px-5 pr-10 appearance-none focus:outline-none"
                  defaultValue="Gujrat*"
                >
                  <option>Gujrat</option>
                  <option>Kerala</option>
                  <option>UP</option>
                  <option>Bihar</option>
                  <option>Punjab</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 transform-translate-y-1/2 text-[#3f634d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-span-full lg:col-span-4 md:col-span-2">
              <label className="block text-lg mb-1 leading-[28px] font-[400]">
                Map Location*
              </label>
              <input
                type="text"
                className="w-full border rounded p-4"
                placeholder="XC23+6XC, Moiran , N105"
              />
            </div>

            <div className="col-span-full lg:col-span-4 md:col-span-2">
            <iframe
            className="mt-4 w-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71772249676!2d73.09068439469182!3d22.322081830866296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8a9c9b0b3bb%3A0x6bffb8fbb2d0a1b6!2sVadodara%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000" 
             width='600'
             height='450'
             referrerPolicy='no-referrer-when-downgrade'
             allowFullScreen=""
             loading="lazy"
             />
            </div>
          </div>
        </div>

        <div className="w-full bg-white p-10 rounded-3xl shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-5">Members</h2>
          <label className="block text-lg mb-1 leading-[20px] font-[400]">Add & Remove Member*</label>
         {members.map((member, index) => (
          <div key={index} className="mb-4 border rounded-xl p-5 bg-white shadow-sm transition-all duration-300 ease-in-out">
            <div
             className="flex justify-between items-center cursor-pointer"
             onClick={() => toggleOpen(index)}
             >
              <p className="font-[500] text-lg text-[#244034]">Add Member {index + 1}</p>
              <span className="text-gray-500 text-xl">
                <i className={`fa-solid ${member.isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></i>
              </span>
             </div>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${member.isOpen ? 'max-h-[1000px] mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-4">
                  <div className="w-full">
                    <label className="block text-lg mb-1 leading-[28px] font-[400]">Name*</label>
                    <input 
                    type="text"
                    placeholder="Product Designer (Google)"
                    className="w-full border rounded-md p-3"
                    value={member.name}
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                    />
                  </div>


                  <div className="w-full">
                    <label className="block text-lg mb-1 leading-[20px] font-[400]">Designation*</label>
                    <input 
                    type="designation"
                    placeholder="Account Manager"
                    className="w-full p-3 border rounded-md"
                    value={member.designation}
                    onChange={(e) => handleChange(index, 'designation', e.target.value)}
                    />
                  </div>


                  <div className="w-full">
                    <label className="block text-lg mb-1 leading-[20px] font-[400]">Email*</label>
                    <input 
                    type="email"
                    placeholder="newmmember@gmail.com"
                    className="w-full p-3 border rounded-md"
                    value={member.email}
                    onChange={(e) => handleChange(index, 'email', e.target.value)}
                    />
                  </div>


                  <button
                  onClick={() => handleRemove(index)}
                  className="mt-4 px-4 py-2 bg-gray-100 text-green-700 rounded hover:bg-red-100 hover:text-red-600 transition-all"
                  >

                  Remove

                  </button>
                </div>
              </div>
          </div>
         ))}
          <div>
            <button
            onClick={handleAddMember}
            className="mt-4 text-lg flex items-center gap-2 px-5 py-3 bg-[rgba(63,99,77,.2)] text-[#31795a] rounded-md hover:text-white transition duration-300 font-[500]"
            >

          <span className="text-xl">+</span> Add Another Member

            </button>
          </div>

          <div className="w-full flex justify-start items-center mt-5">
            <button className="rounded-full px-6 py-2 text-lg bg-[#244034] font-[500] text-white hover:bg-[#d2f34c] transition-all hover:text-black">Save</button>
            <button className="ml-3 font-semibold text-green-300">Cancel</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default MyProfile;
