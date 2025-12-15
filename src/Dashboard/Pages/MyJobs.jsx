import React, { useEffect, useRef, useState } from "react";
import eye from "../../assets/eye.svg";
import edit from "../../assets/edit.svg";
import share from "../../assets/share.svg";
import deleteicon from "../../assets/delete.svg";

const jobData = [
  {
    title: "Brand & Producer Designer",
    type: "Fulltime",
    location: "Spain",
    date: "05 Jun, 2025",
    applicants: 130,
    status: "Active",
  },

  {
    title: "Marketing Specialist",
    type: "Part-time",
    location: "UK",
    date: "13 Aug, 2025",
    applicants: 20,
    status: "Pending",
  },

  {
    title: "Account Manager",
    type: "Fulltime",
    location: "USA",
    date: "27 Sep, 2025",
    applicants: 278,
    status: "Expired",
  },

  {
    title: "Developer for IT company",
    type: "Fulltime",
    location: "Germany",
    date: "14 Feb, 2025",
    applicants: 70,
    status: "Active",
  },

  {
    title: "Marketing Specialist",
    type: "Part-time",
    location: "Uk",
    date: "13 Aug, 2025",
    applicants: 20,
    status: "Pending",
  },

  {
    title: "Brand & Producer Designer",
    type: "Fulltime",
    location: "Spain",
    date: "05 Jun, 2025",
    applicants: 130,
    status: "Active",
  },

  {
    title: "Developer for IT company",
    type: "Fulltime",
    location: "Germany",
    date: "14 Feb, 2025",
    applicants: 14,
    status: "Active",
  },

  {
    title: "Accounting Manager",
    type: "Fulltime",
    location: "USA",
    date: "27 Sep, 2025",
    applicants: 278,
    status: "Expired",
  },

];

const statusColors = {
  Active: "bg-green-500",
  Pending: "bg-yellow-500",
  Expired: "bg-red-500",
}

