import React, { useState, useRef, useEffect } from "react";
import bookmark from "../assets/boomark.svg";
import eye from "../assets/eye.svg";
import usericon from "../assets/usericon.svg";
import write from "../assets/write.svg";

import graph from "../assets/main-graph.png";

import postjob1 from "../assets/postedjob-icon-01.webp";
import postjob2 from "../assets/postedjob-icon-02.webp";
import postjob3 from "../assets/postedjob-icon-03.webp";
import postjob4 from "../assets/postedjob-icon-04.webp";
import postjob5 from "../assets/postedjob-icon-05.webp";
import postjob6 from "../assets/postedjob-icon-06.webp";

function Maincontent() {
  const [activeActionIndex, setActiveIndex] = useState(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownRefs.current.some((ref) => ref && ref.contains(event.target))
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const jobs = [
    "Web & Mobile Prototype Desinger...",
    "Document Writer",
    "Outbound Call Service",
    "Product Desinger",
  ];

  const postedjob = [
    { icon: postjob1, title: "Fixed-price", location: "USA,Palo Alto" },
    { icon: postjob2, title: "Fulltime", location: "USA,Palo Alto" },
    { icon: postjob3, title: "Part time", location: "USA,New York" },
    { icon: postjob4, title: "Freelance", location: "USA,San Jose" },
    { icon: postjob5, title: "Part time", location: "USA,Cupertion" },
    { icon: postjob6, title: "Fulltime", location: "USA,Menlo Park" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const handleSelect = (job) => {
    setSelectedJob(job);
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <h2 className="text-4xl font-[500] text-[#244034] pb-4">Dashboard !</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 gap-10 py-5 ">
          {[
            { value: "1.1k", label: "Total Visitor", icon: usericon },
            { value: "05", label: "Shortlisted", icon: bookmark },
            { value: "2.1k", label: "Views", icon: eye },
            { value: "10", label: "Applied Job", icon: write },
          ].map((item, idx) => (
            <div
              key={idx}
              className="dashboard-item shadow-[0_6px_6px_rgba(0,0,0,.02)] bg-white rounded-[30px] total-visitor flex items-start justify-between relative">
              <div className="flex flex-col items-start z-[9]">
                <div className="text-5xl mb-1 font-semibold text-[#244034]">
                  {item.value}
                </div>
                <span className="text-lg font-[300] text-[rgba(0,0,0,.5)]">
                  {item.label}
                </span>
              </div>
              <div className="bg-[#d2f34c] rounded-full w-16 h-16 flex items-center justify-center z-[9] ">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-10 pt-10">
          <div className="bg-white rounded-xl shadow-sm card-item">
            <h2
              className="font-semibold header-text"
              style={{ borderBottom: "1px solid #e3f0eb" }}
            >
              Job Views
            </h2>
            <div className="header-body-content">
              <div className="relative w-full flex items-center flex-col gap-3">
                <div className="w-full flex items-center gap-3 mb-10">
                  <label className="flex items-center font-semibold text-[#183b56] mb-11">
                    Jobs:
                  </label>
                  <div
                    className="relative
                     border-2 border-[#3f634d]
                      px-4 py-3 rounded-md
                     cursor-pointer flex w-full 
                     justify-between
                      items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="text-md text-[#183b56] font-[300]">
                      {selectedJob}
                    </span>
                    <svg
                      className={`w-4 h-4 ml-2 transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>

                  {isOpen && (
                    <ul className="absolute z-10 w-full mt-2 top-[50px] font-[300] bg-white border border-[#d1d5db] rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {jobs.map((job, index) => (
                        <li
                          key={index}
                          className={`px-4 py-3 text-md font-[300] cursor-pointer hover:bg-[#f4f4f4] ${
                            selectedJob === job
                              ? "text-green-500 bg-[rgba(36,64,52,.03)]"
                              : "text-[#183b56]"
                          }`}
                          onClick={() => handleSelect(job)}
                        >
                          {job}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="graph-image h-[350px] w-full">
                  <img
                    src={graph}
                    alt="graph-image"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm h-full card-item">
            <h2
              className="font-semibold header-text"
              style={{ borderBottom: "1px solid #e3f0eb" }}
            >
              Posted Jobs
            </h2>
            <ul className="w-full header-body-content space-y-7">
              {postedjob.map((job, index) => (
                <li
                  key={index}
                  className="flex justify-between items-start w-full"
                >
                  <div className="job-title flex items-center">
                    <img
                      src={job.icon}
                      alt="post-job-icon"
                      className="w-12 h-12"
                    />
                    <div className="ps-4">
                      <h6 className="font-[400] text-xl">
                        <a
                          href="#"
                          className="hover:text-[#31795a] hover:underline transition-colors duration-300"
                        >
                          {job.title}
                        </a>
                      </h6>
                      <span className="text-[rgba(36,64,52,.5)] font-[300] text-md">
                        Fulltime. {job.location}
                      </span>
                    </div>
                  </div>
                  <div
                    className="relative"
                    ref={(el) => (dropdownRefs.current[index] = el)}
                  >
                    <div
                      className="job-action cursor-pointer"
                      onClick={() =>
                        setActiveIndex((prev) =>
                          prev === index ? null : index
                        )
                      }
                    >
                      <i className="fa-solid fa-ellipsis text-xl text-[rgba(36,64,52,.5)]"></i>
                    </div>
                    <ul
                      className={`absolute left-[-150px] top-[40px] text-start mt-2 w-[200px] bg-white rounded-xl shadow-md p-2 space-y-2 z-10 transition-all duration-300 ease-in-out ${activeActionIndex === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                    >
                      <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-[#244034]">View Job</li>
                      <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-[#244034]">Archive</li>
                      <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-[#244034]">Delete</li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maincontent;
