import React, { useState } from "react";

import candidate1 from "../../assets/candidate-1.png";
import candidate2 from "../../assets/candidate-2.png";
import candidate3 from "../../assets/candidate-3.png";
import candidate4 from "../../assets/candidate-4.png";

function SavedCandidate() {
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <>
      <h2 className="text-4xl font-medium text-[#244034] pb-4">
        Saved Candidate!
      </h2>

      {/* Card 1 */}
      <div className="candidate-card bg-white rounded-xl flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-start md:items-center p-6 md:p-8 shadow-sm hover:shadow-md transition mb-4 mt-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={candidate1} alt="Profile" className="w-17 h-17 rounded-full object-cover" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Julia Ark</h2>
            <p className="text-gray-400 text-sm">Graphic Designer</p>
            <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Digital</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Design</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">UI</span>
                <span className="px-4 py-1 bg-lime-300 text-sm font-semibold rounded-full">2+</span>
            </div>
          </div>
        </div>


       <div className="ps-[10%] grid grid-cols-2 gap-4 candidate-card-box">
        <div>
          <p className="text-gray-400 text-sm">Salary</p>
          <p className="font-semibold">$30k-$50k/yr</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <p className="font-semibold">California, US</p>
        </div> 
        </div> 

      <div className="relative">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full border hover:bg-green-500 hover:text-white transition flex items-center justify-center">
            <i className="ri-eye-line text-lg"></i>
          </button>
          <i className="ri-more-2-fill text-gray-400 text-lg hover:text-green-500 cursor-pointer" onClick={() => setOpenMenu(openMenu === 1 ? null : 1)}></i>
        </div>

        <div className={`absolute drop-menu right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50 origin-top-right transition-all duration-200 ease-out ${openMenu === 1 ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
          <ul className="py-2">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-eye-line text-green-600"></i>
              <span>View</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-edit-line text-yellow-600"></i>
              <span>Edit</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-delete-bin-6-line text-red text-red-500"></i>
              <span>Delete</span>
            </li>
          </ul>
        </div>
      </div>
    </div>



          {/* Card 2 */}
          <div className="candidate-card bg-white rounded-xl flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-start md:items-center p-6 md:p-8 shadow-sm hover:shadow-md transition mb-4 mt-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={candidate2} alt="Profile" className="w-17 h-17 rounded-full object-cover" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Luciller Whitley</h2>
            <p className="text-gray-400 text-sm">Javascript Develper</p>
            <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Java</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Developer</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Code</span>
                <span className="px-4 py-1 bg-lime-300 text-sm font-semibold rounded-full">2+</span>
            </div>
          </div>
        </div>


       <div className="ps-[10%] grid grid-cols-2 gap-4 candidate-card-box">
        <div>
          <p className="text-gray-400 text-sm">Salary</p>
          <p className="font-semibold">$5k-$9k/yr</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <p className="font-semibold">London, UK</p>
        </div> 
        </div> 

      <div className="relative">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full border hover:bg-green-500 hover:text-white transition flex items-center justify-center">
            <i className="ri-eye-line text-lg"></i>
          </button>
          <i className="ri-more-2-fill text-gray-400 text-lg hover:text-green-500 cursor-pointer" onClick={() => setOpenMenu(openMenu === 2 ? null : 2)}></i>
        </div>

        <div className={`absolute drop-menu right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50 origin-top-right transition-all duration-200 ease-out ${openMenu === 2 ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
          <ul className="py-2">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-eye-line text-green-600"></i>
              <span>View</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-edit-line text-yellow-600"></i>
              <span>Edit</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-delete-bin-6-line text-red text-red-500"></i>
              <span>Delete</span>
            </li>
          </ul>
        </div>
      </div>
        </div>


             {/* Card 3 */}
             <div className="candidate-card bg-white rounded-xl flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-start md:items-center p-6 md:p-8 shadow-sm hover:shadow-md transition mb-4 mt-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={candidate3} alt="Profile" className="w-17 h-17 rounded-full object-cover" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">John Doe</h2>
            <p className="text-gray-400 text-sm">UI/UX Designer</p>
            <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Design</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Product</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">UI</span>
                <span className="px-4 py-1 bg-lime-300 text-sm font-semibold rounded-full">2+</span>
            </div>
          </div>
        </div>


       <div className="ps-[10%] grid grid-cols-2 gap-4 candidate-card-box">
        <div>
          <p className="text-gray-400 text-sm">Salary</p>
          <p className="font-semibold">$200k-$400k/yr</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <p className="font-semibold">Dubai, UAE</p>
        </div> 
        </div> 

      <div className="relative">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full border hover:bg-green-500 hover:text-white transition flex items-center justify-center">
            <i className="ri-eye-line text-lg"></i>
          </button>
          <i className="ri-more-2-fill text-gray-400 text-lg hover:text-green-500 cursor-pointer" onClick={() => setOpenMenu(openMenu === 3 ? null : 3)}></i>
        </div>

        <div className={`absolute drop-menu right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50 origin-top-right transition-all duration-200 ease-out ${openMenu === 3 ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
          <ul className="py-2">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-eye-line text-green-600"></i>
              <span>View</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-edit-line text-yellow-600"></i>
              <span>Edit</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-delete-bin-6-line text-red text-red-500"></i>
              <span>Delete</span>
            </li>
          </ul>
        </div>
      </div>
          </div>

                     {/* Card 4 */}
                     <div className="candidate-card bg-white rounded-xl flex flex-col md:grid md:grid-cols-[auto_1fr_auto] items-start md:items-center p-6 md:p-8 shadow-sm hover:shadow-md transition mb-4 mt-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={candidate4} alt="Profile" className="w-17 h-17 rounded-full object-cover" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Larry Evans</h2>
            <p className="text-gray-400 text-sm">Graphic Designer</p>
            <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Digital</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">UI</span>
                <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">Design</span>
                <span className="px-4 py-1 bg-lime-300 text-sm font-semibold rounded-full">2+</span>
            </div>
          </div>
        </div>


       <div className="ps-[10%] grid grid-cols-2 gap-4 candidate-card-box">
        <div>
          <p className="text-gray-400 text-sm">Salary</p>
          <p className="font-semibold">$30k-$50k/yr</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <p className="font-semibold">New York, US</p>
        </div> 
        </div> 

      <div className="relative">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full border hover:bg-green-500 hover:text-white transition flex items-center justify-center">
            <i className="ri-eye-line text-lg"></i>
          </button>
          <i className="ri-more-2-fill text-gray-400 text-lg hover:text-green-500 cursor-pointer" onClick={() => setOpenMenu(openMenu === 4 ? null : 4)}></i>
        </div>

        <div className={`absolute drop-menu right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50 origin-top-right transition-all duration-200 ease-out ${openMenu === 4 ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
          <ul className="py-2">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-eye-line text-green-600"></i>
              <span>View</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-edit-line text-yellow-600"></i>
              <span>Edit</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <i className="ri-delete-bin-6-line text-red text-red-500"></i>
              <span>Delete</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
        <div className="flex items-center justify-center">
          <button className="mt-5 bg-lime-300 hover:bg-lime-400 transition px-7 py-2 rounded">Load More</button>
        </div>
    </>
  );
}

export default SavedCandidate;