function MyJobs() {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('All');
  const sortRef = useRef();
  const [filter, setFilter] = useState('All');

  const jobsToDisplay = filter === "New" ? jobData.slice(-4) : jobData;

  const filteredJobs = selectedSort === 'All' ? jobsToDisplay : jobsToDisplay.filter(job => job.status === selectedSort)
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideAllDropdown = dropdownRefs.current.every(
        (ref) => ref && !ref.contains(event.target)
      );
      if(
        clickedOutsideAllDropdown &&
        sortRef.current &&
        !sortRef.current.contains(event.target)
      ){
        setActiveDropdownIndex(null);
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
  <>
  <div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-10">
    <h2 className="text-5xl font-[500] text-black py-2">My Job</h2>

    <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 bg-[#f0f5f3] p-4 rounded-xl">
      <div className="flex items-center gap-2">
        <button
        onClick={() => setFilter('All')}
        className={`px-5 py-1.5 rounded-full text-sm font-[600] ${filter === "All" ? "bg-[#d9f04f] text-[#244034]" : 'bg-[#e0e2e1] text-[#044034]'}`}
        >
            All
        </button>
        <button
        onClick={() => setFilter('New')}
        className={`px-5 py-1.5 rounded-full text-sm font-[600] ${filter === "New" ? "bg-[#d9f04f] text-[#244034]" : 'bg-[#e0e2e1] text-[#044034]'}`}
        >
            New
        </button>
      </div>
      <div className="flex items-center gap-2 relative" ref={sortRef}>
        <span className="text-[#244034] text-lg font-[500]">Short by:</span>
        <span
        onClick={() => setIsSortOpen(!isSortOpen)}
        className="w-[180px] px-3 py-2 border border-black rounded-full flex items-center justify-between cursor-pointer"
        >

    {selectedSort}
    <i className="fa-solid fa-angle-down"></i>
        </span>
        <ul className={`absolute top-[48px] right-0 w-[180px] bg-white rounded-lg shadow-md z-50 border border-gray-200 py-2 transition-all duration-300  transition ${isSortOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
          {['All', "Active", "Pending", "Expired"].map((status) => (
            <li
            key={status}
            onClick={() => {
              setSelectedSort(status)
              setIsSortOpen(false)
            }}
            className={`px-4 py-2 text-md cursor-pointer hover:bg-gray-100 rounded-md transition ${selectedSort === status ? 'text-[#3c8968] font-medium' : 'text-gray-800'}`}
            >

            {status}

            </li>
          ))}
        </ul>
      </div>
     </div>
    </div>


        <div className="bg-white p-6 md:p-10 rounded-xl overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-[#eaf5f2] text-gray-600 text-left hidden md:table-header-group">
            <tr>
              <th className="py-2 px-6 text-lg font-[500]">Title</th>
              <th className="py-2 px-6 text-lg font-[500]">Job Created</th>
              <th className="py-2 px-6 text-lg font-[500]">applications</th>
              <th className="py-2 px-6 text-lg font-[500]">Status</th>
              <th className="py-2 px-6 text-lg font-[500] text-right">Action</th>
            </tr>
            </thead>
            <tbody className="text-gray-700 text-xs">
            {filteredJobs.map((job , index) => (
              <tr
              key={index}
              className="border-b border-gray-200 flex flex-col md:table-row md:flex-row gap-4 md:gap-0 py-4 md:py-0 px-4 md:px-0"
              >
                <td className="md:py-4 md:px-4">
                  <div className="md:font-[500] md:text-lg">
                    <span className="block md:hidden font-semibold text-sm text-gray-400">Title</span>
                    <div className="font-[500] text-lg">{job.title}</div>
                    <div className="text-base font-[300] text-[rgba(36,64,52,.7)]">
                      {job.type} . {job.location}
                    </div>
                  </div>
                </td>
                <td className="md:py-4 md:px-4 text-lg text-[#212529] font-[300]">
                  <span className="block md:hidden font-semibold text-sm text-gray-400">Job Created</span>
                  {job.date}
                </td>
                <td className="md:py-4 md:px-4 text-lg text-[#212529] font-[300]">
                  <span className="block md:hidden font-semibold text-sm text-gray-400">applications</span>
                  {job.applicants} applications
                </td>
                <td className="md:py-4 md:px-4">
                  <span className="block md:hidden font-semibold text-sm text-gray-400">Status</span>
                  <span className="inline-flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${statusColors[job.status]}`}></span>
                    <span className="text-lg text-[#212529] font-[300]">{job.status}</span>
                  </span>
                </td>
                <td
                className='md:py-4 md:px-4 relative'
                ref={(el) => (dropdownRefs.current[index] = el)}
                >
                 <span className="block md:hidden font-semibold text-sm text-gray-400">Action</span>
                 <i 
                 className="fa-solid fa-ellipsis text-xl text-gray-400 w-full text-right cursor-pointer"
                  onClick={() => setActiveDropdownIndex((prev) => (prev === index ? null : index))}
                 ></i>

                 {activeDropdownIndex === index && (
                  <ul
                  className="absolute right-0 mt-2 bg-white min-w-[140px] space-y-2 rounded-lg p-5 z-50"
                  style={{
                    boxShadow: "0 30px 60px rgba(0,0,0,.1)",
                    border: "1px solid #f1f1f1"
                  }}
                  >
                      <li>
                        <a href="#"
                        className="flex items-center gap-3 text-base font-[300]"
                        >
                          <img src={eye} alt="" className="w-4"/>
                          View
                        </a>
                      </li>
                      <li>
                        <a href="#"
                        className="flex items-center gap-3 text-base font-[300]"
                        >
                          <img src={share} alt="" className="w-4"/>
                          Share
                        </a>
                      </li>
                      <li>
                        <a href="#"
                        className="flex items-center gap-3 text-base font-[300]"
                        >
                          <img src={edit} alt="" className="w-4"/>
                          Edit
                        </a>
                      </li>
                      <li>
                        <a href="#"
                        className="flex items-center gap-3 text-base font-[300]"
                        >
                          <img src={deleteicon} alt="" className="w-4"/>
                          Delete
                        </a>
                      </li>
                  </ul>
                 )}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>  


  </div>
  </>
  
);
}

export default MyJobs;
