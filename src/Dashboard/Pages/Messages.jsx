import React, { useEffect, useRef, useState } from "react";
import messagelogo from "../../assets/message-logo.png";
import messagedelete from "../../assets/message-delete.svg";
import messageshare from "../../assets/message-share.svg";
import messagenote from "../../assets/message-note.svg";

function Messages() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const rightMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        rightMenuRef.current &&
        !rightMenuRef.current.contains(event.target)
      ) {
        setIsRightMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <h2 className="text-5xl font-[500] text-black py-2">Messages</h2>

      <div className="message-container bg-white flex flex-col xl:flex-row justify-between items-start rounded-3xl min-h-full">
        <div className="message-left w-full xl:w-[40%]" style={{ borderRight: "1px solid #e3e1e1" }}>
          <div className="message-left-header px-4 py-5 flex justify-between items-center w-full pb-5">
            <h4 className="text-xl font-semibold text-[#244034]">Inbox</h4>

            <div className="relative" ref={dropdownRef}>
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <i className="fa-solid fa-ellipsis text-xl text-gray-600"></i>
              </button>
              <ul
                className={`absolute right-0 mt-2 w-[200px] bg-white border border-gray-200 rounded-lg shadow-md z-50
               transition-all duration-200 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} `}
              >
                <li className="px-4 py-2 cursor-pointer">
                  <a href="#">Sent</a>
                </li>
                <li className="px-4 py-2 cursor-pointer">
                  <a href="#">Important</a>
                </li>
                <li className="px-4 py-2 cursor-pointer">
                  <a href="#">Draft</a>
                </li>
                <li className="px-4 py-2 cursor-pointer">
                  <a href="#" className="hover:text-red-500">Trash</a>
                </li>
              </ul>
            </div>
          </div>

          <form className="search-form w-full px-4 py-3 mr-6 relative border-none hidden lg:flex">
            <i className="fa-solid fa-magnifying-glass absolute top-[32px] right-10 text-black"></i>
            <input type="text" placeholder="Search here..." className="w-full px-10 rounded-full font-[300] bg-[rgba(0,0,0,0.05)] text-[rgba(0,0,0,.5)] border-none shadow-none focus:outline-none pl-[20px] pr-[15px] h-[55px] text-base"/>
          </form>

          <div className="py-6 space-y-6">
            <div className="flex justify-between gap-3 px-3 items-center mb-4 text-sm">
                    <button className="bg-[#244034] text-base text-white px-6 py-1 rounded-full font-[500]">All</button>
                    <span className="text-black font-[500] text-lg flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Read</span>
                    <span className="text-black font-[500] text-lg flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Unread</span>
                    <span className="text-black font-[500] text-lg flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Primary</span>
            </div>

            <div style={{borderTop: '1px solid #f3f3f3'}}>
              <div className="message-card relative px-10 py-5">
                  <div className="message-card-header flex justify-between items-center pb-2">
                    <h3 className="text-lg relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2 ">Jenny Rio.</h3>
                    <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase"> Aug 22</div>
                  </div>
                  <h2 className="text-2xl font-[600] pb-2">Work inquiry from google.</h2>
                  <p className="text-lg text-[rgba(0,0,0,0.5)] font-[300] pb-3">Hello, This is Jenny from google, We Are the largest online platform offer...</p>
                  <span className="text-[rgba(0,0,0,0.5)] bg-[#f0f5f3] rounded-sm text-xs font-[300] py-1 px-3 p-3">
                    <i className="fa-regular fa-file-lines pr-2"></i>
                    Details.pdf
                  </span>
              </div>

             

              <div className="message-card relative px-10 py-5 bg-[#f0f5f3] p-0" style={{borderLeft: "4px solid #779e86", borderRight: "4px solid #779e86"}}>
                  <div className="message-card-header flex justify-between items-center pb-2">
                    <h3 className="text-lg relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2 ">Hassan Eslam.</h3>
                    <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase"> MAY 22</div>
                  </div>
                  <h2 className="text-2xl font-[600] pb-2">Account Manager</h2>
                  <p className="text-lg text-[rgba(0,0,0,0.5)] font-[300] pb-3">Hello Greeting from Uber. Hope you doing great. iam approacing to you for..</p>
                  <span className="text-[rgba(0,0,0,0.5)] bg-[#f0f5f3] rounded-sm text-xs font-[300] py-1 px-3 p-3">
                    <i className="fa-regular fa-file-lines pr-2"></i>
                    Details.pdf
                  </span>
                  <span className="text-[rgba(0,0,0,0.5)] bg-[#f0f5f3] rounded-sm text-xs font-[300] py-1 px-3 p-3">
                    <i className="fa-regular fa-file-lines pr-2"></i>
                    Form.pdf
                  </span>
              </div>
              
            

          <div className="message-card relative px-10 py-5 p-0">
                  <div className="message-card-header flex justify-between items-center pb-2">
                    <h3 className="text-lg relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2 ">Mohamed Magdy</h3>
                    <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase"> JUN 22</div>
                  </div>
                  <h2 className="text-2xl font-[600] pb-2">Product Designer Oppotunitines</h2>
                  <p className="text-lg text-[rgba(0,0,0,0.5)] font-[300] pb-3">Hello, This is jannat from HuntX , We offer business solution to our client..</p>
           </div>

           <div className="message-card relative px-10 py-5">
                  <div className="message-card-header flex justify-between items-center pb-2">
                    <h3 className="text-lg relative message-card-title message-card-title1 text-[rgba(63,99,77,0.8)] flex items-center gap-2 ">Jakie Chan.</h3>
                    <div className="date text-sm font-[300] text-[rgba(0,0,0,0.5)] uppercase"> NOV 22</div>
                  </div>
                  <h2 className="text-2xl font-[600] pb-2">Hunting Marketing Specialist</h2>
                  <p className="text-lg text-[rgba(0,0,0,0.5)] font-[300] pb-3">Hunting Marketing Specialist</p>
           </div>
        </div>
      </div>
    </div>




     <div className="message-right w-full xl:w-[60%]">
          <div className="message-right-header p-10 flex justify-between items-center w-full pb-5">
            <div className="flex items-center ">
              <img src={messagelogo} alt="" />
              <div className="pl-3">
                  <div className="text-xl font-[600] text-[#254035]">Payoneer</div>
                  <p className="text-[rgba(0,0,0,0.4)] text-base font-[300]">Payneer@inquiry.com</p>
              </div>
            </div>
            <div className="email-info">
              <div className="time uppercase text-[rgba(0,0,0,0.4)] font-[300] text-base pb-2">
                4:45 (3 hours ago)
              </div>
              <div className="flex justify-end items-center gap-5">
                <img src={messagedelete} alt="" className="w-5"/>
                <img src={messageshare} alt="" className="w-6"/>
                <div className="relative" ref={rightMenuRef}>
                  <button onClick={() => setIsRightMenuOpen(prev => !prev)}>
                    <i className="fa-solid fa-ellipsis-vertical text-lg text-gray-400"></i>
                  </button>
                  {isRightMenuOpen && (
                    <ul className="absolute right-0 mt-2 w-40 bg-white z-50 text-sm" style={{border: "1px solid #f1f1f1", boxShadow: "0 30px 60px rgba(0,0,0,0.1)"}}>
                      <li className="px-4 py-2 cursor-pointer text-base text-[#6a6a6a]">Reply</li>
                      <li className="px-4 py-2 cursor-pointer text-base text-[#6a6a6a]">Forward</li>
                      <li className="px-4 py-2 cursor-pointer text-base text-[#6a6a6a]">Block</li>
                      <li className="px-4 py-2 cursor-pointer text-base hover:text-red-500 text-[#6a6a6a]">Delete</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-10 flex flex-col items-start w-full" style={{borderTop: '1px solid rgba(243,243,243)', borderBottom: "1px solid rgba(243, 243, 243)"}}>
            <h2 className="text-3xl font-[600] pb-5">Account Manager.</h2>
            <p className="font-[300] text-base text-[#000000b3] pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum officiis dolores repellendus voluptatem,</p>
            <p className="font-[300] text-base text-[#000000b3] pb-5">What we need from you to start:</p>
            <ul>
              <li className="font-[300] text-base text-[#000000b3] pb-1"> - Your CV</li>
              <li className="font-[300] text-base text-[#000000b3] pb-1"> - Verified GOV ID</li>
            </ul>
            <p className="font-[300] text-base text-[#000000b3] pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores perferendis corporis voluptatem similique voluptas repudiandae modi! Voluptatum, impedit mollitia.:</p>
            <p className="font-[300] text-base text-[#000000b3] pb-5">Our Telegram <a href="#" className="font-[500] text-[#3f634d]">@payoneer</a></p>
          </div>

          <div className="flex justify-between items-center gap-3 px-10 py-5">
            <h6 className="text-xl font-[500]">2 Attachment</h6>
            <a href="#" className="text-[#31795a] font-[500] text-base">Download All</a>
          </div>
          <div className="space-y-4 px-10 py-5">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm border">
                <div className="w-[37px] h-[37px] flex justify-center items-center bg-[#f0f5f3] rounded-full object-contain p-2">
                  <img src={messagenote} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[300] text-[#254035]">Project-details.pdf</span>
                  <span className="text-xs text-[rgba(36,64,52,0.5)] font-[300] text-[13px]">2.3mb</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm border">
                <div className="w-[37px] h-[37px] flex justify-center items-center bg-[#f0f5f3] rounded-full object-contain p-2">
                  <img src={messagenote} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-[300] text-[#254035]">Form.pdf</span>
                  <span className="text-xs text-[rgba(36,64,52,0.5)] font-[300] text-[13px]">1.3mb</span>
                </div>
              </div>
            </div>


                  {/* Message Form */}
                  <div className="border border-gray-300 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 text-sm text-gray-600">
                    <div>
                      <span className="text-[#254035] text-base font-[400]">To</span>
                      <span className="ml-2 text-gray-500 font-[300]">payoneer@inquiry.com</span>
                    </div>
                    <div className="space-x-4">
                      <span className="hover:underline text-base cursor-pointer">Cc</span>
                      <span className="hover:underline text-base cursor-pointer">Bcc</span>
                    </div>
                  </div>

                  <textarea 
                  rows="5"
                  className="w-full p-4 font-[300] text-md focus:outline-none resize-none text-black"
                  placeholder="Write your message..."
                  defaultValue={`Hi, Mary Cooper! 
Thanks for your invitaion for the account position for your company. I will to you soon`}
                  ></textarea>

                  <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-gray-500 text-xl">
                      <i className="fa-solid fa-paperclip cursor-pointer"></i>
                      <i className="fa-regular fa-face-smile cursor-pointer"></i>
                      <i className="fa-regular fa-image cursor-pointer"></i>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <i className="fa-regular fa-trash-can text-lg text-gray-400 cursor-pointer"></i>
                      <button className="bg-[#244034] hover:bg-[#d2f34c] transition-colors duration-300 px-4 py-2 rounded-full text-white">Reply</button>
                    </div>
                  </div>
              </div>
          </div>
     </div>
  </div>
    </>
  );
}

export default Messages;
